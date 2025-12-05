#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import re
from bs4 import BeautifulSoup
from html import unescape

# Lire le fichier HTML du tableau extrait
with open('sublimations_table.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

# Parser avec BeautifulSoup
soup = BeautifulSoup(html_content, 'html.parser')

# Trouver le tableau
table = soup.find('table')

if not table:
    print("Tableau non trouvé!")
else:
    print("Tableau trouvé!")
    
    # Extraire les données
    sublimations_data = {}
    
    # Trouver les en-têtes
    headers = []
    header_row = table.find('thead').find('tr') if table.find('thead') else None
    if header_row:
        headers = [th.get_text().strip() for th in header_row.find_all(['th', 'td'])]
        print(f"En-têtes: {headers}")
    
    # Parcourir les lignes du tableau
    tbody = table.find('tbody') if table.find('tbody') else table
    rows = tbody.find_all('tr')
    
    print(f"\nNombre de lignes: {len(rows)}")
    
    for i, row in enumerate(rows, 1):
        cells = row.find_all(['td', 'th'])
        if len(cells) >= 3:
            # Colonne 2 = NOM (index 1), Colonne 3 = EFFETS (index 2)
            nom_cell = cells[1] if len(cells) > 1 else cells[0]
            effet_cell = cells[2] if len(cells) > 2 else None
            
            nom = nom_cell.get_text().strip()
            # Nettoyer les entités HTML
            nom = unescape(nom)
            
            if effet_cell:
                description = effet_cell.get_text().strip()
                description = unescape(description)
                # Nettoyer les espaces multiples et les retours à la ligne
                description = re.sub(r'\s+', ' ', description).strip()
            else:
                description = ""
            
            if nom and nom not in ['NOM', 'Nom', 'COMBINAISON DE CHÂSSES']:
                sublimations_data[nom] = description
                print(f"{i}. {nom}: {description[:100]}...")
    
    # Sauvegarder les données extraites
    with open('sublimations_extracted.json', 'w', encoding='utf-8') as f:
        json.dump(sublimations_data, f, ensure_ascii=False, indent=2)
    
    print(f"\n{len(sublimations_data)} sublimations extraites et sauvegardées dans sublimations_extracted.json")
