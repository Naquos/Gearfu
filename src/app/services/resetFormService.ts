import { Injectable } from "@angular/core";
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
  constructor(
    private readonly itemLevelFormService: ItemLevelFormService,
    private readonly itemTypeFormServices: ItemTypeFormServices,
    private readonly maitrisesFormService: MaitrisesFormService,
    private readonly majorPresentFormService: MajorPresentFormService,
    private readonly modifierElemMaitrisesFormService: ModifierMecanismFormService,
    private readonly onlyNoElemFormService: OnlyNoElemFormService,
    private readonly onlyNoSecondaryFormService: OnlyNoSecondaryFormService,
    private readonly rareteItemFormServices: RareteItemFormServices,
    private readonly resistancesFormService: ResistancesFormService,
    private readonly searchItemNameFormService: SearchItemNameFormService,
    private readonly sortChoiceFormService: SortChoiceFormService,
    private readonly reverseFormService: ReverseFormService
  ) {}

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