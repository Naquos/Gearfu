# Rapport de Mise à Jour - Sublimations "% du niveau"

Date: 2025-12-05

## Objectif
Remplir les `baseEffect` des sublimations non-épiques/reliques qui dépendent d'un pourcentage du niveau de la sublimation.

## Méthode

### 1. Identification des Sublimations
Recherche des descriptions contenant des patterns comme :
- "X% du niveau" (français)
- "X% of the level" (anglais)
- "X% del nivel" (espagnol)
- "X% do nível" (portugais)

**Résultat** : 9 sublimations identifiées

### 2. Format des BaseEffect

Pour une sublimation avec "X% du niveau", la formule est :
```json
"baseEffect": [
  {"baseValue": X, "pas": X}
]
```

**Formule de calcul** : `valeur_affichée = baseValue + (niveau_sublimation - 1) × pas = X × niveau_sublimation`

Exemples :
- **50% du niveau** :
  - Niveau 1 : 50 + (1-1) × 50 = 50
  - Niveau 2 : 50 + (2-1) × 50 = 100
  - Niveau 6 : 50 + (6-1) × 50 = 300

- **150% du niveau** :
  - Niveau 1 : 150 + (1-1) × 150 = 150
  - Niveau 4 : 150 + (4-1) × 150 = 600

## Résultats

### Statistiques
- **Sublimations traitées** : 9
- **Total sublimations non-épiques/reliques avec baseEffect** : 114 (85 + 9 + 20 précédentes)
- **Sublimations non-épiques/reliques sans baseEffect** : 37 (contre 46 avant)

### Liste des Sublimations Traitées

#### 1. Interception (ID: 30967)
- **Original** : `En début de combat : 50% du niveau en Tacle.`
- **Dynamique** : `En début de combat : ${0} en Tacle.`
- **BaseEffect** : `[{"baseValue": 50, "pas": 50}]`
- **LevelMax** : 6
- **Exemple** :
  - Niveau 1 : 50 en Tacle
  - Niveau 6 : 300 en Tacle

#### 2. Interposition (ID: 30970)
- **Original** : `Après avoir taclé un ennemi : 50% du niveau en Armure.`
- **Dynamique** : `Après avoir taclé un ennemi : ${0} en Armure.`
- **BaseEffect** : `[{"baseValue": 50, "pas": 50}]`
- **LevelMax** : 6
- **Exemple** :
  - Niveau 1 : 50 en Armure
  - Niveau 6 : 300 en Armure

#### 3. Muraille (ID: 28873)
- **Original** : `En début de combat, 150 % du niveau en Armure.`
- **Dynamique** : `En début de combat, ${0} en Armure.`
- **BaseEffect** : `[{"baseValue": 150, "pas": 150}]`
- **LevelMax** : 4
- **Exemple** :
  - Niveau 1 : 150 en Armure
  - Niveau 4 : 600 en Armure

#### 4. Propagation (ID: 31637)
- **Original** : `Lorsque le porteur inflige des dommages, une fois par tour : Inflige 10 % du niveau en dommages lumière aux cibles alignées avec la cible.`
- **Dynamique** : `Lorsque le porteur inflige des dommages, une fois par tour : Inflige ${0} en dommages lumière aux cibles alignées avec la cible.`
- **BaseEffect** : `[{"baseValue": 10, "pas": 10}]`
- **LevelMax** : 4
- **Exemple** :
  - Niveau 1 : 10 dommages
  - Niveau 4 : 40 dommages

#### 5. Retour enflammé (ID: 28896)
- **Original** : `Gagne 100 % du niveau en Enflammé en tuant un ennemi (1 activation par tour).`
- **Dynamique** : `Gagne ${0} en Enflammé en tuant un ennemi (1 activation par tour).`
- **BaseEffect** : `[{"baseValue": 100, "pas": 100}]`
- **LevelMax** : 2
- **Exemple** :
  - Niveau 1 : 100 Enflammé
  - Niveau 2 : 200 Enflammé

#### 6. Rupture violente (ID: 31663)
- **Original** : `Pendant son tour, lorsque le porteur de l'état fait perdre son Armure à un ennemi : Inflige 10 % du niveau en dommages lumières (max 2 fois/tour).`
- **Dynamique** : `Pendant son tour, lorsque le porteur de l'état fait perdre son Armure à un ennemi : Inflige ${0} en dommages lumières (max 2 fois/tour).`
- **BaseEffect** : `[{"baseValue": 10, "pas": 10}]`
- **LevelMax** : 4
- **Exemple** :
  - Niveau 1 : 10 dommages
  - Niveau 4 : 40 dommages

#### 7. Solidité (ID: 27120)
- **Original** : `Réduit les dommages directs reçus supérieurs à 20 % des PV max de 400 % du niveau (une fois par tour de table).`
- **Dynamique** : `Réduit les dommages directs reçus supérieurs à 20 % des PV max de ${0} (une fois par tour de table).`
- **BaseEffect** : `[{"baseValue": 400, "pas": 400}]`
- **LevelMax** : 2
- **Exemple** :
  - Niveau 1 : 400 réduction
  - Niveau 2 : 800 réduction

#### 8. Vol d'Esquive (ID: 28904)
- **Original** : `-10 % Dommages Infligés avec une arme. En infligeant des dommages à un ennemi avec une arme à deux mains : Vole 15 % du niveau en Esquive (1 tour, non-cumulable).`
- **Dynamique** : `-10 % Dommages Infligés avec une arme. En infligeant des dommages à un ennemi avec une arme à deux mains : Vole ${0} en Esquive (1 tour, non-cumulable).`
- **BaseEffect** : `[{"baseValue": 15, "pas": 15}]`
- **LevelMax** : 4
- **Exemple** :
  - Niveau 1 : 15 Esquive
  - Niveau 4 : 60 Esquive

#### 9. Vol de Tacle (ID: 28902)
- **Original** : `-10 % Dommages Infligés avec une arme. En infligeant des dommages à un ennemi avec une arme à deux mains : Vole 15 % du niveau en Tacle (1 tour, non-cumulable).`
- **Dynamique** : `-10 % Dommages Infligés avec une arme. En infligeant des dommages à un ennemi avec une arme à deux mains : Vole ${0} en Tacle (1 tour, non-cumulable).`
- **BaseEffect** : `[{"baseValue": 15, "pas": 15}]`
- **LevelMax** : 4
- **Exemple** :
  - Niveau 1 : 15 Tacle
  - Niveau 4 : 60 Tacle

## Avantages

1. **Cohérence** : Même système de placeholders que les autres sublimations
2. **Calcul automatique** : La valeur est calculée automatiquement selon le niveau
3. **Multilingue** : Fonctionne dans les 4 langues (FR, EN, ES, PT)
4. **Évolutivité** : Facile de modifier la progression en changeant juste les valeurs de baseEffect

## Particularité

Ces sublimations se distinguent des sublimations avec pourcentages simples :
- **Pourcentages simples** (ex: 2%) : La valeur est un pourcentage qui augmente avec le niveau (2%, 4%, 6%...)
- **Pourcentages du niveau** (ex: 50% du niveau) : La valeur est un nombre absolu qui dépend du niveau de la sublimation (50 au niveau 1, 300 au niveau 6)

## Fichiers Modifiés

- `public/sublimations.json` : Mise à jour de 9 sublimations

## Scripts Créés

1. `analyze_percent_level.py` : Identification des sublimations avec "% du niveau"
2. `fill_percent_level_base_effects.py` : Script de traitement automatique
3. `test_percent_level_display.py` : Tests de l'affichage dynamique

## Progression Globale

### Avant ce traitement
- Total sublimations : 230
- Non-épiques/reliques : 151
- Avec baseEffect : 105
- Sans baseEffect : 46

### Après ce traitement
- Total sublimations : 230
- Non-épiques/reliques : 151
- Avec baseEffect : 114 ✅
- Sans baseEffect : 37

**Progrès** : 9 sublimations supplémentaires traitées (19.6% des sublimations restantes)

## Conclusion

✅ Les 9 sublimations avec "% du niveau" ont été converties avec succès en format dynamique. Le système permet maintenant un calcul automatique des valeurs selon le niveau de la sublimation, tout en conservant la cohérence avec le reste du système.
