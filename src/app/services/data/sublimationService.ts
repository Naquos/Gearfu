import { inject, Injectable } from "@angular/core";
import { tap, shareReplay, Observable, from, map } from "rxjs";
import { SublimationsDescriptions } from "../../models/data/sublimationsDescriptions";
import { GEARFU_RESOURCES_URL } from "../../models/utils/utils";
import { CompressionService } from "../compression/compressionService";

@Injectable({providedIn: 'root'})
export class SublimationService {

    private readonly sublimations = new Map<string, SublimationsDescriptions>();
    private readonly sublimationsClassique: SublimationsDescriptions[] = [];
    private readonly sublimationsEpiqueRelique: SublimationsDescriptions[] = [];
    private readonly compressionService = inject(CompressionService);
    
    public load(): Observable<void> {
        return this.compressionService.decompressGzipJson<SublimationsDescriptions[]>(GEARFU_RESOURCES_URL + 'sublimations.json.gz').pipe(
            tap(data => {
                data.forEach(x => this.sublimations.set(x.title.fr, x));
                this.sublimationsClassique.push(...data.filter(sublimation => !sublimation.isEpic && !sublimation.isRelic));
                this.sublimationsEpiqueRelique.push(...data.filter(sublimation => sublimation.isEpic || sublimation.isRelic));
            }),
            shareReplay(1),
            map(() => {})
        );
    }
    
    public getSublimations(): SublimationsDescriptions[] {
        return this.sublimationsClassique;
    }

    public getSublimationsEpiqueRelique(): SublimationsDescriptions[] {
        return this.sublimationsEpiqueRelique;
    }

    public getSublimationIdByIdLinkSublimation(idLinkSublimation: number): number | undefined {
        for (const sublimation of this.sublimations.values()) {
            if(sublimation.linkSublimation.find(link => link.id === idLinkSublimation)) {
                return sublimation.id;
            }
        }
        return undefined;
    }

    public getSublimationById(id: number): SublimationsDescriptions | undefined {
        for (const sublimation of this.sublimations.values()) {
            if (sublimation.id === id) {
                return sublimation;
            }
        }
        return undefined;
    }
}