import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { MonsterDrop } from "../../models/data/monsterDrop";
import monsterDropList from "../../../../public/monstres_drops_gfx.json";

@Injectable({providedIn: 'root'})
export class MonsterDropService {

    private readonly monsterDrops = new BehaviorSubject<MonsterDrop[]>(monsterDropList as MonsterDrop[]);
    public readonly monsterDrops$ = this.monsterDrops.asObservable();
}