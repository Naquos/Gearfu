import json

def calculate_effect_value(base_effect, level):
    """
    Calcule la valeur d'un effet pour un niveau donné
    Formule: baseValue + (level - 1) * pas
    
    Pour les "% du niveau": 
    - baseValue = pourcentage (ex: 50 pour 50%)
    - pas = même pourcentage
    - Résultat = baseValue + (level-1) × pas = pourcentage × niveau
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
        # Formater selon le type de valeur
        if value == int(value):
            formatted_value = str(int(value))
        else:
            formatted_value = f"{value:.1f}"
        result = result.replace(f'${{{i}}}', formatted_value)
    return result

# Charger les sublimations
with open('public/sublimations.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print("="*80)
print("TEST D'AFFICHAGE DYNAMIQUE - SUBLIMATIONS '% DU NIVEAU'")
print("="*80)

# Les sublimations traitées
examples = [
    (30967, "Interception", "50% du niveau"),
    (30970, "Interposition", "50% du niveau"),
    (28873, "Muraille", "150% du niveau"),
    (31637, "Propagation", "10% du niveau"),
    (28896, "Retour enflammé", "100% du niveau"),
    (31663, "Rupture violente", "10% du niveau"),
    (27120, "Solidité", "400% du niveau"),
    (28904, "Vol d'Esquive", "15% du niveau"),
    (28902, "Vol de Tacle", "15% du niveau"),
]

for ex_id, name, original_percent in examples:
    subli = next((s for s in data if s['id'] == ex_id), None)
    if subli and subli.get('baseEffect'):
        print(f"\n{name} (ID: {ex_id}) - Original: {original_percent}")
        print(f"  Template FR: {subli['description']['fr']}")
        print(f"  BaseEffect: {subli['baseEffect']}")
        print(f"  LevelMax: {subli.get('levelMax', 6)}")
        print(f"\n  Affichage par niveau:")
        
        level_max = subli.get('levelMax', 6)
        for level in range(1, min(level_max + 1, 7)):  # Limiter à 6 niveaux max pour l'affichage
            formatted = format_description(
                subli['description']['fr'],
                subli['baseEffect'],
                level
            )
            # Calculer aussi la valeur brute
            raw_value = calculate_effect_value(subli['baseEffect'][0], level)
            print(f"    Niveau {level}: {formatted}")
            print(f"              (valeur calculée: {raw_value:.1f})")

print("\n" + "="*80)
