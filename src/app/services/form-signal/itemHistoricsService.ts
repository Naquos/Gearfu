import { computed, inject, Injectable, signal } from "@angular/core";
import { BehaviorSubject, distinctUntilChanged, tap } from "rxjs";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractSignalFormService } from "./abstractSignalFormService";
import { ItemChooseService } from "../itemChooseService";

interface ItemHistoricsModel {
    historics: string[];
}

@Injectable({ providedIn: 'root' })
export class ItemHistoricsService extends AbstractSignalFormService<ItemHistoricsModel> {
    public static readonly DEFAULT_VALUE: string[] = [];
    private readonly itemChooseService = inject(ItemChooseService);
    private static readonly MAX_HISTORICS = 10;

    private readonly historics = new BehaviorSubject<string[]>(ItemHistoricsService.DEFAULT_VALUE);
    public readonly historics$ = this.historics.asObservable().pipe(distinctUntilChanged());

    protected readonly keyEnum = KeyEnum.KEY_HISTORICS;
    protected readonly model = signal<ItemHistoricsModel>({ historics: ItemHistoricsService.DEFAULT_VALUE });

    public readonly currentValue = computed(() => this.model().historics);
    private notSaveHistorics = false;

    constructor() {
        super();
        this.init();
        this.itemChooseService.idItems$.pipe(tap(idItems => this.addHistoric(idItems))).subscribe();
    }

    public changeNotSaveHistorics(value: boolean): void {
        this.notSaveHistorics = value;
    }

    private addHistoric(idItems: string): void {
        if (this.notSaveHistorics) {
            return;
        }
        if (idItems.length > 0) {
            const alreadyExists = this.historics.getValue().some(existing => existing === idItems);
            if (alreadyExists) {
                return;
            }
            const currentHistorics = this.historics.getValue();
            if (currentHistorics.length >= ItemHistoricsService.MAX_HISTORICS) {
                currentHistorics.shift();
            }
            const newHistorics = [...currentHistorics, idItems];
            this.historics.next(this.normalizeStoredValue({ historics: newHistorics }));
            this.setValue({ historics: newHistorics });
        }
    }

    public applyHistoric(historic: string): void {
        this.notSaveHistorics = true;
        this.itemChooseService.setIdItemsFromBuild(historic);
        this.notSaveHistorics = false;
        this.addHistoric(historic);
    }

    protected override handleChanges(value: ItemHistoricsModel): void {
        this.historics.next(value.historics);
    }

    public override setValue(value: ItemHistoricsModel | null): void {
        const normalizedValue = this.normalizeStoredValue(value).filter(x => x.length > 0);
        this.model.set({ historics: normalizedValue });
    }

    public override setDefaultValue(): void {
        this.model.set({ historics: ItemHistoricsService.DEFAULT_VALUE });
    }

    public getValue(): string[] {
        return this.historics.getValue();
    }

    private normalizeStoredValue(value: ItemHistoricsModel | null): string[] {
        if (value && typeof value === 'object') {
            const raw = value as unknown as Record<string, unknown>;
            const candidate = raw['historics'] ?? raw['value'];
            if (Array.isArray(candidate) && candidate.every(item => typeof item === 'string')) {
                return candidate as string[];
            }
        }
        return ItemHistoricsService.DEFAULT_VALUE;
    }
}

