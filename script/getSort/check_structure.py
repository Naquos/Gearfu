import json

data = json.load(open('wakfu_classes.json', 'r', encoding='utf-8'))
spell = data[0]['sortElementaires']['feu'][0]

print('normalEffect lengths:')
for lang in ['fr', 'en', 'es', 'pt']:
    print(f'  {lang}: {len(spell["normalEffect"][lang])} levels')

print('\nTemplates per language:')
for lang in ['fr', 'en', 'es', 'pt']:
    print(f'  {lang}: {spell["effect_normal"][lang][:100]}...')
