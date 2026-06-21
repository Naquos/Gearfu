import { computed, Injectable, signal } from "@angular/core";
import { form } from "@angular/forms/signals";
import { BehaviorSubject } from "rxjs";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractSignalFormService } from "./abstractSignalFormService";

interface ItemFavorisModel {
    ids: number[];
}

@Injectable({ providedIn: 'root' })
export class ItemFavorisFormService extends AbstractSignalFormService<ItemFavorisModel> {
    public static readonly DEFAULT_VALUE: number[] = [];

    protected readonly keyEnum = KeyEnum.KEY_ITEMS_FAVORIS;
    protected readonly model = signal<ItemFavorisModel>({ ids: ItemFavorisFormService.DEFAULT_VALUE });

    public readonly form = form(this.model);
    public readonly currentValue = computed(() => this.model().ids);

    private readonly ids = new BehaviorSubject<number[]>(ItemFavorisFormService.DEFAULT_VALUE);
    public readonly ids$ = this.ids.asObservable();

    constructor() {
        super();
        this.init();
    }

    protected override handleChanges(value: ItemFavorisModel): void {
        this.ids.next(value.ids);
    }

    public override setValue(value: number[] | ItemFavorisModel | null): void {
        if (Array.isArray(value)) {
            this.model.set({ ids: value });
            return;
        }
        this.model.set({ ids: value?.ids ?? ItemFavorisFormService.DEFAULT_VALUE });
    }

    public override setDefaultValue(): void {
        this.model.set({ ids: ItemFavorisFormService.DEFAULT_VALUE });
    }

    public hasItem(id: number): boolean {
        return this.currentValue().includes(id);
    }

    public addItem(id: number): void {
        if (!this.hasItem(id)) {
            this.model.set({ ids: [...this.currentValue(), id] });
        }
    }

    public removeItem(id: number): void {
        if (this.hasItem(id)) {
            this.model.set({ ids: this.currentValue().filter(itemId => itemId !== id) });
        }
    }
}
