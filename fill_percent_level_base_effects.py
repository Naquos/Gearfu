import json
import re

def extract_percent_of_level(description):
    """
    Extrait les valeurs de "X% du niveau" d'une description
    Retourne une liste de tuples (valeur_pourcentage, position)
    """
    patterns = [
        (r'(\d+)\s*%\s+du niveau', 'fr'),
        (r'(\d+)\s*%\s+of\s+the\s+level', 'en'),
        (r'(\d+)\s*%\s+del\s+nivel', 'es'),
        (r'(\d+)\s*%\s+do\s+n[ií]vel', 'pt'),
    ]
    
    matches = []
    for pattern, lang in patterns:
        for match in re.finditer(pattern, description, re.IGNORECASE):
            value = int(match.group(1))
            matches.append({
                'value': value,
                'start': match.start(),
                'end': match.end(),
                'full_match': match.group(0),
                'lang': lang
            })
    return matches

def create_dynamic_description_level(description, percent_values, lang):
    """
    Remplace "X% du niveau" par "${n}" sans le "% du niveau"
    """
    if not percent_values:
        return description
    
    # Trier par position (de la fin vers le début pour ne pas décaler les indices)
    sorted_values = sorted(percent_values, key=lambda x: x['start'], reverse=True)
    
    new_desc = description
    placeholder_index = 0
    
    # Patterns de remplacement selon la langue
    replacement_patterns = {
        'fr': r'\d+\s*%\s+du niveau',
        'en': r'\d+\s*%\s+of\s+the\s+level',
        'es': r'\d+\s*%\s+del\s+nivel',
        'pt': r'\d+\s*%\s+do\s+n[ií]vel',
    }
    
    pattern = replacement_patterns.get(lang, r'\d+\s*%\s+du niveau')
    
    # Trouver toutes les occurrences pour cette langue
    matches = list(re.finditer(pattern, description, re.IGNORECASE))
    
    # Remplacer de la fin vers le début
    for i, match in enumerate(reversed(matches)):
        before = new_desc[:match.start()]
        after = new_desc[match.end():]
        new_desc = before + '${' + str(len(matches) - 1 - i) + '}' + after
    
    return new_desc

def create_base_effect_for_level(percent_value):
    """
    Crée un baseEffect pour un "X% du niveau"
    On veut que: valeur_affichée = X% × niveau_sublimation
    
    Avec la formule: valeur = baseValue + (niveau_sublimation - 1) × pas
    
    Pour X% du niveau:
    - Niveau 1: X% × 1 = X
    - Niveau 2: X% × 2 = 2X
    - Niveau N: X% × N = N×X
    
    Donc: baseValue + (N-1)×pas = N×X
          baseValue = X, pas = X
    """
    # Stocke directement le pourcentage (ex: 50 pour 50%)
    base_value = percent_value
    pas = percent_value
    
    return {"baseValue": base_value, "pas": pas}

# Charger les sublimations à traiter
with open('sublis_percent_level.json', 'r', encoding='utf-8') as f:
    sublis_to_update = json.load(f)

# Charger toutes les sublimations
with open('public/sublimations.json', 'r', encoding='utf-8') as f:
    all_sublimations = json.load(f)

print(f"Traitement de {len(sublis_to_update)} sublimations avec '% du niveau'...\n")

updates_count = 0
skipped_count = 0

for subli in sublis_to_update:
    subli_id = subli['id']
    level_max = subli.get('levelMax', 6)
    
    print(f"\n{'='*80}")
    print(f"ID {subli_id}: {subli['title']['fr']}")
    print(f"Description FR originale: {subli['description']['fr']}")
    
    # Traiter toutes les langues
    base_effects = []
    updated_descriptions = {}
    
    for lang in ['fr', 'en', 'es', 'pt']:
        desc = subli['description'].get(lang, '')
        if not desc:
            continue
        
        # Extraire les "% du niveau"
        percentages = extract_percent_of_level(desc)
        
        if percentages:
            # Créer la description dynamique
            new_desc = create_dynamic_description_level(desc, percentages, lang)
            updated_descriptions[lang] = new_desc
            
            # Créer les baseEffects (seulement une fois, basé sur FR)
            if lang == 'fr' and not base_effects:
                # Compter le nombre de "% du niveau" dans la description FR
                fr_matches = list(re.finditer(r'(\d+)\s*%\s+du niveau', desc, re.IGNORECASE))
                for match in fr_matches:
                    percent_val = int(match.group(1))
                    base_effects.append(create_base_effect_for_level(percent_val))
            
            print(f"  {lang.upper()}: {new_desc}")
            if lang == 'fr':
                print(f"    Pourcentages du niveau trouves: {[int(m.group(1)) for m in re.finditer(r'(\d+)\s*%\s+du niveau', desc, re.IGNORECASE)]}")
    
    # Mettre à jour la sublimation dans la liste complète
    if base_effects and updated_descriptions:
        for i, s in enumerate(all_sublimations):
            if s['id'] == subli_id:
                all_sublimations[i]['baseEffect'] = base_effects
                all_sublimations[i]['description'] = updated_descriptions
                updates_count += 1
                print(f"  [OK] Mise a jour effectuee: {len(base_effects)} effet(s)")
                print(f"    BaseEffect: {base_effects}")
                break
    else:
        skipped_count += 1
        print(f"  [SKIP] Aucune mise a jour")

# Sauvegarder les modifications
with open('public/sublimations.json', 'w', encoding='utf-8') as f:
    json.dump(all_sublimations, f, ensure_ascii=False, indent=2)

print(f"\n{'='*80}")
print(f"\nResume:")
print(f"  Sublimations mises a jour: {updates_count}")
print(f"  Sublimations ignorees: {skipped_count}")
print(f"\nFichier public/sublimations.json mis a jour!")
