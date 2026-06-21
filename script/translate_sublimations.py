import json

# Dictionnaire de traduction des termes techniques communs
translations = {
    # Termes de base
    "Dommages": {"en": "Damage", "es": "Daños", "pt": "Dano"},
    "Dommages Infligés": {"en": "Damage Inflicted", "es": "Daños Infligidos", "pt": "Dano Infligido"},
    "Dommages infligés": {"en": "Damage inflicted", "es": "Daños infligidos", "pt": "Dano infligido"},
    "Dommages reçus": {"en": "Damage received", "es": "Daños recibidos", "pt": "Dano recebido"},
    "Soins réalisés": {"en": "Heals performed", "es": "Curaciones realizadas", "pt": "Curas realizadas"},
    "Soins reçus": {"en": "Heals received", "es": "Curaciones recibidas", "pt": "Curas recebidas"},
    "Résistance Élémentaire": {"en": "Elemental Resistance", "es": "Resistencia Elemental", "pt": "Resistência Elemental"},
    "Résistance élémentaire": {"en": "Elemental resistance", "es": "Resistencia elemental", "pt": "Resistência elemental"},
    "Maîtrise élémentaire": {"en": "Elemental Mastery", "es": "Maestría elemental", "pt": "Maestria elemental"},
    "Maîtrise Élémentaire": {"en": "Elemental Mastery", "es": "Maestría Elemental", "pt": "Maestria Elemental"},
    "Coup Critique": {"en": "Critical Hit", "es": "Golpe Crítico", "pt": "Golpe Crítico"},
    "Coup critique": {"en": "Critical hit", "es": "Golpe crítico", "pt": "Golpe crítico"},
    "Armure": {"en": "Armor", "es": "Armadura", "pt": "Armadura"},
    "Armure donnée": {"en": "Armor given", "es": "Armadura dada", "pt": "Armadura dada"},
    "Armure reçue": {"en": "Armor received", "es": "Armadura recibida", "pt": "Armadura recebida"},
    "Parade": {"en": "Block", "es": "Parada", "pt": "Parada"},
    "Esquive": {"en": "Dodge", "es": "Esquiva", "pt": "Esquiva"},
    "Tacle": {"en": "Lock", "es": "Bloqueo", "pt": "Bloqueio"},
    "Volonté": {"en": "Willpower", "es": "Voluntad", "pt": "Vontade"},
    "Portée": {"en": "Range", "es": "Alcance", "pt": "Alcance"},
    
    # Combat
    "En début de combat": {"en": "At the start of combat", "es": "Al inicio del combate", "pt": "No início do combate"},
    "En début de tour": {"en": "At the start of turn", "es": "Al inicio del turno", "pt": "No início do turno"},
    "En fin de tour": {"en": "At the end of turn", "es": "Al final del turno", "pt": "No final do turno"},
    "au tour suivant": {"en": "next turn", "es": "en el siguiente turno", "pt": "no próximo turno"},
    "pour le tour suivant": {"en": "for the next turn", "es": "para el siguiente turno", "pt": "para o próximo turno"},
    "en tuant un ennemi": {"en": "when killing an enemy", "es": "al matar a un enemigo", "pt": "ao matar um inimigo"},
    "le porteur de l'état": {"en": "the state bearer", "es": "el portador del estado", "pt": "o portador do estado"},
    "porteur de l'état": {"en": "state bearer", "es": "portador del estado", "pt": "portador do estado"},
    "le porteur": {"en": "the bearer", "es": "el portador", "pt": "o portador"},
    
    # Conditions
    "Lorsque": {"en": "When", "es": "Cuando", "pt": "Quando"},
    "si": {"en": "if", "es": "si", "pt": "se"},
    "par tour": {"en": "per turn", "es": "por turno", "pt": "por turno"},
    "une fois par tour": {"en": "once per turn", "es": "una vez por turno", "pt": "uma vez por turno"},
    "max": {"en": "max", "es": "máx", "pt": "máx"},
    "non-cumulable": {"en": "non-stackable", "es": "no acumulable", "pt": "não acumulável"},
    "cumulable": {"en": "stackable", "es": "acumulable", "pt": "acumulável"},
    
    # Positions
    "au contact": {"en": "in melee", "es": "en contacto", "pt": "em contato"},
    "en mêlée": {"en": "in melee", "es": "en melé", "pt": "em melê"},
    "à distance": {"en": "at range", "es": "a distancia", "pt": "à distância"},
    "de face": {"en": "from front", "es": "de frente", "pt": "de frente"},
    "de dos": {"en": "from back", "es": "de espalda", "pt": "de costas"},
    "de côté": {"en": "from side", "es": "de lado", "pt": "de lado"},
    "en diagonale": {"en": "diagonally", "es": "en diagonal", "pt": "em diagonal"},
    "alignées": {"en": "aligned", "es": "alineadas", "pt": "alinhadas"},
    
    # Éléments
    "Feu": {"en": "Fire", "es": "Fuego", "pt": "Fogo"},
    "Eau": {"en": "Water", "es": "Agua", "pt": "Água"},
    "Terre": {"en": "Earth", "es": "Tierra", "pt": "Terra"},
    "Air": {"en": "Air", "es": "Aire", "pt": "Ar"},
    "dans l'élément": {"en": "in the element", "es": "en el elemento", "pt": "no elemento"},
    
    # Stats
    "PV": {"en": "HP", "es": "PV", "pt": "PV"},
    "PV max": {"en": "max HP", "es": "PV máx", "pt": "PV máx"},
    "PV manquants": {"en": "missing HP", "es": "PV faltantes", "pt": "PV faltando"},
    "PV courants": {"en": "current HP", "es": "PV actuales", "pt": "PV atuais"},
    "PA": {"en": "AP", "es": "PA", "pt": "PA"},
    "PM": {"en": "MP", "es": "PM", "pt": "PM"},
    "PW": {"en": "WP", "es": "PW", "pt": "PW"},
    "PW max": {"en": "max WP", "es": "PW máx", "pt": "PW máx"},
    
    # Actions
    "Regagne": {"en": "Regains", "es": "Recupera", "pt": "Recupera"},
    "Réduit": {"en": "Reduces", "es": "Reduce", "pt": "Reduz"},
    "Augmente": {"en": "Increases", "es": "Aumenta", "pt": "Aumenta"},
    "Convertit": {"en": "Converts", "es": "Convierte", "pt": "Converte"},
    "Vole": {"en": "Steals", "es": "Roba", "pt": "Rouba"},
    "Inflige": {"en": "Inflicts", "es": "Inflige", "pt": "Inflige"},
    "Effectue": {"en": "Performs", "es": "Efectúa", "pt": "Efetua"},
    
    # Maîtrises
    "Maîtrise Soin": {"en": "Healing Mastery", "es": "Maestría de Curación", "pt": "Maestria de Cura"},
    "Maîtrise Critique": {"en": "Critical Mastery", "es": "Maestría Crítica", "pt": "Maestria Crítica"},
    "Maîtrise Mêlée": {"en": "Melee Mastery", "es": "Maestría Melé", "pt": "Maestria Melê"},
    "Maîtrise Distance": {"en": "Distance Mastery", "es": "Maestría a Distancia", "pt": "Maestria à Distância"},
    "maîtrises secondaires": {"en": "secondary masteries", "es": "maestrías secundarias", "pt": "maestrias secundárias"},
    
    # Résistances
    "Résistance Feu": {"en": "Fire Resistance", "es": "Resistencia Fuego", "pt": "Resistência Fogo"},
    "Résistance Eau": {"en": "Water Resistance", "es": "Resistencia Agua", "pt": "Resistência Água"},
    "Résistance Terre": {"en": "Earth Resistance", "es": "Resistencia Tierra", "pt": "Resistência Terra"},
    "Résistance Air": {"en": "Air Resistance", "es": "Resistencia Aire", "pt": "Resistência Ar"},
    "Résistance critique": {"en": "Critical Resistance", "es": "Resistencia crítica", "pt": "Resistência crítica"},
    "Résistance dos": {"en": "Rear Resistance", "es": "Resistencia de espalda", "pt": "Resistência de costas"},
    
    # Autres
    "tour": {"en": "turn", "es": "turno", "pt": "turno"},
    "tour pair": {"en": "even turn", "es": "turno par", "pt": "turno par"},
    "tour impair": {"en": "odd turn", "es": "turno impar", "pt": "turno ímpar"},
    "niveau": {"en": "level", "es": "nivel", "pt": "nível"},
    "du niveau": {"en": "of level", "es": "del nivel", "pt": "do nível"},
    "sort": {"en": "spell", "es": "hechizo", "pt": "feitiço"},
    "sort élémentaire": {"en": "elemental spell", "es": "hechizo elemental", "pt": "feitiço elemental"},
    "dommages directs": {"en": "direct damage", "es": "daños directos", "pt": "dano direto"},
    "dommages indirects": {"en": "indirect damage", "es": "daños indirectos", "pt": "dano indireto"},
    "dommages critiques": {"en": "critical damage", "es": "daños críticos", "pt": "dano crítico"},
    "dommages lumière": {"en": "light damage", "es": "daños de luz", "pt": "dano de luz"},
    "Enflammé": {"en": "Burning", "es": "Quemado", "pt": "Queimado"},
    "Préparation": {"en": "Preparation", "es": "Preparación", "pt": "Preparação"},
    "Incurable": {"en": "Incurable", "es": "Incurable", "pt": "Incurável"},
    "Stabilisé": {"en": "Stabilized", "es": "Estabilizado", "pt": "Estabilizado"},
    "Vulnérabilité": {"en": "Vulnerability", "es": "Vulnerabilidad", "pt": "Vulnerabilidade"},
    "arme": {"en": "weapon", "es": "arma", "pt": "arma"},
    "arme à deux mains": {"en": "two-handed weapon", "es": "arma de dos manos", "pt": "arma de duas mãos"},
    "bouclier": {"en": "shield", "es": "escudo", "pt": "escudo"},
    "dague": {"en": "dagger", "es": "daga", "pt": "adaga"},
    "allié": {"en": "ally", "es": "aliado", "pt": "aliado"},
    "alliés": {"en": "allies", "es": "aliados", "pt": "aliados"},
    "ennemi": {"en": "enemy", "es": "enemigo", "pt": "inimigo"},
    "ennemis": {"en": "enemies", "es": "enemigos", "pt": "inimigos"},
    "cible": {"en": "target", "es": "objetivo", "pt": "alvo"},
    "cibles": {"en": "targets", "es": "objetivos", "pt": "alvos"},
    "activations": {"en": "activations", "es": "activaciones", "pt": "ativações"},
    "cases": {"en": "cells", "es": "casillas", "pt": "casas"},
    "zone": {"en": "area", "es": "área", "pt": "área"},
    "monocible": {"en": "single target", "es": "objetivo único", "pt": "alvo único"},
    "ligne de vue": {"en": "line of sight", "es": "línea de visión", "pt": "linha de visão"},
}

def translate_text(text_fr):
    """Traduit un texte français vers l'anglais, l'espagnol et le portugais"""
    text_en = text_fr
    text_es = text_fr
    text_pt = text_fr
    
    # Appliquer les traductions (ordre important pour éviter les remplacements partiels)
    # Trier par longueur décroissante pour traiter les expressions longues en premier
    sorted_terms = sorted(translations.items(), key=lambda x: len(x[0]), reverse=True)
    
    for fr_term, trans in sorted_terms:
        if fr_term in text_fr:
            text_en = text_en.replace(fr_term, trans["en"])
            text_es = text_es.replace(fr_term, trans["es"])
            text_pt = text_pt.replace(fr_term, trans["pt"])
    
    return text_en, text_es, text_pt

# Charger le fichier JSON
with open('c:\\Users\\maxer\\IdeaProjects\\Wakfu Builder\\public\\sublimations.json', 'r', encoding='utf-8') as f:
    sublimations = json.load(f)

# Traduire les descriptions
updated_count = 0
for subli in sublimations:
    desc_fr = subli['description']['fr']
    
    # Si la description française existe et n'est pas vide
    if desc_fr and desc_fr.strip():
        # Traduire seulement si les autres langues sont vides
        if not subli['description']['en'] or not subli['description']['es'] or not subli['description']['pt']:
            en, es, pt = translate_text(desc_fr)
            
            if not subli['description']['en']:
                subli['description']['en'] = en
            if not subli['description']['es']:
                subli['description']['es'] = es
            if not subli['description']['pt']:
                subli['description']['pt'] = pt
                
            updated_count += 1
            print(f"✓ Traduit: {subli['title']['fr']}")

# Sauvegarder le fichier
with open('c:\\Users\\maxer\\IdeaProjects\\Wakfu Builder\\public\\sublimations.json', 'w', encoding='utf-8') as f:
    json.dump(sublimations, f, ensure_ascii=False, indent=2)

print(f"\n{updated_count} sublimations traduites avec succès!")
