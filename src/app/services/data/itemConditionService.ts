import { Injectable } from "@angular/core";
import itemCondition from "../../../../public/itemConditions.json";
import { ItemCondition } from "../../models/data/itemCondition";

@Injectable({providedIn: 'root'})
export class ItemConditionService {

    private readonly condition = new Map<number, ItemCondition>(); 

    constructor() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (itemCondition as [any]).forEach(x => this.condition.set(
            x.id,
        {
            id: x.id,
            description: {
                fr: x.description?.fr ?? "",
                en: x.description?.en ?? "",
                es: x.description?.es ?? "",
                pt: x.description?.pt ?? ""
            }
        }))
    }

    public findCondition(id: number): ItemCondition  | undefined {
        return this.condition.get(id);
    }
}