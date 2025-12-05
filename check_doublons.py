import json

# Charger les sublimations
with open('public/sublimations.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print("Recherche de doublons...")

# Trouver les IDs en double
id_counts = {}
for i, subli in enumerate(data):
    subli_id = subli['id']
    if subli_id not in id_counts:
        id_counts[subli_id] = []
    id_counts[subli_id].append(i)

# Afficher les doublons
doublons = {k: v for k, v in id_counts.items() if len(v) > 1}

if doublons:
    print(f"\n{len(doublons)} IDs en doublon trouves:")
    for subli_id, positions in doublons.items():
        print(f"\n  ID {subli_id} ({data[positions[0]]['title']['fr']}) - {len(positions)} occurrences:")
        for pos in positions:
            s = data[pos]
            has_base = 'OUI' if s.get('baseEffect') and len(s.get('baseEffect', [])) > 0 else 'NON'
            print(f"    Position {pos}: BaseEffect={has_base}")
            print(f"      Description: {s['description']['fr'][:70]}...")
else:
    print("\nAucun doublon trouve!")

print(f"\n\nTotal sublimations dans le fichier: {len(data)}")
