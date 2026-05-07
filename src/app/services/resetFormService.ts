import { inject, Injectable } from "@angular/core";
import { ItemLevelFormService } from "./form-signal/itemLevelFormService";
import { ItemTypeFormServices } from "./form-signal/itemTypeFormServices";
import { MaitrisesFormService } from "./form-signal/maitrisesFormService";
import { RareteItemFormServices } from "./form-signal/rareteItemFormService";
import { SearchItemNameSignalFormService } from "./form-signal/searchItemNameSignalFormService";
import { SortChoiceFormService } from "./form-signal/sortChoiceFormService";
import { MajorPresentFormService } from "./form-signal/majorPresentFormService";
import { ResistancesFormService } from "./form-signal/resistancesFormService";
import { ModifierMecanismFormService } from "./form-signal/modifierElemMaitrisesFormService";
import { OnlyNoSecondaryFormService } from "./form-signal/onlyNoSecondaryFormService";
import { OnlyNoElemFormService } from "./form-signal/onlyNoElemFormService";
import { ReverseFormService } from "./form-signal/reverseFormService";
import { ObtentionFormService } from "./form-signal/obtentionFormService";

@Injectable({ providedIn: 'root' })
export class ResetFormService {

    private readonly itemLevelFormService = inject(ItemLevelFormService);
    private readonly itemTypeFormServices = inject(ItemTypeFormServices);
    private readonly maitrisesFormService = inject(MaitrisesFormService);
    private readonly majorPresentFormService = inject(MajorPresentFormService);
    private readonly modifierElemMaitrisesFormService = inject(ModifierMecanismFormService);
    private readonly onlyNoElemFormService = inject(OnlyNoElemFormService);
    private readonly onlyNoSecondaryFormService = inject(OnlyNoSecondaryFormService);
    private readonly rareteItemFormServices = inject(RareteItemFormServices);
    private readonly resistancesFormService = inject(ResistancesFormService);
    private readonly searchItemNameFormService = inject(SearchItemNameSignalFormService);
    private readonly sortChoiceFormService = inject(SortChoiceFormService);
    private readonly reverseFormService = inject(ReverseFormService);
    private readonly dropCraftableFormService = inject(ObtentionFormService);

    public resetAllForms(): void {
        this.itemLevelFormService.setDefaultValue();
        this.itemTypeFormServices.setDefaultValue();
        this.maitrisesFormService.setDefaultValue();
        this.majorPresentFormService.setDefaultValue();
        this.modifierElemMaitrisesFormService.setDefaultValue();
        this.onlyNoElemFormService.setDefaultValue();
        this.onlyNoSecondaryFormService.setDefaultValue();
        this.rareteItemFormServices.setDefaultValue();
        this.resistancesFormService.setDefaultValue();
        this.searchItemNameFormService.setDefaultValue();
        this.sortChoiceFormService.setDefaultValue();
        this.reverseFormService.setDefaultValue();
        this.dropCraftableFormService.setDefaultValue();
    }
}