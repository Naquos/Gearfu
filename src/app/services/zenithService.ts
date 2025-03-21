import { Injectable } from "@angular/core";
import { ZenithApiService } from "./zenithApiService";
import { combineLatestWith, map, Observable, switchMap, tap } from "rxjs";
import { ItemChooseService } from "./itemChooseService";
import { ItemsService } from "./itemsService";
import { AddItemRequest } from "../models/zenith/addItemRequest";
import { Item } from "../models/item";
import { ItemTypeServices } from "./ItemTypesServices";
import { ItemTypeEnum } from "../models/itemTypeEnum";
import { EquipEffects } from "../models/equipEffects";
import { EffectItems } from "../models/zenith/effectItems";
import { IdActionsEnum } from "../models/idActionsEnum";

@Injectable({providedIn: 'root'})
export class ZenithService {

    private firstRing = true;

    constructor(private zenithApiService: ZenithApiService,
        private itemChooseService: ItemChooseService,
        private itemsService: ItemsService,
        private itemTypeServices: ItemTypeServices
    ) {}


    public createBuild(): Observable<string> {
        return this.zenithApiService.createBuild({
            flags: [],
            id_job: 7,
            is_visible: true,
            level: 245,
            name: "Gearfu - Generated"
        }).pipe(
            switchMap(x => this.zenithApiService.getBuildInfo(x.link)),
            combineLatestWith(this.itemChooseService.idItems$),
            tap(([infoBuild,idItems]) => {
                const items = idItems.split(",").map(x => parseInt(x));
                const itemsList = items.map(x => this.itemsService.searchItem(x));
                itemsList.forEach(item => {
                    if(item) {
                        this.zenithApiService.addItemRequest(this.createAddItemsRequest(infoBuild.id_build, item)).subscribe();
                    }
                })
            }),
            tap(() => this.firstRing = true),
            map(([infoBuild,]) => infoBuild.link_build)
        );
    }

    private getItemTypeId(item: Item): number {
        const itemType = this.itemTypeServices.getItemType(item.itemTypeId);
        if(itemType === ItemTypeEnum.ANNEAU) {
            if(this.firstRing) {
                this.firstRing = false;
                return 23;
            }
            return 24;
        } else if(itemType=== ItemTypeEnum.UNE_MAIN || itemType=== ItemTypeEnum.DEUX_MAINS) {
            return 540;
        } else if(itemType=== ItemTypeEnum.BOUCLIER || itemType=== ItemTypeEnum.DAGUE) {
            return 520;
        }

        return item.itemTypeId;
    }

    private createAddItemsRequest(idBuild: number, item: Item): AddItemRequest {
        return {
            equipment:{
                id_equipment: item.id,
                level: item.level,
                id_rarity: item.rarity,
                ap_cost: 0,
                mp_cost: 0,
                wp_cost: 0,
                min_range: 0,
                max_range: 0,
                name_equipment: item.title,
                line_of_sight: 0,
                name_equipment_type: "",
                image_equipment_type: "",
                effects: this.createEffectItems(item.equipEffects),
                translations: [],
                criterias: [],
                metadata: {
                    side: this.getItemTypeId(item)
                },
                order: 0,
                name_rarity: "",
                image_rarity: ""
            },
            id_build: idBuild

        }
    }

    private createEffectItems(equipEffects: EquipEffects[]): EffectItems[] {
        return equipEffects.map(x => {
            return {
                id_effect: x.id,
                name_effect: "",
                ui_position: 0,
                from_evolution: 0,
                container_min_level: 0,
                container_max_level: 0,
                is_critical: 0,
                is_use_effect: 0,
                pivot: {},
                translations: [],
                values: [
                    {
                        id_spell_effect_value: 0,
                        offset: 0,
                        damage: 0,
                        ratio: 0,
                        id_stats: x.actionId,
                        id_effect: 0,
                        will_calculate_damage: 0,
                        will_calculate_heal: 0,
                        base: null,
                        evolution: null,
                        random_number: x.params[2],
                        statistics: {},
                        elements: [{
                            id_element: 1,
                            id_inner_stats: this.isRandomMaitrise(x) ? 122 : 82,
                            image_element: "fire.png"
                        },{
                            id_element: 2,
                            id_inner_stats: this.isRandomMaitrise(x) ? 124 : 83,
                            image_element: "water.png"
                        },{
                            id_element: 3,
                            id_inner_stats: this.isRandomMaitrise(x) ? 123 : 84,
                            image_element: "earth.png"
                        },{
                            id_element: 4,
                            id_inner_stats: this.isRandomMaitrise(x) ? 125 : 85,
                            image_element: "wind.png"
                        }].slice(0, x.params[2])
                }],
                inner_stats: []
            }
        })
    }

    private isRandomMaitrise(equipEffect : EquipEffects): boolean {
        return equipEffect.actionId === IdActionsEnum.MAITRISES_ELEMENTAIRES_NOMBRE_VARIABLE;
    }

}