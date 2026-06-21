import requests
import json
import os
import time
import random
from pathlib import Path

# Headers pour éviter les blocages 403
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                  "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    "Accept-Language": "fr-FR,fr;q=0.9,en;q=0.8"
}

# Créer une session avec les headers
session = requests.Session()
session.headers.update(HEADERS)

# Charger les IDs depuis le fichier ids.txt
with open('ids.txt', 'r', encoding='utf-8') as f:
    ids = json.load(f)

# Créer le dossier de sortie s'il n'existe pas
output_dir = Path('data')
output_dir.mkdir(exist_ok=True)

# Langue à télécharger
language = 'fr'

print(f"Téléchargement des pages pour {len(ids)} familiers en français...")

# Compteurs pour le suivi
total_downloads = len(ids)
current = 0
success = 0
errors = 0

for familier_id in ids:
    current += 1
    url = f"https://www.wakfu.com/{language}/mmorpg/encyclopedie/familiers/{familier_id}"
    output_file = output_dir / f"{familier_id}.html"
    
    # Si le fichier existe déjà, on passe
    if output_file.exists():
        print(f"[{current}/{total_downloads}] Déjà téléchargé: {familier_id}")
        success += 1
        continue
    
    try:
        response = session.get(url, timeout=30, allow_redirects=True)
        
        print(f"[{current}/{total_downloads}] HTTP {response.status_code} - {familier_id}")
        
        if response.status_code == 200:
            # Vérifier si c'est bien du HTML
            content_type = response.headers.get("Content-Type", "").lower()
            if "text/html" in content_type or "application/xhtml+xml" in content_type:
                # Sauvegarder le HTML
                with open(output_file, 'w', encoding='utf-8') as f:
                    f.write(response.text)
                print(f"    ✓ Téléchargé ({len(response.content)} bytes)")
                success += 1
            else:
                print(f"    ✗ Type de contenu inattendu: {content_type}")
                errors += 1
        else:
            print(f"    ✗ Erreur {response.status_code}")
            errors += 1
        
        # Pause aléatoire entre 8 et 10 secondes pour ne pas surcharger le serveur
        time.sleep(random.uniform(8, 10))
        
    except Exception as e:
        print(f"[{current}/{total_downloads}] ✗ Exception pour {familier_id}: {str(e)}")
        errors += 1
        continue

print(f"\n=== Résumé ===")
print(f"Total: {total_downloads}")
print(f"Succès: {success}")
print(f"Erreurs: {errors}")
print(f"\nFichiers sauvegardés dans le dossier: {output_dir.absolute()}")
