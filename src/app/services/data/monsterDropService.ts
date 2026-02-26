import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable, shareReplay, tap } from "rxjs";
import { MonsterDrop } from "../../models/data/monsterDrop";
import { GEARFU_RESOURCES_URL } from "../../models/utils/utils";
import { CompressionService } from "../compression/compressionService";

@Injectable({providedIn: 'root'})
export class MonsterDropService {

    private readonly monsterDrops = new BehaviorSubject<MonsterDrop[]>([]);
    public readonly monsterDrops$ = this.monsterDrops.asObservable();
    private readonly compressionService = inject(CompressionService);

    /**
     * Charge les données des drops de monstres
     * Utilise un cache pour éviter les chargements multiples
     */
    public load(): Observable<void> {
        return this.compressionService.decompressGzipJson<MonsterDrop[]>(GEARFU_RESOURCES_URL + 'monstres_drops_gfx.json.gz').pipe(
            tap(data => {
                this.monsterDrops.next(data);
            }),
            shareReplay(1),
            map(() => {})
        );
    }

}
