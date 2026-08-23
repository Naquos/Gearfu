#!/usr/bin/env python3
"""
Generates src/app/models/enum/ItemCroupierEnum.ts

Matches OCR-extracted croupier names (progress.json) against the full
items database (items.json) to retrieve IDs and rarities.

Usage:
    python generate_enum.py
    python generate_enum.py --items "D:/path/to/items.json"
"""

import argparse
import json
import re
import unicodedata
from difflib import get_close_matches
from pathlib import Path

# Must match RarityItemEnum in rarityItemEnum.ts
RARITY_LABELS = {
    1: "NORMAL",
    2: "RARE",
    3: "MYTHIQUE",
    4: "LEGENDAIRE",
    5: "RELIQUE",
    6: "SOUVENIR",
    7: "EPIQUE",
}

SCRIPT_DIR    = Path(__file__).parent
REPO_ROOT     = SCRIPT_DIR.parent.parent
PROGRESS_FILE = SCRIPT_DIR / "progress.json"
OUTPUT_FILE   = REPO_ROOT / "src" / "app" / "models" / "enum" / "ItemCroupierEnum.ts"
DEFAULT_ITEMS = SCRIPT_DIR / "items.json"

# Minimum similarity ratio for fuzzy matching (0–1)
FUZZY_CUTOFF = 0.82


def normalize(name: str) -> str:
    """Lowercase + strip accents for comparison."""
    nfkd = unicodedata.normalize("NFKD", name)
    stripped = "".join(c for c in nfkd if not unicodedata.combining(c))
    return re.sub(r"\s+", " ", re.sub(r"[^a-z0-9 ]", " ", stripped.lower())).strip()


def to_enum_key(name: str) -> str:
    """Convert item name to SCREAMING_SNAKE_CASE."""
    nfkd = unicodedata.normalize("NFKD", name)
    ascii_name = "".join(c for c in nfkd if not unicodedata.combining(c))
    key = re.sub(r"[^a-zA-Z0-9]", "_", ascii_name)
    key = re.sub(r"_+", "_", key).strip("_")
    return key.upper()


def load_db(items_path: Path) -> dict[str, dict]:
    """Build a normalized-name → item dict from items.json."""
    print(f"Loading {items_path}…")
    with open(items_path, encoding="utf-8") as f:
        raw = json.load(f)

    db: dict[str, dict] = {}
    for entry in raw:
        item_def  = entry["definition"]["item"]
        title_fr  = entry.get("title", {}).get("fr", "")
        if not title_fr:
            continue
        key = normalize(title_fr)
        if key not in db:          # first occurrence wins on duplicate fr names
            db[key] = {
                "id":      item_def["id"],
                "rarity":  item_def["baseParameters"]["rarity"],
                "fr_name": title_fr,
            }

    print(f"  → {len(db)} unique French names indexed")
    return db


def match_items(names: list[str], db: dict[str, dict]) -> list[tuple[str, dict]]:
    all_keys = list(db.keys())
    results  = []
    fuzzy_log: list[str] = []
    not_found: list[str] = []

    for name in names:
        norm = normalize(name)
        if norm in db:
            results.append((name, db[norm]))
            continue

        close = get_close_matches(norm, all_keys, n=1, cutoff=FUZZY_CUTOFF)
        if close:
            hit = db[close[0]]
            fuzzy_log.append(f"  ~  '{name}'  →  '{hit['fr_name']}'  (id {hit['id']})")
            results.append((name, hit))
        else:
            not_found.append(name)
            results.append((name, {"id": -1, "rarity": None, "fr_name": name}))

    if fuzzy_log:
        print(f"\nFuzzy matches ({len(fuzzy_log)}) — vérifie si les correspondances sont correctes :")
        print("\n".join(fuzzy_log))

    if not_found:
        print(f"\n⚠  {len(not_found)} items non trouvés (id = -1) :")
        for n in not_found:
            print(f"   - {n}")

    return results


def build_enum(results: list[tuple[str, dict]]) -> str:
    lines = ["export enum ItemCroupierEnum {"]
    seen: dict[str, int] = {}

    for ocr_name, info in results:
        rarity_num = info["rarity"]
        if rarity_num is not None and rarity_num in RARITY_LABELS:
            suffix = RARITY_LABELS[rarity_num]
        elif rarity_num is not None:
            suffix = f"RARETE_{rarity_num}"
        else:
            suffix = "INCONNU"

        base_key = f"{to_enum_key(ocr_name)}_{suffix}"

        if base_key in seen:
            seen[base_key] += 1
            key = f"{base_key}_{seen[base_key]}"
        else:
            seen[base_key] = 1
            key = base_key

        lines.append(f"    {key} = {info['id']},")

    lines.append("}")
    return "\n".join(lines) + "\n"


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--items",
        default=str(DEFAULT_ITEMS),
        help=f"Chemin vers items.json (défaut : {DEFAULT_ITEMS})",
    )
    args = parser.parse_args()

    items_path = Path(args.items)
    if not items_path.exists():
        print(f"[ERROR] items.json introuvable : {items_path}")
        print("Copie items.json dans ce dossier ou utilise --items CHEMIN")
        return

    db = load_db(items_path)

    with open(PROGRESS_FILE, encoding="utf-8") as f:
        progress = json.load(f)
    names = sorted(set(progress.get("items", [])))
    print(f"Matching {len(names)} items croupier…")

    results  = match_items(names, db)
    enum_src = build_enum(results)

    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(enum_src)

    found = sum(1 for _, info in results if info["id"] != -1)
    print(f"\n✓ {found}/{len(results)} items trouvés → {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
