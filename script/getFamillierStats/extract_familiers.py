import json
import re
from pathlib import Path
from bs4 import BeautifulSoup

# Dossier contenant les fichiers HTML
data_dir = Path('data')

# Liste pour stocker tous les familiers
familiers = []

# Parcourir tous les fichiers HTML
html_files = list(data_dir.glob('*.html'))
print(f"Traitement de {len(html_files)} fichiers HTML...")

for html_file in sorted(html_files):
    try:
        # Récupérer l'ID depuis le nom du fichier
        familier_id = int(html_file.stem)
        
        # Lire le contenu HTML
        with open(html_file, 'r', encoding='utf-8') as f:
            html_content = f.read()
        
        # Parser le HTML
        soup = BeautifulSoup(html_content, 'html.parser')
        
        # Trouver la div avec la classe spécifique (d'abord niveau 50, sinon niveau 25, sinon niveau 0)
        target_div = soup.find('div', class_='ak-level-selector-target ak-level-50 show')
        level = 50
        
        if not target_div:
            target_div = soup.find('div', class_='ak-level-selector-target ak-level-25 show')
            level = 25
        
        if not target_div:
            target_div = soup.find('div', class_='ak-level-selector-target ak-level-0 show')
            level = 0
        
        if target_div:
            # Extraire le texte
            text = target_div.get_text()
            
            # Extraire uniquement les nombres (positifs et négatifs)
            numbers = re.findall(r'-?\d+', text)
            
            # Convertir en entiers
            stats_list = [int(num) for num in numbers]
            
            # Créer l'objet familier
            familier = {
                "id": familier_id,
                "statsList": stats_list
            }
            
            familiers.append(familier)
            print(f"✓ {familier_id}: {len(stats_list)} stats trouvées (niveau {level})")
        else:
            print(f"✗ {familier_id}: div 'ak-level-50', 'ak-level-25' ou 'ak-level-0' non trouvée")
    
    except Exception as e:
        print(f"✗ Erreur pour {html_file.name}: {e}")
        continue

# Trier par ID
familiers.sort(key=lambda x: x['id'])

# Sauvegarder dans un fichier JSON
output_file = Path('familiers_stats.json')
with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(familiers, f, indent=2, ensure_ascii=False)

print(f"\n=== Résumé ===")
print(f"Fichiers traités: {len(html_files)}")
print(f"Familiers extraits: {len(familiers)}")
print(f"Fichier de sortie: {output_file.absolute()}")
