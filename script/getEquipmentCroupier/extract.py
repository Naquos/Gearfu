#!/usr/bin/env python3
"""
Wakfu Encyclopedia - Croupier Items Extractor

Captures item names from the in-game encyclopedia filtered by "Croupier".
Navigation between pages is done manually by the user; the script
only captures and OCRs the screen on demand.

Usage:
    python extract.py             # Run (calibrates on first launch)
    python extract.py --calibrate # Force re-calibration
    python extract.py --debug     # Save a capture image for inspection
"""

import sys
import json
import re
from pathlib import Path

# ── dependency check ─────────────────────────────────────────────────────────
_missing = []
for _pkg, _name in [("mss", "mss"), ("PIL", "Pillow"), ("pytesseract", "pytesseract"), ("pyautogui", "pyautogui"), ("keyboard", "keyboard")]:
    # pyautogui is only used to read mouse position during calibration
    try:
        __import__(_pkg)
    except ImportError:
        _missing.append(_name)

if _missing:
    print(f"[ERROR] Missing packages: {', '.join(_missing)}")
    print("Install with:  pip install -r requirements.txt")
    sys.exit(1)

import keyboard
import mss
from PIL import Image, ImageEnhance, ImageFilter, ImageOps
import pytesseract
import pyautogui

# ── paths ─────────────────────────────────────────────────────────────────────
_DIR          = Path(__file__).parent
CONFIG_FILE   = _DIR / "config.json"
PROGRESS_FILE = _DIR / "progress.json"
OUTPUT_FILE   = _DIR / "croupier_items.json"
DEBUG_IMAGE   = _DIR / "debug_capture.png"

# ── image preprocessing ───────────────────────────────────────────────────────

def preprocess(img: Image.Image) -> Image.Image:
    """Upscale + contrast-boost the capture for Tesseract."""
    w, h = img.size
    img = img.resize((w * 2, h * 2), Image.LANCZOS)
    img = img.convert("L")
    img = ImageEnhance.Contrast(img).enhance(3.0)
    img = img.filter(ImageFilter.SHARPEN)
    # Tesseract prefers dark text on light bg
    img = ImageOps.invert(img)
    return img

# ── OCR + parsing ─────────────────────────────────────────────────────────────

def extract_names(region: dict, tess_path: str | None, save_debug: bool = False) -> list[str]:
    """Capture *region*, OCR it, return item names found on this page."""
    if tess_path:
        pytesseract.pytesseract.tesseract_cmd = tess_path

    with mss.mss() as sct:
        shot = sct.grab(region)
        img = Image.frombytes("RGB", shot.size, shot.bgra, "raw", "BGRX")

    processed = preprocess(img)

    if save_debug:
        processed.save(DEBUG_IMAGE)
        print(f"  Debug image saved → {DEBUG_IMAGE}")

    # PSM 6 = uniform block of text, good for a list
    cfg = r"--oem 3 --psm 6 -l fra+eng"
    text = pytesseract.image_to_string(processed, config=cfg)

    names = []
    for line in text.splitlines():
        line = line.strip()
        # Each entry looks like:  "Nom de l'Item  Niv. 123  [Type]"
        m = re.match(r"^(.+?)\s{2,}Niv\.\s*\d+", line) or re.match(r"^(.+?)\s+Niv\.\s*\d+", line)
        if m:
            name = m.group(1).strip(" -–—|")
            if len(name) > 2:
                names.append(name)
    return names

# ── config / calibration ──────────────────────────────────────────────────────

def load_config() -> dict:
    if CONFIG_FILE.exists():
        with open(CONFIG_FILE, encoding="utf-8") as f:
            return json.load(f)
    return {}


def save_config(cfg: dict) -> None:
    with open(CONFIG_FILE, "w", encoding="utf-8") as f:
        json.dump(cfg, f, indent=2)
    print(f"Config saved → {CONFIG_FILE}")


def calibrate() -> dict:
    print()
    print("╔══════════════════════════════════════════════╗")
    print("║           CALIBRATION – étapes               ║")
    print("╚══════════════════════════════════════════════╝")
    print()
    print("Ouvre l'encyclopédie en jeu, filtre 'Croupier', page 1.")
    print()

    cfg: dict = {}

    # ── region: item list ─────────────────────────────────────────────────────
    print("── Étape 1 : zone de la liste d'items ──")
    print("Positionne la souris sur le coin HAUT-GAUCHE de la liste, appuie sur Entrée.")
    input("  > ")
    x1, y1 = pyautogui.position()
    print(f"    Haut-gauche : ({x1}, {y1})")

    print("Positionne la souris sur le coin BAS-DROIT de la liste, appuie sur Entrée.")
    input("  > ")
    x2, y2 = pyautogui.position()
    print(f"    Bas-droit   : ({x2}, {y2})")

    cfg["item_list_region"] = {"left": x1, "top": y1, "width": x2 - x1, "height": y2 - y1}

    # ── hotkey ─────────────────────────────────────────────────────────────────
    print()
    print("── Étape 2 : touche de déclenchement ──")
    print("Quelle touche veux-tu presser depuis le jeu pour capturer chaque page ?")
    print("Exemples : f9  f10  f12  (évite 'enter' si tu joues au clavier)")
    hotkey = input("  Touche (défaut : f9) > ").strip().lower() or "f9"
    cfg["hotkey"] = hotkey
    print(f"    Touche choisie : {hotkey.upper()}")

    # ── total pages ───────────────────────────────────────────────────────────
    print()
    pages = input("── Étape 3 : nombre de pages total ? (défaut : 162) > ").strip()
    cfg["total_pages"] = int(pages) if pages.isdigit() else 162

    # ── tesseract path (Windows) ──────────────────────────────────────────────
    if sys.platform == "win32":
        default_tess = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
        print()
        print(f"── Étape 4 : chemin de Tesseract (défaut : {default_tess})")
        tess = input("  > ").strip()
        cfg["tesseract_path"] = tess or default_tess
    else:
        cfg["tesseract_path"] = None

    save_config(cfg)
    return cfg

# ── progress helpers ──────────────────────────────────────────────────────────

def load_progress() -> dict:
    if PROGRESS_FILE.exists():
        with open(PROGRESS_FILE, encoding="utf-8") as f:
            return json.load(f)
    return {"current_page": 1, "items": []}


def save_progress(p: dict) -> None:
    with open(PROGRESS_FILE, "w", encoding="utf-8") as f:
        json.dump(p, f, ensure_ascii=False, indent=2)

# ── main extraction loop ──────────────────────────────────────────────────────

def wait_for_hotkey(hotkey: str) -> None:
    keyboard.wait(hotkey)


def run(cfg: dict, debug: bool = False) -> None:
    region  = cfg["item_list_region"]
    total   = cfg["total_pages"]
    tess    = cfg.get("tesseract_path")
    hotkey  = cfg.get("hotkey", "f9").lower()

    progress = load_progress()
    start    = progress["current_page"]
    items    = progress["items"]

    if start > 1:
        print(f"Reprise depuis la page {start} ({len(items)} items déjà collectés).")
        print(f"Place-toi sur la page {start} dans le jeu.")
    else:
        print(f"Démarrage — {total} pages à traiter.")
        print("Place-toi sur la page 1 dans le jeu.")

    print(f"Appuie sur {hotkey.upper()} (depuis n'importe quelle fenêtre) pour lancer la capture.")
    wait_for_hotkey(hotkey)

    for page in range(start, total + 1):
        print(f"  Page {page:>3}/{total} … ", end="", flush=True)

        found = extract_names(region, tess, save_debug=(debug and page == start))
        items.extend(found)
        print(f"{len(found):>2} items  (total : {len(items)})")

        progress["current_page"] = page + 1
        progress["items"] = items
        save_progress(progress)

        if page < total:
            print(f"  → Passe à la page {page + 1} dans le jeu, puis appuie sur {hotkey.upper()}…")
            wait_for_hotkey(hotkey)

    # ── final save ────────────────────────────────────────────────────────────
    unique = sorted(set(items))
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(unique, f, ensure_ascii=False, indent=2)

    PROGRESS_FILE.unlink(missing_ok=True)

    print()
    print(f"✓ Terminé — {len(unique)} items uniques sauvegardés dans :")
    print(f"  {OUTPUT_FILE}")


# ── entry point ───────────────────────────────────────────────────────────────

def main() -> None:
    print("Wakfu – Extracteur d'items Croupier")
    print("=" * 40)

    force_calibrate = "--calibrate" in sys.argv
    debug           = "--debug" in sys.argv

    cfg = load_config()

    if not cfg or force_calibrate:
        cfg = calibrate()

    if debug:
        print()
        print("Mode DEBUG : une capture sera sauvegardée avant l'extraction.")

    run(cfg, debug=debug)


if __name__ == "__main__":
    main()
