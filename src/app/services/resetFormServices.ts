import { Injectable } from "@angular/core";
import { CraftableChoiceFormService } from "./form/craftableChoiceFormService";
import { ItemLevelFormService } from "./form/itemLevelFormService";
import { ItemTypeFormServices } from "./form/itemTypeFormServices";
import { MaitrisesFormService } from "./form/maitrisesFormService";
import { RareteItemFormServices } from "./form/rareteItemFormService";
import { SearchItemNameFormService } from "./form/searchItemNameFormService";
import { SortChoiceFormService } from "./form/sortChoiceFormService";
import { MajorPresentFormService } from "./form/majorPresentFormService";
import { ResistancesFormService } from "./form/resistancesFormService";
import { ModifierElemMaitrisesFormService } from "./form/modifierElemMaitrisesFormService";

@Injectable({providedIn: 'root'})
export class ResetFormServices {
  constructor(
    private craftableChoiceFormService: CraftableChoiceFormService,
    private itemLevelFormService: ItemLevelFormService,
    private itemTypeFormServices: ItemTypeFormServices,
    private maitrisesFormService: MaitrisesFormService,
    private majorPresentFormService: MajorPresentFormService,
    private modifierElemMaitrisesFormService: ModifierElemMaitrisesFormService,
    private rareteItemFormServices: RareteItemFormServices,
    private resistancesFormService: ResistancesFormService,
    private searchItemNameFormService: SearchItemNameFormService,
    private sortChoiceFormService: SortChoiceFormService,
  ) {}

    public resetAllForms(): void {
        this.craftableChoiceFormService.setDefaultValue();
        this.itemLevelFormService.setDefaultValue();
        this.itemTypeFormServices.setDefaultValue();
        this.maitrisesFormService.setDefaultValue();
        this.majorPresentFormService.setDefaultValue();
        this.modifierElemMaitrisesFormService.setDefaultValue();
        this.rareteItemFormServices.setDefaultValue();
        this.resistancesFormService.setDefaultValue();
        this.searchItemNameFormService.setDefaultValue();
        this.sortChoiceFormService.setDefaultValue();
    }
}