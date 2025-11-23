import { inject, Injectable } from "@angular/core";
import { WakassetCdnService } from "./wakassetCdnService"
import { BehaviorSubject, filter } from "rxjs";
import { MonsterDropCdn } from "../../models/wakasset/monsterDropCdn";

@Injectable({providedIn: 'root'})
export class WakassetCdnFacade{
    private readonly wakassetCdnService = inject(WakassetCdnService);

    private readonly monsterDrops = new BehaviorSubject<MonsterDropCdn[]>([]);
    public readonly monsterDrops$ = this.monsterDrops.asObservable().pipe(
        filter(monsterDrops => monsterDrops.length > 0),
    );

    private loadMonsterDrops(): void {
        this.wakassetCdnService.monsterDrop().subscribe(monsterDrops => this.monsterDrops.next(monsterDrops));
    }

    public load(): void {
        this.loadMonsterDrops();
    }
}