#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Script complet pour extraire toutes les descriptions de sublimations depuis page.html
et les ajouter au fichier sublimations.json avec traductions.
"""

import json
import re
import time
from bs4 import BeautifulSoup
from deep_translator import GoogleTranslator
from difflib import SequenceMatcher

def normalize_name(name):
    """Normalise un nom pour la comparaison."""
    # Convertir en minuscules
    name = name.lower().strip()
    # Supprimer les accents et caractères spéciaux communs
    replacements = {
        'é': 'e', 'è': 'e', 'ê': 'e', 'ë': 'e',
        'à': 'a', 'â': 'a', 'ä': 'a',
        'ô': 'o', 'ö': 'o', 'ò': 'o',
        'û': 'u', 'ü': 'u', 'ù': 'u',
        'ï': 'i', 'î': 'i', 'ì': 'i',
        'ç': 'c',
        ''': "'", ''': "'",
        ' ': '', '-': '', ':': '', "'": ''
    }
    for old, new in replacements.items():
        name = name.replace(old, new)
    return name

def similarity(a, b):
    """Calcule la similarité entre deux chaînes."""
    return SequenceMatcher(None, normalize_name(a), normalize_name(b)).ratio()

def clean_description(text):
    """Nettoie le texte d'une description."""
    if not text:
        return ""
    # Supprimer les balises HTML
    text = re.sub(r'<[^>]+>', '', text)
    # Supprimer les espaces multiples
    text = re.sub(r'\s+', ' ', text)
    # Nettoyer les caractères spéciaux
    text = text.replace('\n', ' ').replace('\r', '').strip()
    return text

def clean_name(name):
    """Nettoie un nom en supprimant les suffixes comme (NEW), (Beta), etc."""
    if not name:
        return ""
    # Supprimer les suffixes entre parenthèses
    name = re.sub(r'\s*\([^)]*\)\s*$', '', name)
    return name.strip()

def traduire(texte, langue_cible):
    """Traduit un texte vers la langue cible avec gestion d'erreur."""
    try:
        translator = GoogleTranslator(source='fr', target=langue_cible)
        traduction = translator.translate(texte)
        time.sleep(0.5)  # Délai pour éviter le rate limiting
        return traduction
    except Exception as e:
        print(f"   Erreur traduction {langue_cible}: {type(e).__name__}")
        return ""

def extraire_tableau_standard(html_content):
    """Extrait les sublimations standard de la section 3.2."""
    print("\n" + "="*80)
    print("Extraction du tableau des sublimations standard (section 3.2)")
    print("="*80)
    
    # Rechercher le tableau tablepress-Enchantement_sublimations_1_84
    pattern = r'<table[^>]*id="tablepress-Enchantement_sublimations_1_84"[^>]*>.*?</table>'
    match = re.search(pattern, html_content, re.DOTALL)
    
    if not match:
        print("Tableau standard non trouve!")
        return []
    
    table_html = match.group(0)
    soup = BeautifulSoup(table_html, 'html.parser')
    
    sublimations = []
    rows = soup.find_all('tr')[1:]  # Ignorer l'en-tête
    
    print(f"Nombre de lignes trouvees: {len(rows)}")
    
    for row in rows:
        cells = row.find_all('td')
        if len(cells) >= 3:
            # Colonne 2 = Nom, Colonne 3 = Description
            nom = clean_name(clean_description(cells[1].get_text()))
            description = clean_description(cells[2].get_text())
            
            if nom and description:
                sublimations.append({
                    'nom': nom,
                    'description': description,
                    'type': 'standard'
                })
    
    print(f"Sublimations standard extraites: {len(sublimations)}")
    return sublimations

def extraire_tableau_epique(html_content):
    """Extrait les sublimations épiques de la section 4.2."""
    print("\n" + "="*80)
    print("Extraction du tableau des sublimations epiques (section 4.2)")
    print("="*80)
    
    # Rechercher le tableau tablepress-273
    pattern = r'<table[^>]*id="tablepress-273"[^>]*>.*?</table>'
    match = re.search(pattern, html_content, re.DOTALL)
    
    if not match:
        print("Tableau epique non trouve!")
        return []
    
    table_html = match.group(0)
    soup = BeautifulSoup(table_html, 'html.parser')
    
    sublimations = []
    rows = soup.find_all('tr')[1:]  # Ignorer l'en-tête
    
    print(f"Nombre de lignes trouvees: {len(rows)}")
    
    for row in rows:
        cells = row.find_all('td')
        if len(cells) >= 3:
            # Colonne 2 = Nom, Colonne 3 = Description
            nom = clean_name(clean_description(cells[1].get_text()))
            description = clean_description(cells[2].get_text())
            
            if nom and description:
                sublimations.append({
                    'nom': nom,
                    'description': description,
                    'type': 'epique'
                })
    
    print(f"Sublimations epiques extraites: {len(sublimations)}")
    return sublimations

def extraire_tableau_relique(html_content):
    """Extrait les sublimations reliques de la section 4.2."""
    print("\n" + "="*80)
    print("Extraction du tableau des sublimations reliques (section 4.2)")
    print("="*80)
    
    # Rechercher le tableau tablepress-274
    pattern = r'<table[^>]*id="tablepress-274"[^>]*>.*?</table>'
    match = re.search(pattern, html_content, re.DOTALL)
    
    if not match:
        print("Tableau relique non trouve!")
        return []
    
    table_html = match.group(0)
    soup = BeautifulSoup(table_html, 'html.parser')
    
    sublimations = []
    rows = soup.find_all('tr')[1:]  # Ignorer l'en-tête
    
    print(f"Nombre de lignes trouvees: {len(rows)}")
    
    for row in rows:
        cells = row.find_all('td')
        if len(cells) >= 3:
            # Colonne 2 = Nom, Colonne 3 = Description
            nom = clean_name(clean_description(cells[1].get_text()))
            description = clean_description(cells[2].get_text())
            
            if nom and description:
                sublimations.append({
                    'nom': nom,
                    'description': description,
                    'type': 'relique'
                })
    
    print(f"Sublimations reliques extraites: {len(sublimations)}")
    return sublimations

def trouver_correspondance(nom_html, sublimations_json, type_attendu=None):
    """Trouve la meilleure correspondance entre un nom HTML et le JSON."""
    meilleure_correspondance = None
    meilleur_score = 0
    
    for subl in sublimations_json:
        # Vérifier le type si spécifié
        if type_attendu == 'epique' and not subl.get('isEpic', False):
            continue
        if type_attendu == 'relique' and not subl.get('isRelic', False):
            continue
        if type_attendu == 'standard' and (subl.get('isEpic', False) or subl.get('isRelic', False)):
            continue
        
        # Comparer avec le nom français
        nom_json = subl['title'].get('fr', '')
        score = similarity(nom_html, nom_json)
        
        if score > meilleur_score:
            meilleur_score = score
            meilleure_correspondance = subl
    
    # Seuil de similarité à 0.7 pour accepter une correspondance
    if meilleur_score >= 0.7:
        return meilleure_correspondance, meilleur_score
    
    return None, meilleur_score

# Charger le fichier HTML
print("Chargement du fichier page.html...")
with open('public/page.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

# Charger le fichier JSON
print("Chargement du fichier sublimations.json...")
with open('public/sublimations.json', 'r', encoding='utf-8') as f:
    sublimations_json = json.load(f)

print(f"Nombre de sublimations dans le JSON: {len(sublimations_json)}")

# Extraire toutes les sublimations des 3 tableaux
sublimations_html = []
sublimations_html.extend(extraire_tableau_standard(html_content))
sublimations_html.extend(extraire_tableau_epique(html_content))
sublimations_html.extend(extraire_tableau_relique(html_content))

print(f"\n\nTotal de sublimations extraites du HTML: {len(sublimations_html)}")

# Traiter chaque sublimation
print("\n" + "="*80)
print("Mise a jour des sublimations")
print("="*80)

updated_count = 0
not_found = []

for i, subl_html in enumerate(sublimations_html, 1):
    nom = subl_html['nom']
    description = subl_html['description']
    type_subl = subl_html['type']
    
    print(f"\n{i}. {nom} ({type_subl})")
    
    # Trouver la correspondance dans le JSON
    subl_json, score = trouver_correspondance(nom, sublimations_json, type_subl)
    
    if subl_json:
        nom_json = subl_json['title']['fr']
        print(f"   Correspond a: {nom_json} (score: {score:.2f})")
        
        try:
            # Mettre à jour la description française
            subl_json['description']['fr'] = description
            
            # Traduire si les descriptions sont vides
            if not subl_json['description'].get('en'):
                print("   Traduction EN...", end='', flush=True)
                subl_json['description']['en'] = traduire(description, 'en')
                print(" OK")
            
            if not subl_json['description'].get('es'):
                print("   Traduction ES...", end='', flush=True)
                subl_json['description']['es'] = traduire(description, 'es')
                print(" OK")
            
            if not subl_json['description'].get('pt'):
                print("   Traduction PT...", end='', flush=True)
                subl_json['description']['pt'] = traduire(description, 'pt')
                print(" OK")
            
            updated_count += 1
        except Exception as e:
            print(f"   Erreur: {type(e).__name__}")
            not_found.append({
                'nom_html': nom,
                'nom_json': nom_json,
                'type': type_subl,
                'raison': f"Erreur de traduction: {type(e).__name__}"
            })
    else:
        print(f"   Non trouve (meilleur score: {score:.2f})")
        not_found.append({
            'nom_html': nom,
            'nom_json': '',
            'type': type_subl,
            'raison': f"Aucune correspondance trouvee (meilleur score: {score:.2f})"
        })

# Sauvegarder le fichier JSON mis à jour
print("\n" + "="*80)
print(f"Sauvegarde de {updated_count} sublimations mises a jour...")
with open('public/sublimations.json', 'w', encoding='utf-8') as f:
    json.dump(sublimations_json, f, ensure_ascii=False, indent=2)

print("Fichier sublimations.json mis a jour!")

# Générer le rapport des non-résolus
if not_found:
    print(f"\n{len(not_found)} sublimations non resolues")
    with open('sublimations_non_resolues.json', 'w', encoding='utf-8') as f:
        json.dump(not_found, f, ensure_ascii=False, indent=2)
    print("Fichier sublimations_non_resolues.json cree!")
else:
    print("\nToutes les sublimations ont ete resolues!")

# Statistiques finales
print("\n" + "="*80)
print("STATISTIQUES FINALES")
print("="*80)
print(f"Sublimations extraites du HTML: {len(sublimations_html)}")
print(f"Sublimations mises a jour: {updated_count}")
print(f"Sublimations non resolues: {len(not_found)}")

# Compter les descriptions complètes
complete_count = 0
for subl in sublimations_json:
    if (subl['description'].get('fr') and 
        subl['description'].get('en') and 
        subl['description'].get('es') and 
        subl['description'].get('pt')):
        complete_count += 1

print(f"Sublimations avec descriptions completes (4 langues): {complete_count}/{len(sublimations_json)}")
print("="*80)
