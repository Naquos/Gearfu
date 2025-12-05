#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import re
from bs4 import BeautifulSoup
from html import unescape
from deep_translator import GoogleTranslator
import time

def traduire(texte, lang_cible):
    if not texte:
        return ""
    try:
        translator = GoogleTranslator(source='fr', target=lang_cible)
        # Limiter à 5000 caractères par appel
        if len(texte) > 5000:
            texte = texte[:5000]
        result = translator.translate(texte)
        time.sleep(0.5)  # Pause pour éviter les limites de taux
        return result
    except Exception as e:
        print(f"Erreur de traduction vers {lang_cible}: {e}")
        return ""

# Charger le fichier sublimations.json
with open('public/sublimations.json', 'r', encoding='utf-8') as f:
    sublimations = json.load(f)

# Créer un index pour accès rapide
sublimations_index = {sub['title']['fr']: sub for sub in sublimations}

# Parser les tableaux épiques et reliques
for table_idx in [0, 1]:
    table_type = "épiques" if table_idx == 0 else "reliques"
    print(f"\n{'='*80}")
    print(f"Traitement du tableau des sublimations {table_type}")
    print(f"{'='*80}\n")
    
    # Lire le fichier HTML du tableau
    with open(f'sublimations_epic_relic_table_{table_idx}.html', 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    # Parser avec BeautifulSoup
    soup = BeautifulSoup(html_content, 'html.parser')
    table = soup.find('table')
    
    if not table:
        print(f"Tableau {table_idx} non trouvé!")
        continue
    
    # Trouver les en-têtes
    headers = []
    header_row = table.find('thead').find('tr') if table.find('thead') else None
    if header_row:
        headers = [th.get_text().strip() for th in header_row.find_all(['th', 'td'])]
        print(f"En-têtes: {headers}")
    
    # Parcourir les lignes du tableau
    tbody = table.find('tbody') if table.find('tbody') else table
    rows = tbody.find_all('tr')
    
    print(f"Nombre de lignes: {len(rows)}\n")
    
    updated_count = 0
    
    for i, row in enumerate(rows, 1):
        cells = row.find_all(['td', 'th'])
        if len(cells) >= 3:
            # Colonne 2 = Rune/Nom (index 1), Colonne 3 = Effet (index 2)
            nom_cell = cells[1] if len(cells) > 1 else cells[0]
            effet_cell = cells[2] if len(cells) > 2 else None
            
            # Extraire le nom du lien <a> si présent
            link = nom_cell.find('a')
            if link:
                nom = link.get_text().strip()
            else:
                nom = nom_cell.get_text().strip()
            
            nom = unescape(nom)
            
            if effet_cell:
                description = effet_cell.get_text().strip()
                description = unescape(description)
                # Nettoyer les espaces multiples et les retours à la ligne
                description = re.sub(r'\s+', ' ', description).strip()
            else:
                description = ""
            
            if nom and description and nom in sublimations_index:
                sublimation = sublimations_index[nom]
                
                # Vérifier si c'est bien une sublimation épique/relique
                is_epic_or_relic = sublimation.get('isEpic', False) or sublimation.get('isRelic', False)
                
                if is_epic_or_relic:
                    try:
                        print(f"{i}. {nom}")
                        print(f"   Type: {'Epique' if sublimation.get('isEpic') else 'Relique'}")
                        
                        # Mettre à jour la description française
                        sublimation['description']['fr'] = description
                        
                        # Traduire en anglais
                        if not sublimation['description']['en']:
                            description_en = traduire(description, 'en')
                            sublimation['description']['en'] = description_en
                        
                        # Traduire en espagnol
                        if not sublimation['description']['es']:
                            description_es = traduire(description, 'es')
                            sublimation['description']['es'] = description_es
                        
                        # Traduire en portugais
                        if not sublimation['description']['pt']:
                            description_pt = traduire(description, 'pt')
                            sublimation['description']['pt'] = description_pt
                        
                        print(f"   OK")
                        updated_count += 1
                    except Exception as e:
                        print(f"   Erreur de traitement: {type(e).__name__}")
                        continue
                else:
                    print(f"   [WARN] {nom} trouve mais n'est pas marque comme epique/relique")
            elif nom and description:
                print(f"   [WARN] {nom} non trouve dans le JSON")

    print(f"\n{updated_count} sublimations {table_type} mises à jour\n")

# Sauvegarder le fichier mis à jour
with open('public/sublimations.json', 'w', encoding='utf-8') as f:
    json.dump(sublimations, f, ensure_ascii=False, indent=2)

print(f"\n{'='*80}")
print("Fichier sublimations.json mis à jour avec les sublimations épiques et reliques!")
print(f"{'='*80}")

# Statistiques finales
total = len(sublimations)
avec_desc_fr = len([s for s in sublimations if s['description']['fr']])
avec_desc_en = len([s for s in sublimations if s['description']['en']])
avec_desc_es = len([s for s in sublimations if s['description']['es']])
avec_desc_pt = len([s for s in sublimations if s['description']['pt']])
epiques = len([s for s in sublimations if s.get('isEpic', False) and s['description']['fr']])
reliques = len([s for s in sublimations if s.get('isRelic', False) and s['description']['fr']])

print(f"\n=== STATISTIQUES FINALES ===")
print(f"Total de sublimations: {total}")
print(f"Avec description FR: {avec_desc_fr} ({epiques} épiques, {reliques} reliques)")
print(f"Avec description EN: {avec_desc_en}")
print(f"Avec description ES: {avec_desc_es}")
print(f"Avec description PT: {avec_desc_pt}")
