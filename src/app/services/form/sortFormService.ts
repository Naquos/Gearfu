import { inject, Injectable } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { BehaviorSubject, distinctUntilChanged } from "rxjs";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractFormService, TypedControls } from "./abstractFormService";
import { ClasseFormService } from "./classeFormService";
import { UrlServices } from "../urlServices";
import { LevelFormService } from "./levelFormService";
import { SortService } from "../data/sortService";

export interface SortForm {
    sortNeutres: number[];
    sortPassifs: number[];
}

@Injectable({providedIn: 'root'})
export class SortFormService extends AbstractFormService<FormGroup<TypedControls<SortForm>>> {
  private readonly classeFormService = inject(ClasseFormService);
  private readonly urlServices = inject(UrlServices);
  private readonly levelFormService = inject(LevelFormService);
  private readonly sortService = inject(SortService);

  public static readonly DEFAULT_SORT_NEUTRE: number[] = [0,0,0,0,0,0,0,0,0,0,0,0];
  public static readonly DEFAULT_SORT_PASSIF: number[] = [0,0,0,0,0,0];

  private readonly sortNeutres = new BehaviorSubject<number[]>(SortFormService.DEFAULT_SORT_NEUTRE);
  public readonly sortNeutres$ = this.sortNeutres.asObservable();

  private readonly sortPassifs = new BehaviorSubject<number[]>(SortFormService.DEFAULT_SORT_PASSIF);
  public readonly sortPassifs$ = this.sortPassifs.asObservable();

  private readonly codeBuild = new BehaviorSubject<string>('');
  public readonly codeBuild$ = this.codeBuild.asObservable();

  private firstLoad = true;

  public readonly unlockedEmplacementSortNeutre = [0,0,0,0,0,0,10,20,30,40,60,80];
  public readonly unlockedEmplacementSortPassif = [10,30,50,100,150,200];

  protected readonly keyEnum = KeyEnum.KEY_SORT;
  public readonly form = new FormGroup<TypedControls<SortForm>>({
        sortNeutres: new FormControl(SortFormService.DEFAULT_SORT_NEUTRE, { nonNullable: true }),
        sortPassifs: new FormControl(SortFormService.DEFAULT_SORT_PASSIF, { nonNullable: true })
      });

  constructor() {
    super();
    const codeSort = this.urlServices.getSortsFromUrl();
    this.init();
    this.classeFormService.classe$.pipe(distinctUntilChanged()).subscribe(() => {
      if (!this.firstLoad) {
        this.setDefaultValue();
      } else {
        if (codeSort) {
          this.decodeAndSaveCodeBuild(codeSort);
        }
      }
      this.firstLoad = false;
    });
  }

  protected override handleChanges(value: SortForm): void {
    this.sortNeutres.next(value.sortNeutres ?? SortFormService.DEFAULT_SORT_NEUTRE);
    this.sortPassifs.next(value.sortPassifs ?? SortFormService.DEFAULT_SORT_PASSIF);
    const codeBuild = this.generateCodeBuild(value);
    this.codeBuild.next(codeBuild);
    this.urlServices.setSortsInUrl(codeBuild);
  }

  public override setValue(value: SortForm | null): void {
    this.form.setValue({
      sortNeutres: value?.sortNeutres ?? SortFormService.DEFAULT_SORT_NEUTRE,
      sortPassifs: value?.sortPassifs ?? SortFormService.DEFAULT_SORT_PASSIF
    });
  }

  private generateCodeBuild(value: SortForm): string {
    const neutres = value.sortNeutres?.join('-') || '';
    const passifs = value.sortPassifs?.join('-') || '';
    return `${neutres}-${passifs}`;
  }

  public decodeAndSaveCodeBuild(codeBuild: string): void {
    const parts = codeBuild.split('-');
    const neutres = parts.slice(0, 12).map(part => parseInt(part, 10));
    const passifs = parts.slice(12).map(part => parseInt(part, 10));
    this.setValue({
      sortNeutres: neutres,
      sortPassifs: passifs
    });
  }

  private sortAlreadySet(sortId: number): boolean {
    const neutres = this.sortNeutres.getValue();
    const passifs = this.sortPassifs.getValue();
    return neutres.includes(sortId) || passifs.includes(sortId);
  }
  
  public override setDefaultValue(): void {
    this.form.setValue({
      sortNeutres:[...SortFormService.DEFAULT_SORT_NEUTRE],
      sortPassifs: [...SortFormService.DEFAULT_SORT_PASSIF]
    });
  }

  public addSortNeutreAt(index: number, sortId: number): void {
    if (this.sortAlreadySet(sortId)) {
      this.removeSortNeutre(sortId);
    }
    const sort = this.sortService.getDescriptionSortActifById(sortId) || this.sortService.getDescriptionSortElementaireById(sortId);
    if(!sort || this.levelFormService.getValue() < sort.levelUnlock) {
      return;
    }
    const current = this.sortNeutres.getValue();
    if(this.unlockedEmplacementSortNeutre[index] > this.levelFormService.getValue()) {
      return;
    }
    current[index] = sortId;
    this.form.controls.sortNeutres.setValue(current);
  }

  public addSortNeutre(sortId: number): void {
    if (this.sortAlreadySet(sortId)) {
      return;
    }
    
    const sort = this.sortService.getDescriptionSortActifById(sortId) || this.sortService.getDescriptionSortElementaireById(sortId);
    if(!sort || this.levelFormService.getValue() < sort.levelUnlock) {
      return;
    }

    const current = this.sortNeutres.getValue();
    const emptyIndex = current.indexOf(0);
    if (emptyIndex !== -1 && this.unlockedEmplacementSortNeutre[emptyIndex] <= this.levelFormService.getValue()) {
      current[emptyIndex] = sortId;
      this.form.controls.sortNeutres.setValue(current);
    }
  }

  public addSortPassifAt(index: number, sortId: number): void {
    if (this.sortAlreadySet(sortId)) {
      this.removeSortPassif(sortId);
    }
    
    const sort = this.sortService.getDescriptionSortPassifById(sortId);
    if(!sort || this.levelFormService.getValue() < sort.levelUnlock) {
      return;
    }
    if(this.unlockedEmplacementSortPassif[index] > this.levelFormService.getValue()) {
      return;
    }
    const current = this.sortPassifs.getValue();
    current[index] = sortId;
    this.form.controls.sortPassifs.setValue(current);
  }

  public addSortPassif(sortId: number): void {
    if (this.sortAlreadySet(sortId)) {
      return;
    }
    
    const sort = this.sortService.getDescriptionSortPassifById(sortId);
    if(!sort || this.levelFormService.getValue() < sort.levelUnlock) {
      return;
    }
    const current = this.sortPassifs.getValue();
    const emptyIndex = current.indexOf(0);
    if (emptyIndex !== -1 && this.unlockedEmplacementSortPassif[emptyIndex] <= this.levelFormService.getValue()) {
      current[emptyIndex] = sortId;
      this.form.controls.sortPassifs.setValue(current);
    }
  }

  public removeSortPassif(sortId: number): void {
    const current = this.sortPassifs.getValue();
    const index = current.indexOf(sortId);
    if (index !== -1) {
      current[index] = 0;
      this.form.controls.sortPassifs.setValue(current);
    }
  }

  public removeSortNeutre(sortId: number): void {
    const current = this.sortNeutres.getValue();
    const index = current.indexOf(sortId);
    if (index !== -1) {
      current[index] = 0;
      this.form.controls.sortNeutres.setValue(current);
    }
  }

  public removeSortNeutreAt(index: number): void {
    const current = this.sortNeutres.getValue();
    current[index] = 0;
    this.form.controls.sortNeutres.setValue(current);
  }
  public removeSortPassifAt(index: number): void {
    const current = this.sortPassifs.getValue();
    current[index] = 0;
    this.form.controls.sortPassifs.setValue(current);
  }

  public swapSortNeutre(fromIndex: number, toIndex: number): void {
    const current = [...this.sortNeutres.getValue()];
    const temp = current[fromIndex];
    current[fromIndex] = current[toIndex];
    current[toIndex] = temp;
    this.form.controls.sortNeutres.setValue(current);
  }

  public swapSortPassif(fromIndex: number, toIndex: number): void {
    const current = [...this.sortPassifs.getValue()];
    const temp = current[fromIndex];
    current[fromIndex] = current[toIndex];
    current[toIndex] = temp;
    this.form.controls.sortPassifs.setValue(current);
  }

  public getSortPassifs(): number[] {
    return this.sortPassifs.getValue();
  }
}