# Résumé des Mises à Jour - BaseEffects des Sublimations

Date: 2025-12-05

## Vue d'ensemble

Deux traitements successifs ont été effectués pour enrichir les sublimations standard (non-épiques/reliques) avec des `baseEffect` et des descriptions dynamiques.

## Statistiques Finales

### Avant les traitements
- **Total sublimations**: 230
- **Sublimations standard**: 151
- **Avec baseEffect**: 20 (13.2%)
- **Sans baseEffect**: 131 (86.8%)

### Après les traitements
- **Total sublimations**: 230
- **Sublimations standard**: 151
- **Avec baseEffect**: 114 (75.5%) ✅
- **Sans baseEffect**: 37 (24.5%)

**Progression**: +94 sublimations traitées (+62.3%)

---

## Traitement 1 : Pourcentages Simples (-9% à 9%)

### Objectif
Traiter les sublimations avec des pourcentages compris entre -9% et 9%.

### Résultats
- **Sublimations traitées**: 85
- **Format**: `{"baseValue": X, "pas": X}` où X est le pourcentage

### Exemples

#### Acribie (ID: 31621)
- **Avant**: `2 % Dommages infligés aux cibles à 5 cases ou plus.`
- **Après**: `${0} % Dommages infligés aux cibles à 5 cases ou plus.`
- **BaseEffect**: `[{"baseValue": 2, "pas": 2}]`
- **Calcul**: 
  - Niveau 1: 2%
  - Niveau 6: 12%

#### Accumulation (ID: 30752)
- **Avant**: `-20% Soins réalisés. Chaque tour passé sans soigner : 5% Soins réalisés (max 40%).`
- **Après**: `-20% Soins réalisés. Chaque tour passé sans soigner : ${0} % Soins réalisés (max 40%).`
- **BaseEffect**: `[{"baseValue": 5, "pas": 5}]`
- **Calcul**:
  - Niveau 1: 5%
  - Niveau 4: 20%

### Formule
```
valeur_affichée = baseValue + (niveau - 1) × pas
```

---

## Traitement 2 : Pourcentages du Niveau

### Objectif
Traiter les sublimations avec des descriptions du type "X% du niveau".

### Résultats
- **Sublimations traitées**: 9
- **Format**: `{"baseValue": X, "pas": X}` où X est le pourcentage du niveau

### Exemples

#### Interception (ID: 30967)
- **Avant**: `En début de combat : 50% du niveau en Tacle.`
- **Après**: `En début de combat : ${0} en Tacle.`
- **BaseEffect**: `[{"baseValue": 50, "pas": 50}]`
- **Calcul**:
  - Niveau 1: 50 (50% × 1)
  - Niveau 6: 300 (50% × 6)

#### Muraille (ID: 28873)
- **Avant**: `En début de combat, 150 % du niveau en Armure.`
- **Après**: `En début de combat, ${0} en Armure.`
- **BaseEffect**: `[{"baseValue": 150, "pas": 150}]`
- **Calcul**:
  - Niveau 1: 150 (150% × 1)
  - Niveau 4: 600 (150% × 4)

#### Solidité (ID: 27120)
- **Avant**: `Réduit les dommages directs reçus supérieurs à 20 % des PV max de 400 % du niveau (une fois par tour de table).`
- **Après**: `Réduit les dommages directs reçus supérieurs à 20 % des PV max de ${0} (une fois par tour de table).`
- **BaseEffect**: `[{"baseValue": 400, "pas": 400}]`
- **Calcul**:
  - Niveau 1: 400
  - Niveau 2: 800

### Formule
```
valeur_affichée = baseValue + (niveau - 1) × pas = pourcentage × niveau
```

---

## Répartition par Catégorie

### 1. Pourcentages simples: 93 sublimations
- Pourcentages entre -9% et 9%
- Évolution linéaire par niveau
- Exemples: Acribie, Altruisme, Ambition

### 2. Pourcentages du niveau: 9 sublimations
- Valeur dépendant du niveau de la sublimation
- Multiplication par le niveau
- Exemples: Interception, Muraille, Solidité

### 3. Autres avec baseEffect: 12 sublimations
- Traitements spéciaux ou existants
- Exemples: Arcanes, Carapace sanguine

### 4. Sans baseEffect: 37 sublimations
- Effets trop complexes pour automatisation
- Nécessitent traitement manuel
- Exemples: Agilité vitale, Détermination

---

## Système de Placeholders

Les descriptions utilisent maintenant des placeholders dynamiques:
- `${0}` : Premier effet
- `${1}` : Deuxième effet
- etc.

### Avantages
1. **Cohérence**: Format uniforme pour toutes les sublimations
2. **Multilingue**: Fonctionne dans les 4 langues (FR, EN, ES, PT)
3. **Maintenance**: Facile de modifier la progression
4. **Affichage**: Calcul automatique selon le niveau

### Exemple de Calcul en TypeScript/JavaScript
```typescript
function calculateEffectValue(baseEffect: {baseValue: number, pas: number}, level: number): number {
  return baseEffect.baseValue + (level - 1) * baseEffect.pas;
}

function formatDescription(description: string, baseEffects: any[], level: number): string {
  let result = description;
  baseEffects.forEach((effect, index) => {
    const value = calculateEffectValue(effect, level);
    // Ajouter le signe + pour les valeurs positives
    const formatted = value > 0 ? `+${value}` : `${value}`;
    result = result.replace(`\${${index}}`, formatted);
  });
  return result;
}
```

---

## Fichiers Créés

### Scripts de Traitement
1. `analyze_sublis.py` - Analyse des sublimations avec pourcentages simples
2. `fill_small_percent_base_effects.py` - Traitement automatique (pourcentages simples)
3. `analyze_percent_level.py` - Analyse des sublimations "% du niveau"
4. `fill_percent_level_base_effects.py` - Traitement automatique (% du niveau)

### Scripts de Vérification
5. `verify_base_effects.py` - Statistiques des baseEffect
6. `test_dynamic_display.py` - Test affichage dynamique (pourcentages simples)
7. `test_percent_level_display.py` - Test affichage dynamique (% du niveau)
8. `check_doublons.py` - Vérification des doublons
9. `rapport_final_baseeffect.py` - Génération du rapport final

### Documentation
10. `RAPPORT_BASE_EFFECTS.md` - Documentation du traitement 1
11. `RAPPORT_PERCENT_NIVEAU.md` - Documentation du traitement 2
12. `RESUME_FINAL_BASEEFFECTS.md` - Ce document (résumé global)

---

## Prochaines Étapes

Les 37 sublimations restantes sans `baseEffect` nécessitent une analyse manuelle car elles présentent des cas particuliers:

1. **Effets conditionnels complexes**
   - Exemple: "En début de tour, si les PV sont supérieurs à 90% : 1 PM"

2. **Valeurs fixes non-pourcentages**
   - Exemple: "5 Résistance critique"

3. **Progressions non-linéaires**
   - Exemple: "Réduit de 1 la prochaine perte (+ une perte tous les 2 niveaux)"

4. **Pourcentages élevés (> 9%)**
   - Déjà traités dans un autre contexte

---

## Conclusion

✅ **94 sublimations** ont été enrichies avec succès avec des `baseEffect` et des descriptions dynamiques, portant le taux de couverture de **13.2% à 75.5%** pour les sublimations standard.

Le système est maintenant cohérent, maintenable et permet un affichage dynamique selon le niveau des sublimations dans l'interface utilisateur.

---

**Fichier modifié**: `public/sublimations.json`
