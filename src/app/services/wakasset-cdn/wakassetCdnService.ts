import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { MonsterDropCdn } from "../../models/wakasset/monsterDropCdn";

@Injectable({providedIn: 'root'})
export class WakassetCdnService {
    private readonly http = inject(HttpClient);
    private readonly baseUrl = "https://vertylo.github.io/wakassets/";

    public monsterDrop(): Observable<MonsterDropCdn[]> {
        return this.http.get<MonsterDropCdn[]>(this.baseUrl + "jsons/monsterDrops.json");
    }
}
