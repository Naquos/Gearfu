import { Component, inject, signal } from '@angular/core';
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

type TypeSort = 'NEUTRE' | 'PASSIF';

@Component({
  selector: 'app-sorts',
  imports: [TranslateModule, MatIconModule, MatTooltipModule, LazyImageDirective],
  templateUrl: './sorts.component.html',
  styleUrl: './sorts.component.scss'
})
export class SortsComponent {

  private readonly translateService = inject(TranslateService);
  private readonly classeFormService = inject(ClasseFormService);
  protected readonly sortService = inject(SortService);
  protected readonly imageService = inject(ImageService);
  protected readonly sortFormService = inject(SortFormService);

  protected readonly sortSelected = signal<DescriptionSort | undefined>(undefined)
  protected readonly typeSortSelected = signal<TypeSort | undefined>(undefined);
  protected readonly codeBuild = toSignal(this.sortFormService.codeBuild$, {
    initialValue: ''
  });
  
  private currentDragSource: 'list' | 'equipped' | null = null;

  protected readonly sortNeutres = toSignal(this.sortFormService.sortNeutres$, {
    initialValue: []
  });

  protected readonly sortPassifs = toSignal(this.sortFormService.sortPassifs$, {
    initialValue: []
  });

  constructor() {
    this.classeFormService.classe$.subscribe(classe => {
      if (classe) {
        this.sortSelected.set(undefined);
        this.typeSortSelected.set(undefined);
      }
    });
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
}
