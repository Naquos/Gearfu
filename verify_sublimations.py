import json

# Charger le fichier JSON
with open('public/sublimations.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Vérifier quelques sublimations
test_names = ['Élan', 'Chaos', 'Abnégation', 'Alternance', 'Robuste', 'Détermination']

print("Vérification des descriptions:")
print("="*80)

for name in test_names:
    sublimations = [s for s in data if s['title']['fr'] == name]
    if sublimations:
        subl = sublimations[0]
        print(f"\n{name}:")
        print(f"  Type: {'Epique' if subl.get('isEpic') else 'Relique' if subl.get('isRelic') else 'Standard'}")
        print(f"  FR: {subl['description']['fr'][:70]}...")
        print(f"  EN: {subl['description']['en'][:70]}...")
        print(f"  ES: {subl['description']['es'][:70]}...")
        print(f"  PT: {subl['description']['pt'][:70]}...")

# Statistiques
print("\n" + "="*80)
print("STATISTIQUES:")
print("="*80)

total = len(data)
with_fr = sum(1 for s in data if s['description'].get('fr'))
with_en = sum(1 for s in data if s['description'].get('en'))
with_es = sum(1 for s in data if s['description'].get('es'))
with_pt = sum(1 for s in data if s['description'].get('pt'))
complete = sum(1 for s in data if s['description'].get('fr') and s['description'].get('en') and s['description'].get('es') and s['description'].get('pt'))

print(f"Total de sublimations: {total}")
print(f"Avec description FR: {with_fr}")
print(f"Avec description EN: {with_en}")
print(f"Avec description ES: {with_es}")
print(f"Avec description PT: {with_pt}")
print(f"Descriptions completes (4 langues): {complete}")

epiques = sum(1 for s in data if s.get('isEpic'))
reliques = sum(1 for s in data if s.get('isRelic'))
standards = total - epiques - reliques

print(f"\nTypes:")
print(f"  Standard: {standards}")
print(f"  Epiques: {epiques}")
print(f"  Reliques: {reliques}")
