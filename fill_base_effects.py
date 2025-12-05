import json
import re

# Charger le fichier JSON
with open('public/sublimations.json', 'r', encoding='utf-8') as f:
    sublimations = json.load(f)

def extract_base_values(description):
    """Extrait les valeurs de base des descriptions avec placeholders ${0}, ${1}, etc."""
    # Chercher tous les nombres suivis de %
    percentages = re.findall(r'[-+]?\d+\s*%', description)
    base_effects = []
    
    for perc in percentages:
        # Extraire le nombre
        num = int(re.sub(r'[%\s]', '', perc))
        # Vérifier si dans la plage [-9, 9]
        if -9 <= num <= 9:
            base_effects.append({"baseValue": num, "pas": num})
    
    return base_effects

count_updated = 0

for subli in sublimations:
    # Critères : non épique, non relique, baseEffect vide
    if (not subli.get('isEpic', False) and 
        not subli.get('isRelic', False) and 
        len(subli.get('baseEffect', [])) == 0):
        
        desc_fr = subli.get('description', {}).get('fr', '')
        
        # Vérifier si la description contient des %
        if '%' in desc_fr:
            base_effects = extract_base_values(desc_fr)
            
            # Vérifier que tous les % sont dans la plage
            all_percentages = re.findall(r'[-+]?\d+\s*%', desc_fr)
            all_in_range = all([abs(int(re.sub(r'[%\s]', '', p))) <= 9 for p in all_percentages])
            
            if all_in_range and len(base_effects) > 0:
                subli['baseEffect'] = base_effects
                count_updated += 1
                print(f"✓ {subli['title']['fr']}: {base_effects}")

# Sauvegarder le fichier
with open('public/sublimations.json', 'w', encoding='utf-8') as f:
    json.dump(sublimations, f, ensure_ascii=False, indent=2)

print(f"\n{'='*60}")
print(f"Total: {count_updated} sublimations mises à jour")
print(f"{'='*60}")
