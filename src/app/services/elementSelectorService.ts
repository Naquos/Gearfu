import { inject, Injectable } from "@angular/core";
import { IdActionsEnum } from "../models/enum/idActionsEnum";
import { ElementSelectorEnum } from "../models/enum/elementSelectorEnum";
import { LocalStorageService } from "./data/localStorageService";
import { KeyEnum } from "../models/enum/keyEnum";
import { UrlServices } from "./urlServices";

@Injectable({providedIn: 'root'})
export class ElementSelectorService {
    private readonly mapIdItemToElementsMaitrises = new Map<number, IdActionsEnum[]>()
    private readonly mapIdItemToElementsResistances = new Map<number, IdActionsEnum[]>()
    private readonly localStorageService = inject(LocalStorageService);
    private readonly urlServices = inject(UrlServices);
    
    public init(): void {
        const savedMaitrises = this.localStorageService.getItem<[number, IdActionsEnum[]][]>(KeyEnum.KEY_ELEMENT_SELECTOR_MAITRISE);
        if(savedMaitrises && savedMaitrises.length) {
            this.mapIdItemToElementsMaitrises.clear();
            savedMaitrises.forEach(([key, value]) => {
                this.mapIdItemToElementsMaitrises.set(key, value);
            });
        }

        const savedResistances = this.localStorageService.getItem<[number, IdActionsEnum[]][]>(KeyEnum.KEY_ELEMENT_SELECTOR_RESISTANCE);
        if(savedResistances && savedResistances.length) {
            this.mapIdItemToElementsResistances.clear();
            savedResistances.forEach(([key, value]) => {
                this.mapIdItemToElementsResistances.set(key, value);
            });
        }
    }
    
    public setElementsForItem(idItem: number, elements: IdActionsEnum[], type: ElementSelectorEnum): void {
        const map = this.getMapByType(type);
        map.set(idItem, elements);
        this.saveToLocalStorage(type);
        this.updateUrl();
    }

    public getElementsForItem(idItem: number, type: ElementSelectorEnum): IdActionsEnum[] {
        const map = this.getMapByType(type);
        return map.get(idItem) ?? [];
    }
    public deleteItem(idItem: number): void {
        this.deleteElementsForItem(idItem, ElementSelectorEnum.Maitrise);
        this.deleteElementsForItem(idItem, ElementSelectorEnum.Resistance);
    }   

    public deleteElementsForItem(idItem: number, type: ElementSelectorEnum): void {
        const map = this.getMapByType(type);
        map.delete(idItem);
        this.saveToLocalStorage(type);
        this.updateUrl();
    }

    private getMapByType(type: ElementSelectorEnum): Map<number, IdActionsEnum[]> {
        if (type === ElementSelectorEnum.Maitrise) {
            return this.mapIdItemToElementsMaitrises;
        } else {
            return this.mapIdItemToElementsResistances;
        }
    }

    private saveToLocalStorage(type: ElementSelectorEnum): void {
        const key = type === ElementSelectorEnum.Maitrise ? KeyEnum.KEY_ELEMENT_SELECTOR_MAITRISE : KeyEnum.KEY_ELEMENT_SELECTOR_RESISTANCE;
        const map = this.getMapByType(type);
        this.localStorageService.setItem<[number, IdActionsEnum[]][]>(key, Array.from(map.entries()));
    }

    /**
     * Encode les données de l'element selector pour le build
     * Format: M|idItem1:elem1,elem2|idItem2:elem3;R|idItem3:elem4,elem5
     * M = Maitrise, R = Resistance
     */
    public encodeForBuild(): string {
        const parts: string[] = [];
        
        // Encoder les maitrises
        if (this.mapIdItemToElementsMaitrises.size > 0) {
            const maitrisesEntries = Array.from(this.mapIdItemToElementsMaitrises.entries())
                .map(([itemId, elements]) => `${itemId}:${elements.join(',')}`);
            if (maitrisesEntries.length > 0) {
                parts.push('M|' + maitrisesEntries.join('|'));
            }
        }
        
        // Encoder les résistances
        if (this.mapIdItemToElementsResistances.size > 0) {
            const resistancesEntries = Array.from(this.mapIdItemToElementsResistances.entries())
                .map(([itemId, elements]) => `${itemId}:${elements.join(',')}`);
            if (resistancesEntries.length > 0) {
                parts.push('R|' + resistancesEntries.join('|'));
            }
        }
        
        return parts.join(';');
    }

    /**
     * Décode et applique les données de l'element selector depuis un code build
     */
    public decodeAndApplyFromBuild(code: string): void {
        if (!code) {
            return;
        }
        
        try {
            // Nettoyer les maps existantes
            this.mapIdItemToElementsMaitrises.clear();
            this.mapIdItemToElementsResistances.clear();
            
            // Séparer les parties Maitrise et Resistance
            const sections = code.split(';');
            
            for (const section of sections) {
                if (!section) continue;
                
                const [type, ...entries] = section.split('|');
                const targetMap = type === 'M' 
                    ? this.mapIdItemToElementsMaitrises 
                    : this.mapIdItemToElementsResistances;
                
                // Parser chaque entrée
                for (const entry of entries) {
                    if (!entry) continue;
                    
                    const [itemIdStr, elementsStr] = entry.split(':');
                    if (!itemIdStr || !elementsStr) continue;
                    
                    const itemId = parseInt(itemIdStr, 10);
                    const elements = elementsStr.split(',').map(e => parseInt(e, 10) as IdActionsEnum);
                    
                    if (!isNaN(itemId) && elements.length > 0 && elements.every(e => !isNaN(e))) {
                        targetMap.set(itemId, elements);
                    }
                }
            }
            
            // Sauvegarder dans le localStorage
            this.saveToLocalStorage(ElementSelectorEnum.Maitrise);
            this.saveToLocalStorage(ElementSelectorEnum.Resistance);
        } catch (error) {
            console.error('Error decoding element selector data:', error);
        }
    }

    /**
     * Met à jour l'URL avec les données actuelles de l'element selector
     */
    private updateUrl(): void {
        const code = this.encodeForBuild();
        this.urlServices.setElementSelectorInUrl(code);
    }
}