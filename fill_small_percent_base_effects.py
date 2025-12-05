import json
import re

def extract_percentage_values(description):
    """
    Extrait les valeurs de pourcentage d'une description
    Retourne une liste de tuples (valeur, position_dans_texte)
    """
    # Chercher tous les pourcentages avec leur contexte
    pattern = r'([-+]?\d+)\s*%'
    matches = []
    for match in re.finditer(pattern, description):
        value = int(match.group(1))
        if -9 <= value <= 9 and value != 0:
            matches.append({
                'value': value,
                'start': match.start(),
                'end': match.end(),
                'full_match': match.group(0)
            })
    return matches

def create_dynamic_description(description, percentage_values):
    """
    Remplace les pourcentages par des placeholders ${n}
    """
    if not percentage_values:
        return description
    
    # Trier par position (de la fin vers le début pour ne pas décaler les indices)
    sorted_values = sorted(percentage_values, key=lambda x: x['start'], reverse=True)
    
    new_desc = description
    placeholder_index = 0
    
    for val in sorted_values:
        # Remplacer le pourcentage par ${n}
        before = new_desc[:val['start']]
        after = new_desc[val['end']:]
        new_desc = before + '${' + str(placeholder_index) + '}' + ' %' + after
        placeholder_index += 1
    
    return new_desc

def create_base_effect(percentage_value, level_max):
    """
    Crée un baseEffect basé sur la valeur de pourcentage
    Le pas est calculé pour que niveau 1 = valeur de base
    """
    # Pour le niveau 1, on veut la valeur de base
    # baseValue + (0 * pas) = valeur_niveau_1
    # donc baseValue = valeur_niveau_1
    
    # Le pas est la progression par niveau
    # Pour simplifier, on utilise la même valeur que le pourcentage
    base_value = percentage_value
    pas = percentage_value
    
    return {"baseValue": base_value, "pas": pas}

# Charger les sublimations à traiter
with open('sublis_to_update.json', 'r', encoding='utf-8') as f:
    sublis_to_update = json.load(f)

# Charger toutes les sublimations
with open('public/sublimations.json', 'r', encoding='utf-8') as f:
    all_sublimations = json.load(f)

print(f"Traitement de {len(sublis_to_update)} sublimations...\n")

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
        
        # Extraire les pourcentages
        percentages = extract_percentage_values(desc)
        
        if percentages:
            # Créer la description dynamique
            new_desc = create_dynamic_description(desc, percentages)
            updated_descriptions[lang] = new_desc
            
            # Créer les baseEffects (seulement une fois, basé sur FR)
            if lang == 'fr' and not base_effects:
                for perc in reversed(percentages):  # Inverser pour garder l'ordre original
                    base_effects.append(create_base_effect(perc['value'], level_max))
            
            print(f"  {lang.upper()}: {new_desc}")
            print(f"    Pourcentages trouvés: {[p['value'] for p in percentages]}")
    
    # Mettre à jour la sublimation dans la liste complète
    if base_effects and updated_descriptions:
        for i, s in enumerate(all_sublimations):
            if s['id'] == subli_id:
                all_sublimations[i]['baseEffect'] = base_effects
                all_sublimations[i]['description'] = updated_descriptions
                updates_count += 1
                print(f"  [OK] Mise a jour effectuee: {len(base_effects)} effet(s)")
                break
    else:
        skipped_count += 1
        print(f"  [SKIP] Aucune mise a jour (pas de pourcentages valides)")

# Sauvegarder les modifications
with open('public/sublimations.json', 'w', encoding='utf-8') as f:
    json.dump(all_sublimations, f, ensure_ascii=False, indent=2)

print(f"\n{'='*80}")
print(f"\nRésumé:")
print(f"  Sublimations mises à jour: {updates_count}")
print(f"  Sublimations ignorées: {skipped_count}")
print(f"\nFichier public/sublimations.json mis à jour!")
