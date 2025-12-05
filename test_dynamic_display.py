import json

def calculate_effect_value(base_effect, level):
    """
    Calcule la valeur d'un effet pour un niveau donné
    Formule: baseValue + (level - 1) * pas
    """
    base_value = base_effect.get('baseValue', 0)
    pas = base_effect.get('pas', 0)
    return base_value + (level - 1) * pas

def format_description(description, base_effects, level):
    """
    Remplace les placeholders ${n} par les valeurs calculées
    """
    result = description
    for i, effect in enumerate(base_effects):
        value = calculate_effect_value(effect, level)
        # Ajouter le signe + pour les valeurs positives
        if value > 0:
            formatted_value = f"+{value}"
        else:
            formatted_value = str(value)
        result = result.replace(f'${{{i}}}', formatted_value)
    return result

# Charger les sublimations
with open('public/sublimations.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print("="*80)
print("TEST D'AFFICHAGE DYNAMIQUE DES DESCRIPTIONS")
print("="*80)

# Exemples de sublimations à tester
examples = [
    (31621, "Acribie"),
    (30752, "Accumulation"),
    (29495, "Armure lourde"),
    (28921, "Altruisme"),
    (29591, "Ambition"),
]

for ex_id, name in examples:
    subli = next((s for s in data if s['id'] == ex_id), None)
    if subli and subli.get('baseEffect'):
        print(f"\n{name} (ID: {ex_id}):")
        print(f"  Template FR: {subli['description']['fr']}")
        print(f"  BaseEffect: {subli['baseEffect']}")
        print(f"  LevelMax: {subli.get('levelMax', 6)}")
        print(f"\n  Affichage par niveau:")
        
        level_max = subli.get('levelMax', 6)
        for level in range(1, level_max + 1):
            formatted = format_description(
                subli['description']['fr'],
                subli['baseEffect'],
                level
            )
            print(f"    Niveau {level}: {formatted}")
        print()

print("="*80)
