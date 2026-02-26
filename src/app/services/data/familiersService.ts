import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable, shareReplay, tap } from "rxjs";
import { Familier } from "../../models/data/familier";
import { GEARFU_RESOURCES_URL } from "../../models/utils/utils";
import { CompressionService } from "../compression/compressionService";

@Injectable({providedIn: 'root'})
export class FamiliersService {
    private readonly familiers = new BehaviorSubject<Familier[]>([]);
    public readonly familiers$ = this.familiers.asObservable();
    private readonly compressionService = inject(CompressionService);

    /**
     * Charge les données des familiers
     * Utilise un cache pour éviter les chargements multiples
     */
    public load(): Observable<void> {
        return this.compressionService.decompressGzipJson<Familier[]>(GEARFU_RESOURCES_URL + 'familiers_stats.json.gz').pipe(
            tap(data => {
                this.familiers.next(data);
            }),
            shareReplay(1),
            map(() => {})
        );
    }

}
