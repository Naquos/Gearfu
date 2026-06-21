#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os
import json
import re
from bs4 import BeautifulSoup

DATA_DIR = "data"
LANGS = ["fr", "en", "es", "pt"]
CLASS_IDS = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19]

ELEMENTS = {
    "ak-elementary-spell-water": "eau",
    "ak-elementary-spell-fire": "feu",
    "ak-elementary-spell-earth": "terre",
    "ak-elementary-spell-wind": "air"
}

# Dictionnaire global des images pour réduire la taille
IMAGE_DICT = {
    "caster": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/caster.png'/>",
    "paw": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/paw.png'/>",
    "gobgob": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/gobgob.png'/>",
    "ally": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/ally.png'/>",
    "enemy": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/enemy.png'/>",
    "fighter": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/fighter.png'/>",
    "puppet": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/puppet.png'/>",
    "LIGHT": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/LIGHT.png'/>",
    "AIR": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/AIR.png'/>",
    "EARTH": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/EARTH.png'/>",
    "FIRE": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/FIRE.png'/>",
    "WATER": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/WATER.png'/>",
    "smallAIR": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/smallAIR.png'/>",
    "smallEARTH": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/smallEARTH.png'/>",
    "smallFIRE": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/smallFIRE.png'/>",
    "smallWATER": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/smallWATER.png'/>",
    "backstab": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/backstab.png'/>",
    "barrel": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/barrel.png'/>",
    "bomb": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/bomb.png'/>",
    "chromatic": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/chromatic.png'/>",
    "deposit": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/deposit.png'/>",
    "drake": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/drake.png'/>",
    "exalte": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/exalte.png'/>",
    "glyph": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/glyph.png'/>",
    "invisible": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/invisible.png'/>",
    "lucky": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/lucky.png'/>",
    "portal": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/portal.png'/>",
    "prey": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/prey.png'/>",
    "rune1": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/rune1.png'/>",
    "rune2": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/rune2.png'/>",
    "rune3": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/rune3.png'/>",
    "rune4": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/rune4.png'/>",
    "seed": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/seed.png'/>",
    "serein": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/serein.png'/>",
    "shield": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/shield.png'/>",
    "smallLIGHT": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/smallLIGHT.png'/>",
    "smallSTASIS": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/smallSTASIS.png'/>",
    "smallPHYSICAL": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/smallPHYSICAL.png'/>",
    "STASIS": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/STASIS.png'/>",
    "SUPPORT": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/SUPPORT.png'/>",
    "taque": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/taque.png'/>",
    "tique": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/tique.png'/>",
    "totem": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/totem.png'/>",
    "undrake": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/undrake.png'/>",
    "unnatural": "<img style='margin: 0 5px' src='https://vertylo.github.io/wakassets/elements/unnatural.png'/>"
}

IMG_TO_TEXT = {
    "http://staticns.ankama.com/wakfu/portal/game/element/caster.png": "{caster}",
    "http://staticns.ankama.com/wakfu/portal/game/element/paw.png": "{paw}",
    "http://staticns.ankama.com/wakfu/portal/game/element/gobgob.png": "{gobgob}",
    "http://staticns.ankama.com/wakfu/portal/game/element/ally.png": "{ally}",
    "http://staticns.ankama.com/wakfu/portal/game/element/enemy.png": "{enemy}",
    "http://staticns.ankama.com/wakfu/portal/game/element/fighter.png": "{fighter}",
    "http://staticns.ankama.com/wakfu/portal/game/element/puppet.png": "{puppet}",
    "http://staticns.ankama.com/wakfu/portal/game/element/LIGHT.png": "{LIGHT}",
    "http://staticns.ankama.com/wakfu/portal/game/element/AIR.png": "{AIR}",
    "http://staticns.ankama.com/wakfu/portal/game/element/EARTH.png": "{EARTH}",
    "http://staticns.ankama.com/wakfu/portal/game/element/FIRE.png": "{FIRE}",
    "http://staticns.ankama.com/wakfu/portal/game/element/WATER.png": "{WATER}",
    "http://staticns.ankama.com/wakfu/portal/game/element/smallAIR.png": "{smallAIR}",
    "http://staticns.ankama.com/wakfu/portal/game/element/smallEARTH.png": "{smallEARTH}",
    "http://staticns.ankama.com/wakfu/portal/game/element/smallFIRE.png": "{smallFIRE}",
    "http://staticns.ankama.com/wakfu/portal/game/element/smallWATER.png": "{smallWATER}",
    "http://staticns.ankama.com/wakfu/portal/game/element/backstab.png": "{backstab}",
    "http://staticns.ankama.com/wakfu/portal/game/element/barrel.png": "{barrel}",
    "http://staticns.ankama.com/wakfu/portal/game/element/bomb.png": "{bomb}",
    "http://staticns.ankama.com/wakfu/portal/game/element/chromatic.png": "{chromatic}",
    "http://staticns.ankama.com/wakfu/portal/game/element/deposit.png": "{deposit}",
    "http://staticns.ankama.com/wakfu/portal/game/element/drake.png": "{drake}",
    "http://staticns.ankama.com/wakfu/portal/game/element/exalte.png": "{exalte}",
    "http://staticns.ankama.com/wakfu/portal/game/element/glyph.png": "{glyph}",
    "http://staticns.ankama.com/wakfu/portal/game/element/invisible.png": "{invisible}",
    "http://staticns.ankama.com/wakfu/portal/game/element/lucky.png": "{lucky}",
    "http://staticns.ankama.com/wakfu/portal/game/element/portal.png": "{portal}",
    "http://staticns.ankama.com/wakfu/portal/game/element/prey.png": "{prey}",
    "http://staticns.ankama.com/wakfu/portal/game/element/rune1.png": "{rune1}",
    "http://staticns.ankama.com/wakfu/portal/game/element/rune2.png": "{rune2}",
    "http://staticns.ankama.com/wakfu/portal/game/element/rune3.png": "{rune3}",
    "http://staticns.ankama.com/wakfu/portal/game/element/rune4.png": "{rune4}",
    "http://staticns.ankama.com/wakfu/portal/game/element/seed.png": "{seed}",
    "http://staticns.ankama.com/wakfu/portal/game/element/serein.png": "{serein}",
    "http://staticns.ankama.com/wakfu/portal/game/element/shield.png": "{shield}",
    "http://staticns.ankama.com/wakfu/portal/game/element/smallLIGHT.png": "{smallLIGHT}",
    "http://staticns.ankama.com/wakfu/portal/game/element/smallSTASIS.png": "{smallSTASIS}",
    "http://staticns.ankama.com/wakfu/portal/game/element/smallPHYSICAL.png": "{smallPHYSICAL}",
    "http://staticns.ankama.com/wakfu/portal/game/element/STASIS.png": "{STASIS}",
    "http://staticns.ankama.com/wakfu/portal/game/element/SUPPORT.png": "{SUPPORT}",
    "http://staticns.ankama.com/wakfu/portal/game/element/taque.png": "{taque}",
    "http://staticns.ankama.com/wakfu/portal/game/element/tique.png": "{tique}",
    "http://staticns.ankama.com/wakfu/portal/game/element/totem.png": "{totem}",
    "http://staticns.ankama.com/wakfu/portal/game/element/undrake.png": "{undrake}",
    "http://staticns.ankama.com/wakfu/portal/game/element/unnatural.png": "{unnatural}"
}

def compress_rle(data_list):
    """
    Compresse une liste de listes avec RLE (Run-Length Encoding)
    Retourne [[valeurs, start, end], ...]
    """
    if not data_list:
        return []
    
    compressed = []
    current_value = data_list[0]
    start = 0
    
    for i in range(1, len(data_list)):
        if data_list[i] != current_value:
            compressed.append([current_value, start, i - 1])
            current_value = data_list[i]
            start = i
    
    # Ajouter le dernier segment
    compressed.append([current_value, start, len(data_list) - 1])
    
    return compressed

def extract_numbers_and_template(html_text):
    """
    Extrait les nombres d'un texte HTML et crée un template avec ${0}, ${1}, etc.
    Retourne (template, [liste des nombres])
    """
    numbers = []
    counter = 0
    
    def replace_number(match):
        nonlocal counter
        num_str = match.group(0)
        
        # Garder comme string en nettoyant les espaces et caractères spéciaux
        # Les zéros initiaux (ex: "038") sont préservés
        cleaned_num = num_str.replace(' ', '').replace('\u202f', '').replace(',', '.')
        numbers.append(cleaned_num)
        placeholder = "${" + str(counter) + "}"
        counter += 1
        return placeholder
    
    # Pattern amélioré pour éviter de capturer les nombres dans les CSS (margin, padding, etc.)
    # On exclut les nombres qui sont précédés de "margin:", "padding:", "width:", etc.
    # et les nombres dans les URLs ou attributs HTML
    
    # Créer une copie pour travailler
    template = html_text
    
    # Patterns à exclure (CSS properties, URLs, etc.)
    # On va chercher les nombres qui sont entourés de contexte typique de valeurs de jeu
    # comme "Dommage : 5", "PV : 100", "+ 10", "- 5", etc.
    
    # Pattern pour trouver les nombres dans le contenu, pas dans les styles ou URLs
    # On cherche: nombre seul, ou nombre avec %, ou dans des expressions comme ": 5" ou "+ 5"
    pattern = r'(?<![:=/"\'])(?<!margin: )(?<!margin:\s)(?<!padding: )(?<!padding:\s)(?<!width: )(?<!height: )(?<!\d\s)\b(\d+(?:[., ]?\d+)*(?:[.,]\d+)?)\s*(?=%|(?=\s*(?:[^\d]|$)))'
    
    # Approche plus simple: remplacer uniquement les nombres isolés ou suivis de certains contextes
    # En excluant les propriétés CSS connues
    import re
    
    # Supprimer temporairement les balises style et leurs contenus
    style_pattern = r'style=["\'][^"\']*["\']'
    styles = re.findall(style_pattern, template)
    style_placeholders = []
    for i, style in enumerate(styles):
        placeholder = f"___STYLE_{i}___"
        style_placeholders.append((placeholder, style))
        template = template.replace(style, placeholder, 1)
    
    # Maintenant extraire les nombres du texte restant
    template = re.sub(r'\b(\d+(?:[., ]?\d+)*(?:[.,]\d+)?)\b', replace_number, template)
    
    # Restaurer les styles
    for placeholder, style in style_placeholders:
        template = template.replace(placeholder, style)
    
    return template, numbers

def parse_spell_file(spell_id):
    spell_data = {
        "gfxId": 0,
        "id": int(spell_id),
        "name": {lang: "" for lang in LANGS},
        "description": {lang: "" for lang in LANGS},
        "PA": 0,
        "PW": 0,
        "PM": 0,
        "NotLDV": False,
        "POModifiable": False,
        "Ligne": False,
        "PorteeMin": 0,
        "PorteeMax": 0,
        "effect_normal": {lang: "" for lang in LANGS},
        "effect_critical": {lang: "" for lang in LANGS},
        "normalEffect": {lang: [] for lang in LANGS},  # Liste de listes de nombres
        "criticalEffect": {lang: [] for lang in LANGS}  # Liste de listes de nombres
    }

    for lang in LANGS:
        spell_file = os.path.join(DATA_DIR, lang, "spells", f"{spell_id}.html")
        if not os.path.exists(spell_file):
            continue
        with open(spell_file, "r", encoding="utf-8") as f:
            soup = BeautifulSoup(f, "html.parser")

            # Name
            h2 = soup.find("h2", class_="ak-spell-name")
            if h2:
                spell_data["name"][lang] = "".join(h2.find_all(text=True, recursive=False)).strip()

            # Description
            desc = soup.find("span", class_="ak-spell-description")
            if desc:
                spell_data["description"][lang] = desc.get_text(" ", strip=True)

            # PA, PW, PM
            pa = soup.find(class_="pa_value")
            pw = soup.find(class_="w_value")
            pm = soup.find(class_="pm_value")
            spell_data["PA"] = int(pa.get_text(strip=True)) if pa else 0
            spell_data["PW"] = int(pw.get_text(strip=True)) if pw else 0
            spell_data["PM"] = int(pm.get_text(strip=True)) if pm else 0

            # Booleans
            imgs = {img["src"] for img in soup.find_all("img") if img.has_attr("src")}
            spell_data["NotLDV"] = "https://static.ankama.com/wakfu/ng/img/encyclo/ligne_not_vu.png" in imgs
            spell_data["POModifiable"] = "https://static.ankama.com/wakfu/ng/img/encyclo/picto_portee_modif.png" in imgs
            spell_data["Ligne"] = "https://static.ankama.com/wakfu/ng/img/encyclo/picto_spell_line.png" in imgs

            # Portée
            range_span = soup.find("span", class_="costs_range")
            if range_span and "-" in range_span.text:
                min_r, max_r = map(int, range_span.text.strip().split("-"))
                spell_data["PorteeMin"] = min_r
                spell_data["PorteeMax"] = max_r

            # Effets normaux et critiques (texte HTML avec template)
            for effect_class, key in [("spell-normal-effect","effect_normal"),("spell-critical-effect","effect_critical")]:
                div = soup.find("div", class_=effect_class)
                if div:
                    for img in div.find_all("img"):
                        src = img.get("src")
                        if src in IMG_TO_TEXT:
                            img.replace_with(IMG_TO_TEXT[src])
                    # ne prendre que les textes des div.ak-content et ajouter un retour à la ligne
                    lines = []
                    for content in div.find_all("div", class_="ak-content"):
                        text = content.get_text(" ", strip=True)
                        if text:
                            lines.append(text)
                    full_text = "\n".join(lines)
                    # Créer le template en remplaçant les nombres
                    template, _ = extract_numbers_and_template(full_text)
                    spell_data[key][lang] = template

            # Extraction des normalEffect et criticalEffect depuis le JSON
            scripts = soup.find_all("script", type="application/json")
            for script in scripts:
                if script.string and "normalEffect" in script.string:
                    try:
                        json_data = json.loads(script.string)
                        
                        # normalEffect - extraire TOUS les niveaux et les nombres
                        if "normalEffect" in json_data and isinstance(json_data["normalEffect"], dict):
                            sorted_levels = sorted(json_data["normalEffect"].keys(), key=lambda x: int(x))
                            
                            for level_key in sorted_levels:
                                normal_effect_html = json_data["normalEffect"][level_key]
                                
                                # Parser le HTML pour retirer les balises script internes
                                effect_soup = BeautifulSoup(normal_effect_html, "html.parser")
                                # Supprimer les balises script
                                for s in effect_soup.find_all("script"):
                                    s.decompose()
                                # Remplacer les images par nos versions
                                for img in effect_soup.find_all("img"):
                                    src = img.get("src")
                                    if src in IMG_TO_TEXT:
                                        img.replace_with(BeautifulSoup(IMG_TO_TEXT[src], "html.parser"))
                                
                                # Extraire les nombres
                                _, numbers = extract_numbers_and_template(str(effect_soup))
                                spell_data["normalEffect"][lang].append(numbers)
                        
                        # criticalEffect - extraire TOUS les niveaux et les nombres
                        if "criticalEffect" in json_data and isinstance(json_data["criticalEffect"], dict):
                            sorted_levels = sorted(json_data["criticalEffect"].keys(), key=lambda x: int(x))
                            
                            for level_key in sorted_levels:
                                critical_effect_html = json_data["criticalEffect"][level_key]
                                
                                # Parser le HTML pour retirer les balises script internes
                                effect_soup = BeautifulSoup(critical_effect_html, "html.parser")
                                # Supprimer les balises script
                                for s in effect_soup.find_all("script"):
                                    s.decompose()
                                # Remplacer les images par nos versions
                                for img in effect_soup.find_all("img"):
                                    src = img.get("src")
                                    if src in IMG_TO_TEXT:
                                        img.replace_with(BeautifulSoup(IMG_TO_TEXT[src], "html.parser"))
                                
                                # Extraire les nombres
                                _, numbers = extract_numbers_and_template(str(effect_soup))
                                spell_data["criticalEffect"][lang].append(numbers)
                    except json.JSONDecodeError:
                        pass

            # gfxId depuis img principale
            img_main = soup.find("img", src=lambda x: x and "/spell/" in x)
            if img_main:
                spell_data["gfxId"] = int(img_main["src"].split("/")[-1].split(".")[0])

    return spell_data

def main():
    classes_data = []

    for class_id in CLASS_IDS:
        class_file_fr = os.path.join(DATA_DIR, "fr", "classes", f"{class_id}.html")
        if not os.path.exists(class_file_fr):
            print(f"[WARN] Classe {class_id} introuvable")
            continue

        with open(class_file_fr, "r", encoding="utf-8") as f:
            soup = BeautifulSoup(f, "html.parser")

            sortElementaires = { "feu": [], "eau": [], "terre": [], "air": [] }
            sortActifs = []
            sortPassifs = []

            # ---------------- Sorts élémentaires ----------------
            for div_class, elem_name in ELEMENTS.items():
                divs = soup.find_all("div", class_=div_class)
                for div in divs:
                    for a in div.find_all("a", href=True):
                        href = a["href"]
                        try:
                            spell_id = int(href.rstrip("/").split("/")[-1].split("-")[0])
                        except:
                            continue
                        img = a.find("img")
                        gfxId = int(img["src"].split("/")[-1].split(".")[0]) if img else 0
                        spell_data = parse_spell_file(spell_id)
                        spell_data["gfxId"] = gfxId
                        sortElementaires[elem_name].append(spell_data)

            # ---------------- Sorts actifs/passifs ----------------
            support_div = soup.find("div", class_="ak-spells-support")
            if support_div:
                rows = support_div.find_all("div", class_="ak-spell-list-row")
                if len(rows) >= 1:
                    for a in rows[0].find_all("a", href=True):
                        try:
                            spell_id = int(a["href"].rstrip("/").split("/")[-1].split("-")[0])
                        except:
                            continue
                        img = a.find("img")
                        gfxId = int(img["src"].split("/")[-1].split(".")[0]) if img else 0
                        spell_data = parse_spell_file(spell_id)
                        spell_data["gfxId"] = gfxId
                        sortActifs.append(spell_data)
                if len(rows) >= 2:
                    for a in rows[1].find_all("a", href=True):
                        try:
                            spell_id = int(a["href"].rstrip("/").split("/")[-1].split("-")[0])
                        except:
                            continue
                        img = a.find("img")
                        gfxId = int(img["src"].split("/")[-1].split(".")[0]) if img else 0
                        spell_data = parse_spell_file(spell_id)
                        spell_data["gfxId"] = gfxId
                        sortPassifs.append(spell_data)

            class_obj = {
                "idClasse": class_id,
                "sortElementaires": sortElementaires,
                "sortActifs": sortActifs,
                "sortPassifs": sortPassifs
            }

            classes_data.append(class_obj)
            total_elem = sum(len(v) for v in sortElementaires.values())
            print(f"[INFO] Classe {class_id} traitée : {total_elem} élémentaires, "
                  f"{len(sortActifs)} actifs, {len(sortPassifs)} passifs")

    # Appliquer la compression RLE sur normalEffect et criticalEffect
    for class_obj in classes_data:
        for sort_list in [class_obj["sortElementaires"]["feu"], 
                         class_obj["sortElementaires"]["eau"],
                         class_obj["sortElementaires"]["terre"],
                         class_obj["sortElementaires"]["air"],
                         class_obj["sortActifs"],
                         class_obj["sortPassifs"]]:
            for sort in sort_list:
                for lang in LANGS:
                    if sort["normalEffect"][lang]:
                        sort["normalEffect"][lang] = compress_rle(sort["normalEffect"][lang])
                    if sort["criticalEffect"][lang]:
                        sort["criticalEffect"][lang] = compress_rle(sort["criticalEffect"][lang])
    
    # Créer la structure finale avec le dictionnaire d'images
    output = {
        "imageDict": IMAGE_DICT,
        "classes": classes_data
    }

    # Sauvegarder le fichier avec indentation pour la lisibilité
    with open("wakfu_classes.json", "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)
    
    # Créer aussi une version minifiée
    with open("wakfu_classes.min.json", "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, separators=(',', ':'))
    
    # Calculer et afficher les tailles
    normal_size = os.path.getsize("wakfu_classes.json")
    min_size = os.path.getsize("wakfu_classes.min.json")
    
    print(f"[DONE] JSON généré : wakfu_classes.json ({normal_size:,} octets, {normal_size/1024/1024:.2f} MB)")
    print(f"[DONE] JSON minifié : wakfu_classes.min.json ({min_size:,} octets, {min_size/1024/1024:.2f} MB)")
    print(f"[INFO] Réduction : {(1 - min_size/normal_size)*100:.1f}%")

if __name__ == "__main__":
    main()
