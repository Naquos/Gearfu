#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Robust downloader for Wakfu class & spell pages.

Features:
 - uses requests.Session() with cookies and redirects
 - retries with exponential backoff
 - logs HTTP status, redirection chain, content size
 - saves error pages to data/errors for debugging
 - configurable delays between requests (default 8-10s)
"""

import os
import time
import random
import requests
from urllib.parse import urljoin, urlparse

# ---------------- CONFIG ----------------
SITE_ROOT = "https://www.wakfu.com"
CLASS_PATHS = {
    "fr": "/fr/mmorpg/encyclopedie/classes/",
    "en": "/en/mmorpg/encyclopedia/classes/",
    "es": "/es/mmorpg/enciclopedia/clases/",
    "pt": "/pt/mmorpg/enciclopedia/classes/"
}
# classes list (use the list you want)
# CLASS_IDS = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19]
CLASS_IDS = [12]

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                  "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    "Accept-Language": "fr-FR,fr;q=0.9,en;q=0.8"
}

DATA_DIR = "data"           # where pages are saved
ERROR_DIR = os.path.join(DATA_DIR, "errors")

RETRIES = 3                # total attempts per URL
BACKOFF_FACTOR = 2         # exponential backoff multiplier
TIMEOUT = 30               # seconds for requests
ALLOW_REDIRECTS = True

# Delay between requests to avoid ban (configurable)
DELAY_MIN = 8
DELAY_MAX = 10

# ---------------- session ----------------
session = requests.Session()
session.headers.update(HEADERS)
# Option: session.verify = False  # only if you have TLS certificate issues (NOT recommended)

# ---------------- helpers ----------------
def ensure_dir(path):
    os.makedirs(path, exist_ok=True)

def save_bytes(path, data):
    ensure_dir(os.path.dirname(path))
    with open(path, "wb") as f:
        f.write(data)

def save_text(path, text):
    ensure_dir(os.path.dirname(path))
    with open(path, "w", encoding="utf-8", errors="replace") as f:
        f.write(text)

def random_delay():
    s = random.randint(DELAY_MIN, DELAY_MAX)
    print(f"   > Attente {s} secondes...")
    time.sleep(s)

def is_html_response(resp):
    ctype = resp.headers.get("Content-Type","").lower()
    return "text/html" in ctype or "application/xhtml+xml" in ctype or ctype==''

def log_response_info(resp):
    print(f"       HTTP {resp.status_code} - final URL: {resp.url}")
    if resp.history:
        hist = " -> ".join([f"{r.status_code} {r.headers.get('Location','')}" for r in resp.history])
        print(f"       Redirect chain: {hist}")
    print(f"       Content-Length header: {resp.headers.get('Content-Length')}, bytes downloaded: {len(resp.content)}")
    print(f"       Content-Type: {resp.headers.get('Content-Type')}")

def fetch_with_retries(url):
    """Fetch URL with retries + backoff. Returns Response or None."""
    delay = 1
    for attempt in range(1, RETRIES+1):
        try:
            resp = session.get(url, timeout=TIMEOUT, allow_redirects=ALLOW_REDIRECTS)
            # even if status_code is 4xx/5xx, we return resp to allow logging and saving
            return resp
        except requests.RequestException as e:
            print(f"     ! Fetch error ({attempt}/{RETRIES}): {e}")
            if attempt < RETRIES:
                sleep_sec = delay
                print(f"       -> retry after {sleep_sec}s")
                time.sleep(sleep_sec)
                delay *= BACKOFF_FACTOR
                continue
            else:
                return None

# ---------------- extraction helpers ----------------
from bs4 import BeautifulSoup

def extract_spell_links_from_class_html(html, base_url):
    """Return list of absolute spell URLs found inside anchors of class page."""
    soup = BeautifulSoup(html, "html.parser")
    urls = set()

    # elementary containers
    for cls in ("ak-elementary-spell-water","ak-elementary-spell-earth","ak-elementary-spell-wind","ak-elementary-spell-fire"):
        for a in soup.select(f"div.{cls} a"):
            href = a.get("href")
            if href:
                urls.add(urljoin(base_url, href))

    # support spells (actifs/passifs)
    support = soup.select_one("div.ak-spells-support")
    if support:
        for a in support.select("a"):
            href = a.get("href")
            if href:
                urls.add(urljoin(base_url, href))
    else:
        # fallback: search images pointing to spell png and take parent anchor if any
        for img in soup.select("img"):
            src = img.get("src","")
            if "/spell/" in src:
                parent_a = img.find_parent("a")
                if parent_a and parent_a.get("href"):
                    urls.add(urljoin(base_url, parent_a.get("href")))
    return sorted(urls)

def extract_spell_id_from_url(url):
    # expected ending: /{idClasse}-{nom}/{idSpell}-{nom}
    try:
        tail = url.rstrip("/").split("/")[-1]
        return tail.split("-")[0]
    except Exception:
        return None

# ---------------- main download loop ----------------
def main():
    ensure_dir(DATA_DIR)
    ensure_dir(ERROR_DIR)

    for lang, class_path in CLASS_PATHS.items():
        print("\n" + "="*60)
        print(f"LANG: {lang.upper()}")
        print("="*60 + "\n")

        base_class_url = urljoin(SITE_ROOT, class_path)
        classes_dir = os.path.join(DATA_DIR, lang, "classes")
        spells_dir = os.path.join(DATA_DIR, lang, "spells")

        ensure_dir(classes_dir)
        ensure_dir(spells_dir)

        for class_id in CLASS_IDS:
            class_url = f"{base_class_url}{class_id}"
            print(f"[Class] Downloading: {class_url}")
            random_delay()
            resp = fetch_with_retries(class_url)
            if resp is None:
                print(f"[ERROR] Impossible de télécharger {class_url} (request failed)")
                continue

            # log response
            log_response_info(resp)

            # check for suspicious content (Cloudflare/challenge/consent)
            snippet = resp.text[:1000].lower()
            if "captcha" in snippet or "cloudflare" in snippet or "you are being redirected" in snippet or "consent" in snippet:
                print("  -> WARNING: page contains possible anti-bot / captcha / consent markup. Saving for inspection.")
                err_path = os.path.join(ERROR_DIR, f"class_{lang}_{class_id}_warning.html")
                save_text(err_path, resp.text)
                # still attempt to save the page, but warn user
            # save class page if HTML
            if is_html_response(resp):
                class_path_file = os.path.join(classes_dir, f"{class_id}.html")
                save_bytes(class_path_file, resp.content)
                print(f"  -> Saved class page: {class_path_file} ({len(resp.content)} bytes)")
            else:
                print(f"  -> Unexpected content-type for class page: {resp.headers.get('Content-Type')}. Saved to errors.")
                err_path = os.path.join(ERROR_DIR, f"class_{lang}_{class_id}_badcontent.bin")
                save_bytes(err_path, resp.content)
                continue

            # parse class html and extract spell links
            try:
                spell_links = extract_spell_links_from_class_html(resp.text, SITE_ROOT)
                print(f"  -> Found {len(spell_links)} unique spell links in class page.")
            except Exception as e:
                print(f"  -> Error parsing class HTML: {e}")
                spell_links = []

            # download each spell page
            for spell_url in spell_links:
                # ensure the URL pattern roughly matches expected structure
                # optional small delay before each spell download
                random_delay()
                print(f"    [Spell] Downloading: {spell_url}")
                sresp = fetch_with_retries(spell_url)
                if sresp is None:
                    print(f"    [ERROR] Failed to download spell {spell_url}")
                    continue
                log_response_info(sresp)
                # if content indicates challenge, save into errors
                snippet2 = sresp.text[:1000].lower()
                if "captcha" in snippet2 or "cloudflare" in snippet2 or "you are being redirected" in snippet2:
                    print("      -> WARNING: spell page seems to contain anti-bot/challenge. Saving to errors.")
                    err_filename = f"spell_{lang}_{extract_spell_id_from_url(spell_url)}_challenge.html"
                    save_text(os.path.join(ERROR_DIR, err_filename), sresp.text)
                # save only if HTML
                if is_html_response(sresp):
                    sid = extract_spell_id_from_url(spell_url) or "unknown"
                    # Use the {idSpell}.html name to avoid collisions across classes
                    spell_file = os.path.join(spells_dir, f"{sid}.html")
                    save_bytes(spell_file, sresp.content)
                    print(f"      -> Saved spell page: {spell_file} ({len(sresp.content)} bytes)")
                else:
                    print(f"      -> Unexpected content-type for spell: {sresp.headers.get('Content-Type')}. Saved to errors.")
                    err_name = f"spell_{lang}_{extract_spell_id_from_url(spell_url)}_badcontent.bin"
                    save_bytes(os.path.join(ERROR_DIR, err_name), sresp.content)

    print("\nDownload complete. Check data/ and data/errors/ for results.")

if __name__ == "__main__":
    main()
