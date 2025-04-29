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
import { OnlyNoSecondaryFormService } from "./form/onlyNoSecondaryFormService";

@Injectable({providedIn: 'root'})
export class ResetFormService {
  constructor(
    private readonly craftableChoiceFormService: CraftableChoiceFormService,
    private readonly itemLevelFormService: ItemLevelFormService,
    private readonly itemTypeFormServices: ItemTypeFormServices,
    private readonly maitrisesFormService: MaitrisesFormService,
    private readonly majorPresentFormService: MajorPresentFormService,
    private readonly modifierElemMaitrisesFormService: ModifierElemMaitrisesFormService,
    private readonly onlyNoSecondaryFormService: OnlyNoSecondaryFormService,
    private readonly rareteItemFormServices: RareteItemFormServices,
    private readonly resistancesFormService: ResistancesFormService,
    private readonly searchItemNameFormService: SearchItemNameFormService,
    private readonly sortChoiceFormService: SortChoiceFormService,
  ) {}

    public resetAllForms(): void {
        this.craftableChoiceFormService.setDefaultValue();
        this.itemLevelFormService.setDefaultValue();
        this.itemTypeFormServices.setDefaultValue();
        this.maitrisesFormService.setDefaultValue();
        this.majorPresentFormService.setDefaultValue();
        this.modifierElemMaitrisesFormService.setDefaultValue();
        this.onlyNoSecondaryFormService.setDefaultValue();
        this.rareteItemFormServices.setDefaultValue();
        this.resistancesFormService.setDefaultValue();
        this.searchItemNameFormService.setDefaultValue();
        this.sortChoiceFormService.setDefaultValue();
    }
}