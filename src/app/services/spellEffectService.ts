import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpellEffectService {
  private imageDict: Record<string, string> = {};

  setImageDictionary(dict: Record<string, string>): void {
    this.imageDict = dict;
  }

  /**
   * Décompresse les données RLE pour obtenir les valeurs d'un niveau spécifique
   * @param rleData Format: [[valeurs, start, end], ...]
   * @param level Niveau du sort (0-245)
   * @returns Les valeurs numériques pour ce niveau
   */
  private decompressRLE(rleData: [string[], string, string][], level: number): string[] {
    for (const [values, start, end] of rleData) {
      if (level >= parseInt(start, 10) && level <= parseInt(end, 10)) {
        return values;
      }
    }
    return [];
  }

  /**
   * Remplace les placeholders {imageKey} par les vraies balises img
   */
  private replaceImagePlaceholders(template: string): string {
    return template.replace(/\{(\w+)\}/g, (match, key) => {
      return this.imageDict[key] || match;
    });
  }

  /**
   * Remplace les placeholders ${0}, ${1}, etc. par les valeurs
   * Si un placeholder n'a pas de valeur correspondante, il est supprimé
   */
  private replaceValuePlaceholders(template: string, values: string[]): string {
    return template.replace(/\$\{(\d+)\}/g, (match, index) => {
      const numIndex = parseInt(index, 10);
      return values[numIndex] !== undefined ? values[numIndex].toString() : '';
    });
  }

  /**
   * Génère l'effet formaté pour un niveau donné
   * @param template Le template avec les placeholders
   * @param rleData Les données compressées RLE
   * @param level Le niveau du sort (0-245)
   * @returns Le texte formaté avec les images et valeurs
   */
  getFormattedEffect(
    template: string,
    rleData: [string[], string, string][],
    level: number
  ): string {
    // 1. Décompresser les valeurs pour ce niveau
    const values = this.decompressRLE(rleData, level);

    // 2. Remplacer les placeholders d'images
    let result = this.replaceImagePlaceholders(template);

    // 3. Remplacer les placeholders de valeurs
    result = this.replaceValuePlaceholders(result, values);

    return result;
  }
}
