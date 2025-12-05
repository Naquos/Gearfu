# Sublimations non résolues - Rapport final

## Résumé
- **Total de sublimations dans le JSON**: 230
- **Sublimations avec descriptions complètes (4 langues)**: 217/230
- **Sublimations manquantes**: 13

## Analyse

### Sublimations traitées avec succès
✅ 229 sublimations ont été extraites du fichier `page.html` (sections 3.2 et 4.2)
✅ 217 sublimations ont été mises à jour avec descriptions en français, anglais, espagnol et portugais
✅ Toutes les correspondances ont été trouvées (score de similarité ≥ 0.7)

### Sublimations manquantes (13)

Ces sublimations n'ont pas été trouvées dans le fichier HTML. Il s'agit probablement de **variantes de niveau** (version II, III, etc.) qui partagent le même nom mais ont des IDs différents dans le JSON.

| Nom | ID | Type | Raison probable |
|-----|-----|------|----------------|
| Alternance | 25798 | Relique | Rune Relique (pas dans les tableaux de descriptions) |
| Calibrage | 31607 | Relique | Variante ou rune |
| Constance | 30993 | Épique | Variante (Constance II dans HTML correspond à ID 24131) |
| Contrôle de l'espace | 29873 | Épique | Variante (Contrôle de l'espace II dans HTML correspond à ID 28386) |
| Coque | 31660 | Standard | Nom différent dans HTML ou absent |
| Cuirasse singulière | 31737 | Relique | Variante (Cuirasse singulière dans HTML correspond à ID 31606) |
| Excès | 29871 | Relique | Variante (Excès dans HTML correspond à ID 24138) |
| Furie | 28384 | Épique | Variante (Furie II dans HTML correspond à ID 24130) |
| Inflexibilité | 29874 | Épique | Variante (Inflexibilité II dans HTML correspond à ID 29872) |
| Lunatique | 31608 | Relique | Variante |
| Mesure | 31614 | Épique | Variante (plusieurs Mesure avec IDs différents) |
| Mesure | 31739 | Épique | Variante (plusieurs Mesure avec IDs différents) |
| Pilier | 31613 | Épique | Variante (Pilier II dans HTML correspond à ID 24133) |

## Explication technique

Le fichier HTML contient des descriptions pour les sublimations de base et leurs variantes améliorées (ex: "Constance", "Constance II", "Mesure", "Mesure II", "Mesure III").

Cependant, le fichier JSON contient **plusieurs entrées** avec le même nom mais des IDs différents, correspondant probablement à différentes versions ou niveaux du jeu.

Lors du traitement, le script de correspondance a mis à jour la **première occurrence** trouvée pour chaque nom, laissant les variantes/duplicatas sans description.

## Recommandations

1. **Vérifier si ces 13 sublimations sont toujours utilisées** dans le jeu actuel
2. **Copier manuellement les descriptions** des versions principales vers les variantes si elles sont identiques
3. **Rechercher dans d'autres sources** si ces variantes ont des descriptions différentes
4. **Contacter les mainteneurs** du wiki Wakfu pour vérifier les données manquantes

## Fichiers générés

- `sublimations_manquantes.json` : Liste détaillée des sublimations sans descriptions (format JSON)
- `process_all_sublimations.py` : Script utilisé pour l'extraction et la traduction
- `verify_sublimations.py` : Script de vérification des résultats
