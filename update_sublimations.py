#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
from deep_translator import GoogleTranslator

print("Chargement des fichiers...")

# Charger les descriptions extraites
with open('sublimations_extracted.json', 'r', encoding='utf-8') as f:
    descriptions_fr = json.load(f)

# Charger le fichier sublimations.json
with open('public/sublimations.json', 'r', encoding='utf-8') as f:
    sublimations = json.load(f)

print(f"- {len(descriptions_fr)} descriptions extraites")
print(f"- {len(sublimations)} sublimations dans le JSON")

# Fonction pour traduire un texte
def traduire(texte, lang_cible):
    if not texte:
        return ""
    try:
        translator = GoogleTranslator(source='fr', target=lang_cible)
        # Limiter à 5000 caractères par appel
        if len(texte) > 5000:
            texte = texte[:5000]
        return translator.translate(texte)
    except Exception as e:
        print(f"Erreur de traduction vers {lang_cible}: {e}")
        return ""

# Mettre à jour les sublimations
updated_count = 0
not_found = []

for sublimation in sublimations:
    nom_fr = sublimation['title']['fr']
    
    # Chercher la description correspondante
    if nom_fr in descriptions_fr:
        description_fr = descriptions_fr[nom_fr]
        
        # Mettre à jour la description française
        sublimation['description']['fr'] = description_fr
        
        print(f"\nTraduction de '{nom_fr}'...")
        print(f"  FR: {description_fr[:80]}...")
        
        # Traduire en anglais
        if not sublimation['description']['en']:
            description_en = traduire(description_fr, 'en')
            sublimation['description']['en'] = description_en
            print(f"  EN: {description_en[:80]}...")
        
        # Traduire en espagnol
        if not sublimation['description']['es']:
            description_es = traduire(description_fr, 'es')
            sublimation['description']['es'] = description_es
            print(f"  ES: {description_es[:80]}...")
        
        # Traduire en portugais
        if not sublimation['description']['pt']:
            description_pt = traduire(description_fr, 'pt')
            sublimation['description']['pt'] = description_pt
            print(f"  PT: {description_pt[:80]}...")
        
        updated_count += 1
    else:
        not_found.append(nom_fr)

print(f"\n{'='*80}")
print(f"Résultats:")
print(f"- {updated_count} sublimations mises à jour")
print(f"- {len(not_found)} sublimations non trouvées dans le HTML")

if not_found:
    print("\nSublimations non trouvées:")
    for nom in not_found[:10]:  # Afficher les 10 premières
        print(f"  - {nom}")
    if len(not_found) > 10:
        print(f"  ... et {len(not_found) - 10} autres")

# Sauvegarder le fichier mis à jour
with open('public/sublimations.json', 'w', encoding='utf-8') as f:
    json.dump(sublimations, f, ensure_ascii=False, indent=2)

print(f"\nFichier sublimations.json mis à jour!")
