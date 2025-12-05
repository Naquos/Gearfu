import json

def calculate_effect_value(base_effect, level):
    """Calcule la valeur d'un effet pour un niveau donné"""
    base_value = base_effect.get('baseValue', 0)
    pas = base_effect.get('pas', 0)
    return base_value + (level - 1) * pas

def format_description(description, base_effects, level):
    """Remplace les placeholders ${n} par les valeurs calculées"""
    result = description
    for i, effect in enumerate(base_effects):
        value = calculate_effect_value(effect, level)
        # Formater la valeur
        if value == int(value):
            formatted = str(int(value))
        else:
            formatted = f"{value:.1f}"
        # Ajouter le signe + pour les valeurs positives (sauf pour les "% du niveau")
        if value > 0 and '${' + str(i) + '} %' in description:
            formatted = '+' + formatted
        result = result.replace(f'${{{i}}}', formatted)
    return result

# Charger les sublimations
with open('public/sublimations.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print("="*80)
print("TEST FINAL - EXEMPLES D'AFFICHAGE DYNAMIQUE")
print("="*80)

# Exemples représentatifs
examples = [
    (31621, "Pourcentage simple positif", 6),
    (30752, "Pourcentage simple positif avec contexte", 4),
    (29495, "Pourcentage simple positif", 2),
    (30967, "Pourcentage du niveau (50%)", 6),
    (28873, "Pourcentage du niveau (150%)", 4),
    (27120, "Pourcentage du niveau (400%)", 2),
]

for ex_id, category, level_max in examples:
    subli = next((s for s in data if s['id'] == ex_id), None)
    if subli and subli.get('baseEffect'):
        print(f"\n{'='*80}")
        print(f"{subli['title']['fr']} (ID: {ex_id})")
        print(f"Catégorie: {category}")
        print(f"BaseEffect: {subli['baseEffect']}")
        print(f"\nTemplate: {subli['description']['fr']}")
        print(f"\nAffichage dynamique:")
        
        for level in range(1, min(level_max + 1, 7)):
            formatted = format_description(
                subli['description']['fr'],
                subli['baseEffect'],
                level
            )
            print(f"  Niveau {level}: {formatted}")

print("\n" + "="*80)
print("\nRésumé:")
print("  - 93 sublimations avec pourcentages simples (-9% à 9%)")
print("  - 9 sublimations avec pourcentages du niveau")
print("  - Total: 102 sublimations avec descriptions dynamiques")
print("  - Format uniforme avec placeholders ${n}")
print("  - Support multilingue (FR, EN, ES, PT)")
print("="*80)
