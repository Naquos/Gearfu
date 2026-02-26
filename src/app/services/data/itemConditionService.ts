import { inject, Injectable } from "@angular/core";
import { ItemCondition } from "../../models/data/itemCondition";
import { tap, shareReplay, Observable, map } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { GEARFU_RESOURCES_URL } from "../../models/utils/utils";
import { CompressionService } from "../compression/compressionService";

@Injectable({providedIn: 'root'})
export class ItemConditionService {

    private readonly condition = new Map<number, ItemCondition>();
    private readonly compressionService = inject(CompressionService);

    public load(): Observable<void> {
        return this.compressionService.decompressGzipJson<ItemCondition[]>(GEARFU_RESOURCES_URL + 'itemConditions.json.gz').pipe(
            tap(conditions => conditions.forEach(x => this.condition.set(x.id, x))),
            shareReplay(1),
            map(() => {})
        );
    }


    public findCondition(id: number): ItemCondition  | undefined {
        return this.condition.get(id);
    }
}