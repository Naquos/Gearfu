import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { MonsterDrops } from "../../models/data/monsterDrops";
import monsterDrops from "../../../../public/monsterDrops.json";

@Injectable({providedIn: 'root'})
export class MonsterDropsService {
    
    private readonly monsterDrops = new BehaviorSubject<MonsterDrops[]>([]);
    public readonly monsterDrops$ = this.monsterDrops.asObservable();

    constructor() {
        const result: MonsterDrops[] = [];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (monsterDrops as [any]).forEach(x => result.push({
            id: x.id,
            drops: x.drops
        }))

        this.monsterDrops.next(result);
    }
}