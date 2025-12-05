import json

# Charger les sublimations
with open('public/sublimations.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Statistiques
total = len(data)
non_epic_relic = [s for s in data if not s.get('isEpic') and not s.get('isRelic')]
with_base_effect = [s for s in non_epic_relic if s.get('baseEffect')]
without_base_effect = [s for s in non_epic_relic if not s.get('baseEffect')]

print("="*80)
print("STATISTIQUES DES SUBLIMATIONS - BASE EFFECTS")
print("="*80)
print(f"\nTotal sublimations: {total}")
print(f"Sublimations non-épiques/reliques: {len(non_epic_relic)}")
print(f"  - Avec baseEffect: {len(with_base_effect)}")
print(f"  - Sans baseEffect: {len(without_base_effect)}")

if without_base_effect:
    print(f"\nSublimations sans baseEffect restantes:")
    for s in without_base_effect[:10]:
        print(f"  {s['id']}: {s['title']['fr']}")
        print(f"    {s['description']['fr'][:100]}...")

print("\n" + "="*80)
print("EXEMPLES DE SUBLIMATIONS MISES A JOUR:")
print("="*80)

examples = [
    31621,  # Acribie - 2%
    30752,  # Accumulation - 5%
    29495,  # Armure lourde - 5%
    28921,  # Altruisme - 2%
]

for ex_id in examples:
    subli = next((s for s in data if s['id'] == ex_id), None)
    if subli and subli.get('baseEffect'):
        print(f"\n{subli['title']['fr']} (ID: {ex_id}):")
        print(f"  Description FR: {subli['description']['fr']}")
        print(f"  BaseEffect: {subli['baseEffect']}")
        print(f"  LevelMax: {subli.get('levelMax', 'N/A')}")
