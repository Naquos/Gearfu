import json
import re

# Charger les sublimations
with open('public/sublimations.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f'Total sublimations: {len(data)}')

# Filtrer les non-épiques/reliques sans baseEffect
non_epic_relic = [s for s in data if not s.get('isEpic') and not s.get('isRelic')]
need_update = [s for s in non_epic_relic if not s.get('baseEffect')]
print(f'Sans baseEffect: {len(need_update)}')

# Chercher les descriptions avec "% du niveau" ou patterns similaires
def has_percent_of_level(desc):
    if not desc:
        return False
    patterns = [
        r'\d+\s*%\s+du niveau',
        r'\d+\s*%\s+du\s+Niveau',
        r'\d+\s*%\s+of\s+the\s+level',
        r'\d+\s*%\s+del\s+nivel',
        r'\d+\s*%\s+do\s+n[ií]vel',
    ]
    return any(re.search(pattern, desc, re.IGNORECASE) for pattern in patterns)

with_percent_level = [s for s in need_update if has_percent_of_level(s['description'].get('fr', ''))]
print(f'Avec "% du niveau": {len(with_percent_level)}')

print('\nExemples:')
for s in with_percent_level[:15]:
    print(f"\n  {s['id']}: {s['title']['fr']}")
    print(f"    FR: {s['description']['fr'][:120]}...")
    if len(s['description']['fr']) > 120:
        print(f"    ... {s['description']['fr'][120:][:80]}...")

# Sauvegarder la liste pour traitement
with open('sublis_percent_level.json', 'w', encoding='utf-8') as f:
    json.dump(with_percent_level, f, ensure_ascii=False, indent=2)

print(f"\n\nListe sauvegardée dans sublis_percent_level.json")
