import os
from bs4 import BeautifulSoup

DATA_DIR = "data"
LANGS = ["fr", "en", "es", "pt"]


def load_file(path):
    with open(path, "rb") as f:
        return f.read()


def parse_spell(html):
    soup = BeautifulSoup(html, "html.parser")

    name = soup.select_one(".ak-spell-name")
    desc = soup.select_one(".ak-spell-description")

    return {
        "name": name.text.strip() if name else "",
        "description": desc.text.strip() if desc else ""
    }


def main():
    for lang in LANGS:
        print("\n===============================")
        print(f" SCRAPING LANGUE : {lang.upper()}")
        print("===============================\n")

        spells_dir = f"{DATA_DIR}/{lang}/spells"

        if not os.path.exists(spells_dir):
            continue

        for file in os.listdir(spells_dir):
            if not file.endswith(".html"):
                continue

            spell_id = file.replace(".html", "")
            path = f"{spells_dir}/{file}"

            html = load_file(path)
            data = parse_spell(html)

            print(f"--- Sort {spell_id} ---")
            print(f"Nom : {data['name']}")
            print(f"Description : {data['description'][:150]}...")
            print("-----------------------------\n")


if __name__ == "__main__":
    main()
