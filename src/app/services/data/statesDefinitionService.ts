import { inject, Injectable } from "@angular/core";
import { StatesDefiniton } from "../../models/data/statesDefinition";
import { tap, shareReplay, Observable, map } from "rxjs";
import { GEARFU_RESOURCES_URL } from "../../models/utils/utils";
import { CompressionService } from "../compression/compressionService";

@Injectable({providedIn: 'root'})
export class StatesDefinitionService {
    
    private readonly stateDefinitionService = new Map<number,StatesDefiniton>();
    private readonly compressionService = inject(CompressionService);

    public load(): Observable<void> {
        return this.compressionService.decompressGzipJson<StatesDefiniton[]>(GEARFU_RESOURCES_URL + 'statesDefinition.json.gz').pipe(
            tap(statesDefinitions => {
                statesDefinitions.forEach(x => this.stateDefinitionService.set(x.id, {
                    id: x.id,
                    description: {
                        fr: x.description.fr,
                        en: x.description.en,
                        es: x.description.es,
                        pt: x.description.pt
                    }
                }));
            }),
            shareReplay(1),
            map(() => {})
        );
    }

    public findStatesDefinition(id: number): StatesDefiniton  | undefined {
        return this.stateDefinitionService.get(id);
    }
}