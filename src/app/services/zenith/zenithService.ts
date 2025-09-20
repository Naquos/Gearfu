import { inject, Injectable } from "@angular/core";
import { ZenithApiService } from "./zenithApiService";
import { catchError, combineLatestWith, forkJoin, map, Observable, of, switchMap, take, tap, throwError } from "rxjs";
import { ItemChooseService } from "../itemChooseService";
import { ItemsService } from "../data/itemsService";
import { AddItemRequest } from "../../models/zenith/addItemRequest";
import { ItemTypeServices } from "../data/ItemTypesServices";
import { ItemTypeEnum } from "../../models/enum/itemTypeEnum";
import { EquipEffects } from "../../models/data/equipEffects";
import { EffectItems } from "../../models/zenith/effectItems";
import { IdActionsEnum } from "../../models/enum/idActionsEnum";
import { TranslateService } from "@ngx-translate/core";
import { Item } from "../../models/data/item";
import { ItemTypeDefinitionEnum } from "../../models/enum/itemTypeDefinitionEnum";
import { ActionService } from "../data/actionService";

@Injectable({ providedIn: 'root' })
export class ZenithService {
    private readonly zenithApiService = inject(ZenithApiService);
    private readonly itemChooseService = inject(ItemChooseService);
    private readonly itemsService = inject(ItemsService);
    private readonly itemTypeServices = inject(ItemTypeServices);
    private readonly translateService = inject(TranslateService);
    private readonly actionService = inject(ActionService);

    private firstRing = true;

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
            switchMap(([infoBuild, idItems]) => {
                const items = idItems.split(',').map(s => parseInt(s, 10)).filter(n => !isNaN(n));
                const failedItems: Item[] = []; // on accumule ici les items non trouvés (500)
                const items231AndMore: Item[] = []; // on accumule ici les items 231+ car Zénith n'est pas à jour

                const itemRequests$ = items.map(id =>
                    this.itemsService.searchItem(id).pipe(
                        take(1),
                        switchMap(item => {
                            if (!item) {
                                // si searchItem renvoie null/undefined : on le considère comme "manquant" et on continue
                                // failedItems.push({ id, reason: 'notFoundLocally' });
                                return of(item);
                            }
                            if (item.level >= 231) {
                                items231AndMore.push(item);
                            }

                            return this.zenithApiService.addItemRequest(
                                this.createAddItemsRequest(infoBuild.id_build, item)
                            ).pipe(
                                map(() => item),
                                catchError(err => {
                                    console.log(err)
                                    // si le serveur renvoie 500 => non bloquant : on stocke l'item et on renvoie une valeur "ok: false"
                                    if (err && err.status === 500) {
                                        console.warn(`Item ${id} non ajouté (500)`, item);
                                        failedItems.push(item);
                                        return of(item);
                                    }
                                    // autres erreurs : on les propage (comportement "classique" d'erreur)
                                    return throwError(() => err);
                                })
                            );
                        }),
                    )
                );

                return forkJoin(itemRequests$).pipe(
                    switchMap(() => {
                        if (failedItems.length === 0) {
                            // Aucun item manquant → on continue direct
                            return of(infoBuild.link_build);
                        }
                        // 1. On calcule les effets combinés
                        const combinedEffects = this.handleMissingItems(failedItems);

                        // 2. Pour chaque effet combiné, on prépare un appel updateCustomStatistics
                        const updateRequests$ = combinedEffects.map(effect =>
                            this.zenithApiService.updateCustomStatistics({
                                id_build: infoBuild.id_build,
                                id_stats: effect.actionId,
                                value: effect.params[0] || 0
                            }, effect)
                        );

                        // 3. On calcul les effets pour les items 231+

                        // 4. on les ajoute à la liste des updates
                        return forkJoin(updateRequests$).pipe(
                            tap(() => this.firstRing = true),
                            map(() => infoBuild.link_build)
                        );
                    }),
                );
            })
        );
    }

    private handleItems231AndMore(items: Item[]): EquipEffects[] {
        const mapEffects = this.convertItemsToMapEffecs(items);
        

        return Array.from(mapEffects.values());
        
    }

    private handleMissingItems(items: Item[]): EquipEffects[] {
        const mapEffects = this.convertItemsToMapEffecs(items);
        return Array.from(mapEffects.values());
    }

    private convertItemsToMapEffecs(items: Item[]) {
        const mapEffects = new Map<number, EquipEffects>();
        items.forEach(item => {
            item.equipEffects.forEach(effect => {
                if (effect.actionId === IdActionsEnum.APPLIQUE_ETAT) {
                    return; // on ignore les états appliqués

                }
                let actionId = effect.actionId;
                if (this.actionService.isAMalus(actionId)) { actionId = this.actionService.getOpposedEffect(actionId); }

                const existing = mapEffects.get(actionId);
                if (!existing) {
                    mapEffects.set(actionId, { ...effect, params: [...effect.params] });
                } else {
                    // Somme les params des effets similaires
                    existing.params[0] += effect.params[0] || 0;
                }
            });
        });
        return mapEffects;
    }

    private getItemTypeId(item: Item): number {
        const itemType = this.itemTypeServices.getItemType(item.itemTypeId);
        if (itemType === ItemTypeEnum.ANNEAU) {
            if (this.firstRing) {
                this.firstRing = false;
                return 23;
            }
            return 24;
        } else if (itemType === ItemTypeEnum.UNE_MAIN || itemType === ItemTypeEnum.DEUX_MAINS) {
            return 540;
        } else if (itemType === ItemTypeEnum.BOUCLIER || itemType === ItemTypeEnum.DAGUE) {
            return 520;
        }

        return item.itemTypeId;
    }

    private createAddItemsRequest(idBuild: number, item: Item): AddItemRequest {
        return {
            equipment: {
                id_equipment: item.id,
                level: item.itemTypeId === ItemTypeDefinitionEnum.FAMILIER ? 50 : item.level,
                id_rarity: item.rarity,
                ap_cost: 0,
                mp_cost: 0,
                wp_cost: 0,
                min_range: 0,
                max_range: 0,
                name_equipment: item.title[this.translateService.currentLang as keyof typeof item.title],
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
                values: [IdActionsEnum.MAITRISES_ELEMENTAIRES_NOMBRE_VARIABLE, IdActionsEnum.RESISTANCES_NOMBRE_VARIABLE].includes(x.actionId) ?
                    [
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
                            }, {
                                id_element: 2,
                                id_inner_stats: this.isRandomMaitrise(x) ? 124 : 83,
                                image_element: "water.png"
                            }, {
                                id_element: 3,
                                id_inner_stats: this.isRandomMaitrise(x) ? 123 : 84,
                                image_element: "earth.png"
                            }, {
                                id_element: 4,
                                id_inner_stats: this.isRandomMaitrise(x) ? 125 : 85,
                                image_element: "wind.png"
                            }].slice(0, x.params[2])
                        }
                    ] : [],
                inner_stats: []
            }
        })
    }

    private isRandomMaitrise(equipEffect: EquipEffects): boolean {
        return equipEffect.actionId === IdActionsEnum.MAITRISES_ELEMENTAIRES_NOMBRE_VARIABLE;
    }

}