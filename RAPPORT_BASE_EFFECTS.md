# Rapport de Mise à Jour des BaseEffects des Sublimations

Date: 2025-12-05

## Objectif
Remplir les `baseEffect` des sublimations qui ne sont ni épiques ni reliques, et dont les pourcentages sont compris entre -9% et 9%, en s'inspirant du format de la sublimation "Abandon".

## Méthode

### 1. Analyse
- **Total de sublimations**: 230
- **Sublimations non-épiques/reliques**: 151
- **Sublimations sans baseEffect**: 150
- **Sublimations avec pourcentages -9% à 9%**: 85

### 2. Traitement Automatique

Le script `fill_small_percent_base_effects.py` a effectué les opérations suivantes :

1. **Extraction des pourcentages** : Identification de tous les pourcentages entre -9% et 9% dans les descriptions
2. **Création des baseEffect** : Pour chaque pourcentage trouvé, création d'un objet `{"baseValue": X, "pas": X}`
3. **Modification des descriptions** : Remplacement des valeurs statiques par des placeholders dynamiques `${n}`
4. **Traitement multilingue** : Application sur les 4 langues (FR, EN, ES, PT)

### 3. Format des BaseEffect

Inspiré de la sublimation "Abandon" :
```json
"baseEffect": [
  {"baseValue": 2, "pas": 2}
]
```

**Formule de calcul** : `valeur_niveau_N = baseValue + (N - 1) × pas`

Exemples :
- Niveau 1 : 2 + (1-1) × 2 = 2%
- Niveau 2 : 2 + (2-1) × 2 = 4%
- Niveau 6 : 2 + (6-1) × 2 = 12%

## Résultats

### Statistiques Finales
- **Sublimations traitées avec succès** : 85
- **Sublimations ignorées** : 0
- **Sublimations non-épiques/reliques avec baseEffect** : 86 (incluant "Abandon")
- **Sublimations non-épiques/reliques sans baseEffect** : 65

### Exemples de Sublimations Mises à Jour

#### Acribie (ID: 31621)
- **Description originale** : `2 % Dommages infligés aux cibles à 5 cases ou plus.`
- **Description dynamique** : `${0} % Dommages infligés aux cibles à 5 cases ou plus.`
- **BaseEffect** : `[{"baseValue": 2, "pas": 2}]`
- **LevelMax** : 6
- **Affichage** :
  - Niveau 1 : +2%
  - Niveau 6 : +12%

#### Accumulation (ID: 30752)
- **Description originale** : `-20% Soins réalisés. Chaque tour passé sans soigner : 5% Soins réalisés (max 40%).`
- **Description dynamique** : `-20% Soins réalisés. Chaque tour passé sans soigner : ${0} % Soins réalisés (max 40%).`
- **BaseEffect** : `[{"baseValue": 5, "pas": 5}]`
- **LevelMax** : 4
- **Affichage** :
  - Niveau 1 : +5%
  - Niveau 4 : +20%

#### Armure lourde (ID: 29495)
- **Description originale** : `-1 PM.5 % Dommages infligés.`
- **Description dynamique** : `-1 PM.${0} % Dommages infligés.`
- **BaseEffect** : `[{"baseValue": 5, "pas": 5}]`
- **LevelMax** : 2
- **Affichage** :
  - Niveau 1 : +5%
  - Niveau 2 : +10%

#### Altruisme (ID: 28921)
- **Description originale** : `2 % Soins réalisés sur un allié en ligne et à distance.`
- **Description dynamique** : `${0} % Soins réalisés sur un allié en ligne et à distance.`
- **BaseEffect** : `[{"baseValue": 2, "pas": 2}]`
- **LevelMax** : 6
- **Affichage** :
  - Niveau 1 : +2%
  - Niveau 6 : +12%

#### Ambition (ID: 29591)
- **Description originale** : `Au début du premier tour, si les maîtrises secondaires sont <= 0 :5 % Coup critique.`
- **Description dynamique** : `Au début du premier tour, si les maîtrises secondaires sont <= 0 :${0} % Coup critique.`
- **BaseEffect** : `[{"baseValue": 5, "pas": 5}]`
- **LevelMax** : 6
- **Affichage** :
  - Niveau 1 : +5%
  - Niveau 6 : +30%

## Avantages du Système Dynamique

1. **Cohérence** : Format uniforme pour toutes les sublimations
2. **Maintenance** : Facile de modifier la progression sans toucher aux descriptions
3. **Affichage** : Les interfaces peuvent calculer automatiquement la valeur pour chaque niveau
4. **Multilingue** : Le système fonctionne de la même manière dans les 4 langues

## Sublimations Restantes

65 sublimations non-épiques/reliques n'ont pas encore de `baseEffect`. Ces sublimations ont des descriptions plus complexes qui nécessitent une analyse manuelle :
- Effets basés sur des statistiques (PM, PA, PV)
- Effets conditionnels complexes
- Valeurs fixes (non-pourcentages)
- Pourcentages > 9% ou fixes

Exemples :
- Agilité vitale : "En début de tour, si les PV sont supérieurs à 90% : 1 PM"
- Aisance : "Après avoir subi une perte de 2 PM : 5 Volonté (3 tours)"
- Barrière Distance : "Réduit les Dommages Distance subis de 50% du niveau, 2 fois par tour"

## Fichiers Modifiés

- `public/sublimations.json` : Fichier principal mis à jour avec 85 nouvelles entrées `baseEffect`

## Scripts Créés

1. `analyze_sublis.py` : Analyse des sublimations à traiter
2. `fill_small_percent_base_effects.py` : Script principal de traitement
3. `verify_base_effects.py` : Vérification des statistiques après traitement
4. `test_dynamic_display.py` : Test de l'affichage dynamique des descriptions

## Conclusion

✅ Mission accomplie : 85 sublimations ont été enrichies avec des `baseEffect` et des descriptions dynamiques, permettant un affichage calculé selon le niveau. Le système est maintenant cohérent avec le format établi par la sublimation "Abandon".
