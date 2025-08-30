import { inject, Injectable } from "@angular/core";
import { ItemLevelFormService } from "./form/itemLevelFormService";
import { ItemTypeFormServices } from "./form/itemTypeFormServices";
import { MaitrisesFormService } from "./form/maitrisesFormService";
import { RareteItemFormServices } from "./form/rareteItemFormService";
import { SearchItemNameFormService } from "./form/searchItemNameFormService";
import { SortChoiceFormService } from "./form/sortChoiceFormService";
import { MajorPresentFormService } from "./form/majorPresentFormService";
import { ResistancesFormService } from "./form/resistancesFormService";
import { ModifierMecanismFormService } from "./form/modifierElemMaitrisesFormService";
import { OnlyNoSecondaryFormService } from "./form/onlyNoSecondaryFormService";
import { OnlyNoElemFormService } from "./form/onlyNoElemFormService";
import { ReverseFormService } from "./form/reverseFormService";

@Injectable({providedIn: 'root'})
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
    private readonly searchItemNameFormService = inject(SearchItemNameFormService);
    private readonly sortChoiceFormService = inject(SortChoiceFormService);
    private readonly reverseFormService = inject(ReverseFormService);

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
    }
}