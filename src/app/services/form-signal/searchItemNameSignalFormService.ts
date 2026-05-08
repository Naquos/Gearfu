import { computed, inject, Injectable, signal } from "@angular/core";
import { form } from "@angular/forms/signals";
import { ItemTypeServices } from "../data/ItemTypesServices";
import { ItemLevelFormService } from "../form-signal/itemLevelFormService";
import { ItemTypeFormServices } from "./itemTypeFormServices";
import { RareteItemFormServices } from "./rareteItemFormService";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractSignalFormService } from "./abstractSignalFormService";
import { BehaviorSubject } from "rxjs";
import { Item } from "../../models/data/item";
import { MajorPresentFormService } from "./majorPresentFormService";

interface SearchItemNameModel {
    search: string;
}

@Injectable({ providedIn: 'root' })
export class SearchItemNameSignalFormService extends AbstractSignalFormService<SearchItemNameModel> {

    private readonly rareteItemFormServices = inject(RareteItemFormServices);
    private readonly itemTypeFormServices = inject(ItemTypeFormServices);
    private readonly itemTypeService = inject(ItemTypeServices);
    private readonly itemLevelFormService = inject(ItemLevelFormService);
    private readonly majorPresentFormService = inject(MajorPresentFormService);

    public static readonly DEFAULT_VALUE = "";

    private readonly itemName = new BehaviorSubject<string>("");
    public readonly itemName$ = this.itemName.asObservable();

    protected readonly keyEnum = KeyEnum.KEY_SEARCH_ITEM_NAME;
    protected readonly model = signal<SearchItemNameModel>({ search: SearchItemNameSignalFormService.DEFAULT_VALUE });
    public readonly form = form(this.model);
    public readonly searchValue = computed(() => this.model().search);

    constructor() {
        super();
        this.init();
    }

    protected override handleChanges(value: SearchItemNameModel): void {
        this.itemName.next(value.search ?? SearchItemNameSignalFormService.DEFAULT_VALUE);
    }

    public override setValue(value: SearchItemNameModel | null): void {
        this.model.set({ search: this.normalizeStoredValue(value) });
    }

    private normalizeStoredValue(value: SearchItemNameModel | null): string {
        const raw = value as unknown;

        if (typeof raw === 'string') {
            return raw;
        }

        if (typeof raw === 'object' && raw !== null && 'search' in raw) {
            const maybeSearch = (raw as { search?: unknown }).search;
            if (typeof maybeSearch === 'string') {
                return maybeSearch;
            }
        }

        return SearchItemNameSignalFormService.DEFAULT_VALUE;
    }

    public setDefaultValue(): void {
        this.model.set({ search: SearchItemNameSignalFormService.DEFAULT_VALUE });
    }

    public setFilter(item: Item): void {
        this.rareteItemFormServices.setDefaultValue();
        this.majorPresentFormService.setDefaultValue();
        const itemType = this.itemTypeService.getItemType(item.itemTypeId);
        if (!itemType) { return; }
        this.itemTypeFormServices.setItemType(itemType);

        if (item.level <= 20) {
            this.itemLevelFormService.setValue({ levelMin: '0', levelMax: '20' });
        } else {
            const temp = Math.ceil((item.level - 20) / 15);
            this.itemLevelFormService.setValue({
                levelMin: String((temp - 1) * 15 + 20 + 1),
                levelMax: String(temp * 15 + 20)
            });
        }
    }
}
