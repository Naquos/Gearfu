import json

# Charger les sublimations
with open('public/sublimations.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print("="*80)
print("RAPPORT FINAL - SUBLIMATIONS AVEC BASEEFFECT")
print("="*80)

# Statistiques globales
total = len(data)
epic = sum(1 for s in data if s.get('isEpic'))
relic = sum(1 for s in data if s.get('isRelic'))
standard = sum(1 for s in data if not s.get('isEpic') and not s.get('isRelic'))

print(f"\n=== STATISTIQUES GLOBALES ===")
print(f"Total sublimations: {total}")
print(f"  - Épiques: {epic}")
print(f"  - Reliques: {relic}")
print(f"  - Standard: {standard}")

# BaseEffect pour les standards
standard_subs = [s for s in data if not s.get('isEpic') and not s.get('isRelic')]
with_base = [s for s in standard_subs if s.get('baseEffect') and len(s.get('baseEffect', [])) > 0]
without_base = [s for s in standard_subs if not s.get('baseEffect') or len(s.get('baseEffect', [])) == 0]

print(f"\n=== SUBLIMATIONS STANDARD ===")
print(f"Avec baseEffect: {len(with_base)} ({len(with_base)/len(standard_subs)*100:.1f}%)")
print(f"Sans baseEffect: {len(without_base)} ({len(without_base)/len(standard_subs)*100:.1f}%)")

# Vérifier les 9 sublimations "% du niveau"
percent_level_ids = [30967, 30970, 28873, 31637, 28896, 31663, 27120, 28904, 28902]
print(f"\n=== VERIFICATION DES 9 SUBLIMATIONS '% DU NIVEAU' ===")
for subli_id in percent_level_ids:
    s = next((x for x in data if x['id'] == subli_id), None)
    if s:
        has_base = bool(s.get('baseEffect') and len(s.get('baseEffect', [])) > 0)
        status = "OK" if has_base else "MANQUANT"
        print(f"  [{status}] {s['id']} - {s['title']['fr']}")
        if has_base:
            print(f"       BaseEffect: {s['baseEffect']}")
            print(f"       Description: {s['description']['fr'][:60]}...")

# Exemples de sublimations avec baseEffect (par catégorie)
print(f"\n=== EXEMPLES PAR CATEGORIE ===")

# Catégorie 1: Pourcentages simples
simple_percent = [s for s in with_base if any(
    abs(eff.get('baseValue', 0)) <= 9 and abs(eff.get('pas', 0)) <= 9 
    for eff in s.get('baseEffect', [])
)]
print(f"\nPourcentages simples (-9% à 9%): {len(simple_percent)} sublimations")
for s in simple_percent[:3]:
    print(f"  - {s['title']['fr']}: {s['baseEffect']}")

# Catégorie 2: Pourcentages du niveau
level_percent = [s for s in with_base if s['id'] in percent_level_ids]
print(f"\nPourcentages du niveau: {len(level_percent)} sublimations")
for s in level_percent[:3]:
    print(f"  - {s['title']['fr']}: {s['baseEffect']}")

# Catégorie 3: Autres avec baseEffect
other = [s for s in with_base if s not in simple_percent and s not in level_percent]
print(f"\nAutres avec baseEffect: {len(other)} sublimations")
for s in other[:3]:
    print(f"  - {s['title']['fr']}: {s['baseEffect']}")

print("\n" + "="*80)
print("FIN DU RAPPORT")
print("="*80)
