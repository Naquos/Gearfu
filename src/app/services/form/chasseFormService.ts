import { Injectable } from "@angular/core";
import { KeyEnum } from "../../models/enum/keyEnum";
import { FormControl } from "@angular/forms";
import { AbstractFormService } from "./abstractFormService";
import { BehaviorSubject } from "rxjs";
import { ChasseCombinaison, createEmptyChasseCombinaison } from "../../models/data/chasseCombinaison";
import { Chasse } from "../../models/data/chasse";
import { ItemTypeEnum } from "../../models/enum/itemTypeEnum";
import { IdActionsEnum } from "../../models/enum/idActionsEnum";
import { RecapStats } from "../../models/data/recap-stats";
import { getValueTacleEsquiveByLevel } from "../../models/enum/effetTacleEsquiveChassesEnum";
import { getValueInitiativesByLevel } from "../../models/enum/effetInitiavesChassesEnum";
import { getValueVieByLevel } from "../../models/enum/effetVieChassesEnum";
import { getValueMaitriseElemByLevel } from "../../models/enum/effetMaitriseElemChassesEnum";
import { getValueResistancesByLevel } from "../../models/enum/effetResistancesChassesEnum";

@Injectable({providedIn: 'root'})
export class ChasseFormService extends AbstractFormService<FormControl<ChasseCombinaison[]>> {
    public static readonly DEFAULT_VALUE = () => {
        const initialChasses: ChasseCombinaison[] = [];
        for (let i = 0; i < 10; i++) {
          initialChasses.push(createEmptyChasseCombinaison());
        }
        return initialChasses;
    };

    private readonly recapChassesEffect = new BehaviorSubject<RecapStats[]>([]);
    public readonly recapChassesEffect$ = this.recapChassesEffect.asObservable();

    private readonly chasse = new BehaviorSubject<ChasseCombinaison[]>(ChasseFormService.DEFAULT_VALUE());
    public readonly chasse$ = this.chasse.asObservable();

    protected readonly keyEnum = KeyEnum.KEY_CHASSES;
    public readonly form =  new FormControl<ChasseCombinaison[]>(ChasseFormService.DEFAULT_VALUE(), { nonNullable: true });

    private readonly indexToItemType = new Map<number, ItemTypeEnum>([
        [0, ItemTypeEnum.CASQUE],
        [1, ItemTypeEnum.AMULETTE],
        [2, ItemTypeEnum.PLASTRON],
        [3, ItemTypeEnum.ANNEAU],
        [4, ItemTypeEnum.ANNEAU],
        [5, ItemTypeEnum.BOTTES],
        [6, ItemTypeEnum.CAPE],
        [7, ItemTypeEnum.EPAULETTES],
        [8, ItemTypeEnum.CEINTURE],
        [9, ItemTypeEnum.UNE_MAIN],
    ]);

    private readonly doubleEffect = new Map<IdActionsEnum, [ItemTypeEnum, ItemTypeEnum]>([
        [IdActionsEnum.MAITRISES_ELEMENTAIRES, [ItemTypeEnum.PLASTRON, ItemTypeEnum.CAPE]],
        [IdActionsEnum.MAITRISES_SOIN, [ItemTypeEnum.AMULETTE, ItemTypeEnum.EPAULETTES]],
        [IdActionsEnum.MAITRISES_MELEE, [ItemTypeEnum.CASQUE, ItemTypeEnum.CAPE]],
        [IdActionsEnum.MAITRISES_DISTANCES, [ItemTypeEnum.CEINTURE, ItemTypeEnum.UNE_MAIN]],
        [IdActionsEnum.MAITRISES_BERZERK, [ItemTypeEnum.AMULETTE, ItemTypeEnum.CAPE]],
        [IdActionsEnum.MAITRISES_CRITIQUES, [ItemTypeEnum.EPAULETTES, ItemTypeEnum.UNE_MAIN]],
        [IdActionsEnum.MAITRISES_DOS, [ItemTypeEnum.CEINTURE, ItemTypeEnum.BOTTES]],
        [IdActionsEnum.TACLE, [ItemTypeEnum.ANNEAU, ItemTypeEnum.ANNEAU]],
        [IdActionsEnum.ESQUIVE, [ItemTypeEnum.ANNEAU, ItemTypeEnum.ANNEAU]],
        [IdActionsEnum.INITIATIVE, [ItemTypeEnum.AMULETTE, ItemTypeEnum.CAPE]],
        [IdActionsEnum.RESISTANCES_FEU, [ItemTypeEnum.PLASTRON, ItemTypeEnum.CEINTURE]],
        [IdActionsEnum.RESISTANCES_EAU, [ItemTypeEnum.PLASTRON, ItemTypeEnum.EPAULETTES]],
        [IdActionsEnum.RESISTANCES_AIR, [ItemTypeEnum.PLASTRON, ItemTypeEnum.CAPE]],
        [IdActionsEnum.RESISTANCES_TERRE, [ItemTypeEnum.PLASTRON, ItemTypeEnum.BOTTES]],
        [IdActionsEnum.POINT_DE_VIE, [ItemTypeEnum.CASQUE, ItemTypeEnum.UNE_MAIN]],
    ]);
    
    constructor() {
        super();
        this.init();
    }

    
    private equalChasses(c1: Chasse, c2: Chasse): boolean {
        return c1.color === c2.color && c1.lvl === c2.lvl && c1.idAction === c2.idAction;
    }

    public applyEffect(posX: number, posY: number, chasse: Chasse): void {
        const currentChasses = this.getValue();
        const chasseToUpdate = currentChasses[posY];
        if (this.equalChasses(chasseToUpdate.chasses[posX], chasse)) {
            this.clearEffect(posX, posY);
        } else {
            chasseToUpdate.chasses[posX] = chasse;
        }
        this.setValue(currentChasses);
    }

    public clearEffect(posX: number, posY: number): void {
        const currentChasses = this.getValue();
        const chasseToUpdate = currentChasses[posY];
        chasseToUpdate.chasses[posX] = createEmptyChasseCombinaison().chasses[0];
        this.setValue(currentChasses);
    }

    public changeJokerState(posX: number, posY: number): void {
        const currentChasses = this.getValue();
        const chasseToUpdate = currentChasses[posY];
        const chasse = chasseToUpdate.chasses[posX];
        if (!chasse.idAction) { return; }
        chasse.joker = !chasse.joker;
        this.setValue(currentChasses);
    }

    private getChasseEffectValue(chasse: Chasse): number {
        if (!chasse.idAction) { return 0; }
        if([IdActionsEnum.TACLE, IdActionsEnum.ESQUIVE].includes(chasse.idAction)) {
            return getValueTacleEsquiveByLevel(chasse.lvl);
        } else if([IdActionsEnum.INITIATIVE].includes(chasse.idAction)) {
            return getValueInitiativesByLevel(chasse.lvl);
        } else if([IdActionsEnum.POINT_DE_VIE].includes(chasse.idAction)) {
            return getValueVieByLevel(chasse.lvl);
        } else if([IdActionsEnum.MAITRISES_ELEMENTAIRES].includes(chasse.idAction)) {
            return getValueMaitriseElemByLevel(chasse.lvl);
        } else if([IdActionsEnum.MAITRISES_SOIN, IdActionsEnum.MAITRISES_MELEE, IdActionsEnum.MAITRISES_DISTANCES,
                    IdActionsEnum.MAITRISES_BERZERK, IdActionsEnum.MAITRISES_CRITIQUES, IdActionsEnum.MAITRISES_DOS
                ].includes(chasse.idAction)) {
            return getValueMaitriseElemByLevel(chasse.lvl);
        } else if([IdActionsEnum.RESISTANCES_FEU, IdActionsEnum.RESISTANCES_EAU, IdActionsEnum.RESISTANCES_AIR,
             IdActionsEnum.RESISTANCES_TERRE].includes(chasse.idAction)) {
            return getValueResistancesByLevel(chasse.lvl);
        }
        return 0;
    }

    protected override handleChanges(value: ChasseCombinaison[]): void {
        const recapStats: RecapStats[] = [];

        value.forEach((chasseCombinaison, indexCombinaison) => {
            chasseCombinaison.chasses.forEach((chasse) => {
                if (!chasse.idAction) { return; }
                const itemType = this.indexToItemType.get(indexCombinaison);
                if (!itemType) { return; }
                const multiplicateur = this.doubleEffect.get(chasse.idAction)?.includes(itemType) ? 2 : 1;
                recapStats.push({
                    id: chasse.idAction,
                    value: multiplicateur * this.getChasseEffectValue(chasse),
                    params: []
                });
            });
        });

        this.chasse.next(value);
        this.recapChassesEffect.next(recapStats);
    }
    
    public override setValue(value: ChasseCombinaison[] | null): void {
        this.form.setValue(value ?? ChasseFormService.DEFAULT_VALUE());
    }
    public override setDefaultValue(): void {
        this.form.setValue(ChasseFormService.DEFAULT_VALUE());
    }

    public getValue(): ChasseCombinaison[] {
        return this.chasse.getValue();
    }
}