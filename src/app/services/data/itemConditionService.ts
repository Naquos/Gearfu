import { Injectable } from "@angular/core";
import itemCondition from "../../../../public/itemConditions.json";
import { ItemCondition } from "../../models/data/itemCondition";

@Injectable({providedIn: 'root'})
export class ItemConditionService {

    private readonly condition = new Map<number, ItemCondition>(); 

    constructor() {
        (itemCondition as [ItemCondition]).forEach(x => this.condition.set(x.id,x))
    }

    public findCondition(id: number): ItemCondition  | undefined {
        return this.condition.get(id);
    }
}