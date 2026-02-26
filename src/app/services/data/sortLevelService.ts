import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, from, map, Observable, shareReplay, tap } from "rxjs";
import { SortLevel } from "../../models/data/sortLevel";
import { GEARFU_RESOURCES_URL } from "../../models/utils/utils";
import { CompressionService } from "../compression/compressionService";

@Injectable({providedIn: 'root'})
export class SortLevelService {

    private readonly sortsLevel = new BehaviorSubject<SortLevel[]>([]);
    public readonly sortsLevel$ = this.sortsLevel.asObservable();
    private readonly compressionService = inject(CompressionService);
    
    /**
     * Charge les données des drops de monstres
     * Utilise un cache pour éviter les chargements multiples
     */
    public load(): Observable<void> {
        return this.compressionService.decompressGzipJson<SortLevel[]>(GEARFU_RESOURCES_URL + 'sortsLevel.json.gz').pipe(
            tap(data => {
                this.sortsLevel.next(data);
            }),
            shareReplay(1),
            map(() => {})
        );
    }

}
