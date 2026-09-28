import { inject, Injectable } from "@angular/core";
import { MaitrisesFormService } from "./form-signal/maitrisesFormService";
import { ModifierMecanismFormService } from "./form-signal/modifierElemMaitrisesFormService";
import { ResistancesFormService } from "./form-signal/resistancesFormService";
import { OnlyNoElemFormService } from "./form-signal/onlyNoElemFormService";
import { OnlyNoSecondaryFormService } from "./form-signal/onlyNoSecondaryFormService";
import { Item } from "../models/data/item";
import { combineLatest, map, Observable } from "rxjs";
import { ItemsService } from "./data/itemsService";
import { calculWeight } from "../models/utils/utils";

@Injectable({ providedIn: 'root' })
export class CalculMaitrisesResistancesService {

    private readonly maitrisesFormService = inject(MaitrisesFormService);
    private readonly modifierMecanismFormService = inject(ModifierMecanismFormService);
    private readonly resistanceFormService = inject(ResistancesFormService);
    private readonly onlyNoElemFormService = inject(OnlyNoElemFormService);
    private readonly onlyNoSecondaryFormService = inject(OnlyNoSecondaryFormService);
    private readonly ItemsService = inject(ItemsService);

    /**
     * Calcule les maîtrises pour un item donné.
     * @param item L'item pour lequel calculer les maîtrises.
     * @returns 
     */
    public calculateMaitrises(item: Item): Observable<number> {
        return combineLatest([
            this.maitrisesFormService.nbElements$,
            this.maitrisesFormService.idMaitrises$,
            this.modifierMecanismFormService.multiplicateurElem$,
            this.modifierMecanismFormService.denouement$,
            this.onlyNoElemFormService.onlyNoElem$,
            this.onlyNoSecondaryFormService.onlyNoSecondary$,
            this.modifierMecanismFormService.chaos$,
        ]).pipe(
            map(([nbElements, idMaitrises, multiplicateurElem, denouement, onlyNoElem, onlyNoSecondary, chaos]) => {
                return this.ItemsService.calculMaitrisesForAnItem(item, nbElements, idMaitrises, multiplicateurElem, denouement, onlyNoElem, onlyNoSecondary, chaos);
            })
        );
    }

    /**
     * Calcule les résistances pour un item donné.
     * @param item L'item pour lequel calculer les résistances.
     * @returns 
     */
    public calculResistances(item: Item): Observable<number> {
        return this.resistanceFormService.idResistances$.pipe(
            map((idResistances) => {
                return this.ItemsService.calculResistancesForAnItem(item, idResistances);
            })
        );
    }

    /**
     * Calcule le poids pour un item donné.
     * @param item L'item pour lequel calculer le poids.
     * @returns 
     */
    public calculPoids(item: Item): Observable<number> {
        return combineLatest([
            this.maitrisesFormService.nbElements$,
            this.maitrisesFormService.idMaitrises$,
            this.modifierMecanismFormService.multiplicateurElem$,
            this.modifierMecanismFormService.denouement$,
            this.onlyNoElemFormService.onlyNoElem$,
            this.onlyNoSecondaryFormService.onlyNoSecondary$,
            this.modifierMecanismFormService.chaos$,
            this.resistanceFormService.idResistances$
        ]).pipe(
            map(([nbElements, idMaitrises, multiplicateurElem, denouement, onlyNoElem, onlyNoSecondary, chaos, idResistances]) => {
                const maitrises = this.ItemsService.calculMaitrisesForAnItem(item, nbElements, idMaitrises, multiplicateurElem, denouement, onlyNoElem, onlyNoSecondary, chaos);
                const resistances = this.ItemsService.calculResistancesForAnItem(item, idResistances);
                return calculWeight(resistances, maitrises, item.level);
            })
        )
    }
}