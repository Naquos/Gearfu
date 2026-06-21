import requests
import json
import time
from pathlib import Path

# Enum des classes Wakfu
CLASS_IDS = {
    'Feca': 1,
    'Osamodas': 2,
    'Enutrof': 3,
    'Sram': 4,
    'Xelor': 5,
    'Ecaflip': 6,
    'Eniripsa': 7,
    'Iop': 8,
    'Cra': 9,
    'Sadida': 10,
    'Sacrieur': 11,
    'Pandawa': 12,
    'Roublard': 13,
    'Zobal': 14,
    'Ouginak': 15,
    'Steamer': 16,
    'Eliotrope': 18,
    'Huppermage': 19
}

# Configuration de l'API
BASE_URL = "https://api.zenithwakfu.com/builder/api/spells/"
HEADERS = {
    "Host": "api.zenithwakfu.com",
    "Origin": "https://zenithwakfu.com",
    "Referer": "https://zenithwakfu.com/",
    "X-Requested-With": "XMLHttpRequest"
}

# Créer le dossier de sortie s'il n'existe pas
output_dir = Path("data")
output_dir.mkdir(exist_ok=True)

def download_spells_for_class(class_name: str, class_id: int):
    """Télécharge les sorts pour une classe donnée"""
    url = f"{BASE_URL}{class_id}"
    
    try:
        print(f"Téléchargement des sorts pour {class_name} (ID: {class_id})...")
        response = requests.get(url, headers=HEADERS)
        response.raise_for_status()
        
        # Sauvegarder le JSON
        data = response.json()
        output_file = output_dir / f"{class_id}_{class_name}.json"
        
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        
        print(f"✓ Sorts de {class_name} sauvegardés dans {output_file}")
        return True
        
    except requests.exceptions.RequestException as e:
        print(f"✗ Erreur lors du téléchargement pour {class_name}: {e}")
        return False

def main():
    """Fonction principale pour télécharger tous les sorts"""
    print("Début du scraping des sorts ZenithWakfu")
    print(f"Nombre de classes à traiter: {len(CLASS_IDS)}")
    print("-" * 50)
    
    success_count = 0
    total_count = len(CLASS_IDS)
    
    for idx, (class_name, class_id) in enumerate(CLASS_IDS.items(), 1):
        if download_spells_for_class(class_name, class_id):
            success_count += 1
        
        # Attendre 10 secondes entre chaque requête (sauf pour la dernière)
        if idx < total_count:
            print(f"Attente de 10 secondes avant la prochaine requête...\n")
            time.sleep(10)
    
    print("-" * 50)
    print(f"Scraping terminé: {success_count}/{total_count} classes téléchargées avec succès")

if __name__ == "__main__":
    main()
