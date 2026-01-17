import { Pipe, PipeTransform } from "@angular/core";

// Créer un pipe custom
@Pipe({ name: 'formatNumber' })
export class FormatNumberPipe implements PipeTransform {
  transform(value: number): string {
    return value.toLocaleString('fr-FR');
  }
}