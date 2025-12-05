import json

# Charger le fichier JSON
with open('public/sublimations.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Trouver les sublimations sans descriptions complètes
missing = []
for subl in data:
    if not (subl['description'].get('fr') and 
            subl['description'].get('en') and 
            subl['description'].get('es') and 
            subl['description'].get('pt')):
        missing.append({
            'nom': subl['title']['fr'],
            'type': 'Epique' if subl.get('isEpic') else 'Relique' if subl.get('isRelic') else 'Standard',
            'id': subl['id'],
            'fr': bool(subl['description'].get('fr')),
            'en': bool(subl['description'].get('en')),
            'es': bool(subl['description'].get('es')),
            'pt': bool(subl['description'].get('pt'))
        })

print(f"Sublimations sans descriptions completes: {len(missing)}\n")
print("="*80)

for m in missing:
    print(f"\n{m['nom']} (ID: {m['id']}, Type: {m['type']})")
    print(f"  FR: {'✓' if m['fr'] else '✗'}")
    print(f"  EN: {'✓' if m['en'] else '✗'}")
    print(f"  ES: {'✓' if m['es'] else '✗'}")
    print(f"  PT: {'✓' if m['pt'] else '✗'}")

# Sauvegarder la liste
with open('sublimations_manquantes.json', 'w', encoding='utf-8') as f:
    json.dump(missing, f, ensure_ascii=False, indent=2)

print("\n" + "="*80)
print(f"Fichier sublimations_manquantes.json cree avec {len(missing)} entrees")
