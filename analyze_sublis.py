import json
import re

# Charger les sublimations
with open('public/sublimations.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f'Total sublimations: {len(data)}')

# Filtrer les non-épiques/reliques
non_epic_relic = [s for s in data if not s.get('isEpic') and not s.get('isRelic')]
print(f'Non-epic/relic: {len(non_epic_relic)}')

# Sans baseEffect
need_update = [s for s in non_epic_relic if not s.get('baseEffect')]
print(f'Without baseEffect: {len(need_update)}')

# Avec des % entre -9 et 9
def has_small_percent(desc):
    if not desc:
        return False
    matches = re.findall(r'[-+]?\d+\s*%', desc)
    return any(abs(int(m.replace('%', '').replace('+', '').strip())) <= 9 for m in matches)

with_small_percent = [s for s in need_update if has_small_percent(s['description'].get('fr', ''))]
print(f'With -9% to 9%: {len(with_small_percent)}')

print('\nExemples:')
for s in with_small_percent[:10]:
    print(f"  {s['id']}: {s['title']['fr']}")
    print(f"    FR: {s['description']['fr']}")
    print()

# Sauvegarder la liste pour traitement
with open('sublis_to_update.json', 'w', encoding='utf-8') as f:
    json.dump(with_small_percent, f, ensure_ascii=False, indent=2)
