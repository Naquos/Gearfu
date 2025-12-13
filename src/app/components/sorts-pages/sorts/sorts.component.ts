import { Component, inject, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SortService } from '../../../services/data/sortService';
import { LazyImageDirective } from '../../../directives/lazy-image.directive';
import { ImageService } from '../../../services/imageService';
import { DescriptionSort } from '../../../models/data/descriptionSort';
import { ClasseFormService } from '../../../services/form/classeFormService';
import { SortFormService } from '../../../services/form/sortFormService';
import { toSignal } from '@angular/core/rxjs-interop';
import { IdActionsEnum } from '../../../models/enum/idActionsEnum';
import { SpellEffectService } from '../../../services/spellEffectService';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from "@angular/material/slider";
import { LevelFormService } from '../../../services/form/levelFormService';
import { RecapStatsService } from '../../../services/recapStatsService';
import { filter, map } from 'rxjs';

type TypeSort = 'NEUTRE' | 'PASSIF';
type EffectDisplay = 'NORMAL' | 'CRITIQUE';

@Component({
  selector: 'app-sorts',
  imports: [TranslateModule, MatIconModule, MatTooltipModule, LazyImageDirective, FormsModule, MatSliderModule],
  templateUrl: './sorts.component.html',
  styleUrl: './sorts.component.scss'
})
export class SortsComponent {

  private readonly translateService = inject(TranslateService);
  private readonly classeFormService = inject(ClasseFormService);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly levelFormService = inject(LevelFormService);
  private readonly recapStatsService = inject(RecapStatsService);

  protected readonly sortService = inject(SortService);
  protected readonly imageService = inject(ImageService);
  protected readonly sortFormService = inject(SortFormService);
  protected readonly spellEffectService = inject(SpellEffectService);

  protected readonly IdActionsEnum = IdActionsEnum;
  protected readonly sortSelected = signal<DescriptionSort | undefined>(undefined)
  protected readonly typeSortSelected = signal<TypeSort | undefined>(undefined);
  protected readonly codeBuild = toSignal(this.sortFormService.codeBuild$, {
    initialValue: ''
  });
  protected readonly effectDisplay = signal<EffectDisplay>('NORMAL');
  protected readonly spellLevel = signal<number>(246); // Niveau par défaut: 246
  protected readonly level = toSignal(this.levelFormService.level$, {
    initialValue: 246
  });
  
  private currentDragSource: 'list' | 'equipped' | null = null;

  protected readonly sortNeutres = toSignal(this.sortFormService.sortNeutres$, {
    initialValue: []
  });

  protected readonly sortPassifs = toSignal(this.sortFormService.sortPassifs$, {
    initialValue: []
  });

  protected readonly PO = toSignal(this.recapStatsService.recap$.pipe(
    map(x => x.filter(x => x.id === IdActionsEnum.PORTEE)[0]),
    filter(x => x !== undefined),
    map(x => x.value)
  ), {
    initialValue: 0
  });



  constructor() {
    this.classeFormService.classe$.subscribe(classe => {
      if (classe) {
        this.sortSelected.set(undefined);
        this.typeSortSelected.set(undefined);
      }
    });
    this.levelFormService.level$.subscribe(level => {
      if(Number.isNaN(Number.parseInt(`${level}`))) {
        this.spellLevel.set(1);
        return;
      }
      const value = Number.parseInt(`${level}`) > 245 ? 245 : Number.parseInt(`${level}`);
      this.spellLevel.set(value + 1);
    });
  }

  protected displayLevelSelector(): (value: number) => string {
    return (value: number) => `${value - 1}`;
  }


  protected selectSort(sort: DescriptionSort, typeSort: TypeSort): void {
    this.sortSelected.set(sort);
    this.typeSortSelected.set(typeSort);
  }

  protected selectSortById(sortId: number, typeSort: TypeSort): void {
    if(typeSort === 'NEUTRE') {
      const sort = this.sortService.getDescriptionSortElementaireById(sortId) ||
        this.sortService.getDescriptionSortActifById(sortId);
      if (sort) {
        this.sortSelected.set(sort);
        this.typeSortSelected.set('NEUTRE');
      }
    } else {
      const sort = this.sortService.getDescriptionSortPassifById(sortId);
      if (sort) {
        this.sortSelected.set(sort);
        this.typeSortSelected.set('PASSIF');
      }
    }
  }

  protected copyToClipboards() {
    navigator.clipboard.writeText(this.codeBuild()).then();
  }

  protected getSortName(sort: DescriptionSort): string {
    return sort.name[this.translateService.currentLang as keyof typeof sort.name];
  }

  protected getSortDescription(sort: DescriptionSort): string {
    return sort.description[this.translateService.currentLang as keyof typeof sort.description];
  }

  protected addSortToBuild(sort: DescriptionSort, typeSort: TypeSort): void {
    if (typeSort === 'NEUTRE') {
      this.sortFormService.addSortNeutre(sort.gfxId);
    } else if (typeSort === 'PASSIF') {
      this.sortFormService.addSortPassif(sort.gfxId);
    }
  }

  protected removeSortFromBuild(typeSort: TypeSort, index: number): void {
    if (typeSort === 'NEUTRE') {
      this.sortFormService.removeSortNeutreAt(index);
    } else if (typeSort === 'PASSIF') {
      this.sortFormService.removeSortPassifAt(index);
    }
  }

  // Drag and Drop handlers
  protected onDragStart(event: DragEvent, sort: DescriptionSort, typeSort: TypeSort): void {
    this.currentDragSource = 'list';
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = 'copy';
      event.dataTransfer.setData('sortId', sort.gfxId.toString());
      event.dataTransfer.setData('typeSort', typeSort);
      event.dataTransfer.setData('source', 'list');
    }
  }

  protected onDragStartEquipped(event: DragEvent, sortId: number, typeSort: TypeSort, index: number): void {
    if (sortId === 0) {
      event.preventDefault();
      return;
    }
    this.currentDragSource = 'equipped';
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('sortId', sortId.toString());
      event.dataTransfer.setData('typeSort', typeSort);
      event.dataTransfer.setData('source', 'equipped');
      event.dataTransfer.setData('sourceIndex', index.toString());
    }
  }

  protected onDragOver(event: DragEvent): void {
    event.preventDefault();
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = this.currentDragSource === 'equipped' ? 'move' : 'copy';
    }
  }

  protected onDrop(event: DragEvent, typeSort: TypeSort, index: number): void {
    event.preventDefault();
    if (event.dataTransfer) {
      const sortId = parseInt(event.dataTransfer.getData('sortId'), 10);
      const draggedTypeSort = event.dataTransfer.getData('typeSort') as TypeSort;
      const source = event.dataTransfer.getData('source');
      
      if (draggedTypeSort === typeSort) {
        if (source === 'equipped') {
          // Réorganisation des sorts équipés
          const sourceIndex = parseInt(event.dataTransfer.getData('sourceIndex'), 10);
          if (typeSort === 'NEUTRE') {
            this.sortFormService.swapSortNeutre(sourceIndex, index);
          } else if (typeSort === 'PASSIF') {
            this.sortFormService.swapSortPassif(sourceIndex, index);
          }
        } else {
          // Ajout depuis la liste
          if (typeSort === 'NEUTRE') {
            this.sortFormService.addSortNeutreAt(index, sortId);
          } else if (typeSort === 'PASSIF') {
            this.sortFormService.addSortPassifAt(index, sortId);
          }
        }
      }
    }
    this.currentDragSource = null;
  }

  protected getEffect(): SafeHtml[] {
    if(!this.sortSelected()) {
      return [];
    }
    
    const sort = this.sortSelected()!;
    const lang = this.translateService.currentLang as 'fr' | 'en' | 'es' | 'pt';
    const level = this.spellLevel() - 1; // Les index commencent à 0
    
    // Choisir le bon effet selon le mode d'affichage
    const isNormal = this.effectDisplay() === 'NORMAL';
    const template = isNormal ? sort.effect_normal[lang] : sort.effect_critical[lang];
    const rleData = isNormal ? sort.normalEffect[lang] : sort.criticalEffect[lang];
    
    // Si pas de données RLE (sorts passifs sans effet critique par exemple)
    if (!rleData || rleData.length === 0) {
      const lines = template.split('\n').map(x => x.charAt(0).toUpperCase() + x.slice(1)) || [];
      return lines.map(line => this.sanitizer.bypassSecurityTrustHtml(line));
    }
    
    // Générer l'effet avec le niveau actuel
    const formattedEffect = this.spellEffectService.getFormattedEffect(template, rleData, level);
    
    // Diviser par lignes et capitaliser
    const lines = formattedEffect.split('\n').map(x => x.charAt(0).toUpperCase() + x.slice(1)) || [];
    return lines.map(line => this.sanitizer.bypassSecurityTrustHtml(line));
  }
}
