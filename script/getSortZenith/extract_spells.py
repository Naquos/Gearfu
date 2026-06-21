import json
from pathlib import Path
from typing import List, Dict, Any

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

# Mapping des éléments
ELEMENT_MAP = {
    1: 'feu',
    2: 'eau',
    3: 'terre',
    4: 'air'
}

def extract_level_unlock_sort(spell: Dict[str, Any]) -> Dict[str, int]:
    """Extrait idSort et levelUnlockSort d'un sort"""
    return {
        'idSort': spell['gfx_id'],
        'levelUnlockSort': spell['unlock_level']
    }

def process_elementary_spells(elementaries: List[Dict[str, Any]]) -> Dict[str, List[Dict[str, int]]]:
    """Traite les sorts élémentaires et les répartit par élément"""
    result = {
        'feu': [],
        'eau': [],
        'terre': [],
        'air': []
    }
    
    for spell in elementaries:
        id_element = spell.get('id_element')
        if id_element in ELEMENT_MAP:
            element_name = ELEMENT_MAP[id_element]
            result[element_name].append(extract_level_unlock_sort(spell))
    
    return result

def process_active_spells(actives: List[Dict[str, Any]]) -> List[Dict[str, int]]:
    """Traite les sorts actifs"""
    return [extract_level_unlock_sort(spell) for spell in actives]

def process_passive_spells(passives: List[Dict[str, Any]]) -> List[Dict[str, int]]:
    """Traite les sorts passifs"""
    return [extract_level_unlock_sort(spell) for spell in passives]

def process_class_file(class_name: str, class_id: int) -> Dict[str, Any]:
    """Traite un fichier JSON d'une classe"""
    input_file = Path('data') / f"{class_id}_{class_name}.json"
    
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        result = {
            'idClasse': class_id,
            'sortElementaires': process_elementary_spells(data.get('elementaries', [])),
            'sortActifs': process_active_spells(data.get('actives', [])),
            'sortPassifs': process_passive_spells(data.get('passives', []))
        }
        
        print(f"✓ Classe {class_name} (ID: {class_id}) traitée")
        print(f"  - Sorts élémentaires: Feu={len(result['sortElementaires']['feu'])}, Eau={len(result['sortElementaires']['eau'])}, Terre={len(result['sortElementaires']['terre'])}, Air={len(result['sortElementaires']['air'])}")
        print(f"  - Sorts actifs: {len(result['sortActifs'])}")
        print(f"  - Sorts passifs: {len(result['sortPassifs'])}")
        
        return result
        
    except FileNotFoundError:
        print(f"✗ Fichier non trouvé pour {class_name}: {input_file}")
        return None
    except Exception as e:
        print(f"✗ Erreur lors du traitement de {class_name}: {e}")
        return None

def main():
    """Fonction principale pour extraire les informations des sorts"""
    print("Début de l'extraction des sorts ZenithWakfu")
    print(f"Nombre de classes à traiter: {len(CLASS_IDS)}")
    print("-" * 50)
    
    all_classes_data = []
    success_count = 0
    
    for class_name, class_id in CLASS_IDS.items():
        class_data = process_class_file(class_name, class_id)
        if class_data:
            all_classes_data.append(class_data)
            success_count += 1
        print()
    
    # Sauvegarder le résultat final
    output_file = Path('sorts_zenith.json')
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(all_classes_data, f, ensure_ascii=False, indent=2)
    
    print("-" * 50)
    print(f"Extraction terminée: {success_count}/{len(CLASS_IDS)} classes traitées avec succès")
    print(f"Résultat sauvegardé dans: {output_file}")

if __name__ == "__main__":
    main()
