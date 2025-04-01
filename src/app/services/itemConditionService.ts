import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import itemCondition from "../../../public/itemConditions.json";
import { ItemCondition } from "../models/itemCondition";

@Injectable({providedIn: 'root'})
export class ItemConditionService {
    
    private conditionService = new BehaviorSubject<ItemCondition[]>([]);
    public conditionService$ = this.conditionService.asObservable();

    constructor() {
        const result: ItemCondition[] = [];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (itemCondition as [any]).forEach(x => result.push({
            id: x.id,
            description: {
                fr: x.description?.fr ?? "",
                en: x.description?.en ?? "",
                es: x.description?.es ?? "",
                pt: x.description?.pt ?? ""
            }
        }))
        this.conditionService.next(result);
    }

    public findCondition(id: number): Observable<ItemCondition  | undefined> {
        return this.conditionService$.pipe(map(x => x.find(condition => condition.id === id)));
    }
}