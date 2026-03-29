import { Component, Signal, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap, tap } from 'rxjs';
import { SublimationsDescriptions } from '../../../models/data/sublimationsDescriptions';
import { ClasseFormService } from '../../../services/form/classeFormService';
import { ChasseFormService } from '../../../services/form/chasseFormService';
import { SublimationService } from '../../../services/data/sublimationService';
import { SupabaseService } from '../../../services/supabase/supabaseService';
import { EnchantementSublimationsClassiquesComponent } from '../enchantement-sublimations-classiques/enchantement-sublimations-classiques.component';
import { EnchantementSublimationsEpiquesReliquesComponent } from '../enchantement-sublimations-epiques-reliques/enchantement-sublimations-epiques-reliques.component';

@Component({
    selector: 'app-enchantement-sublimations-community',
    imports: [
        EnchantementSublimationsClassiquesComponent,
        EnchantementSublimationsEpiquesReliquesComponent
    ],
    templateUrl: './enchantement-sublimations-conseillees.component.html',
    styleUrl: './enchantement-sublimations-conseillees.component.scss'
})
export class EnchantementSublimationsCommunityComponent {
    private readonly supabaseService = inject(SupabaseService);
    private readonly classeFormService = inject(ClasseFormService);
    private readonly chasseFormService = inject(ChasseFormService);
    private readonly sublimationsService = inject(SublimationService);

    private readonly mapSublimationConseilleeCount = new Map<string, number>();
    private readonly mapSublimationConseilleeCountEpic = new Map<string, number>();
    private readonly mapSublimationConseilleeCountRelic = new Map<string, number>();

    private readonly sublimationsConseillees = toSignal(this.classeFormService.classe$.pipe(
        switchMap(classe => this.supabaseService.getSublimationsConseillees(classe)),
        tap(() => {
            this.mapSublimationConseilleeCount.clear();
            this.mapSublimationConseilleeCountEpic.clear();
            this.mapSublimationConseilleeCountRelic.clear();
        }),
        tap(sublimationsConseillees => this.fillMapSublimationsConseillees(sublimationsConseillees)),
        map(() => {
            const topSublimationsConseillees = this.keepSublimationsMoreUsed(this.mapSublimationConseilleeCount, 6);
            const topSublimationsConseilleesEpic = this.keepSublimationsMoreUsed(this.mapSublimationConseilleeCountEpic, 2);
            const topSublimationsConseilleesRelic = this.keepSublimationsMoreUsed(this.mapSublimationConseilleeCountRelic, 2);
            return [...topSublimationsConseillees, ...topSublimationsConseilleesEpic, ...topSublimationsConseilleesRelic];
        })
    ));

    protected readonly sublimationsConseilleesClassique: Signal<SublimationsDescriptions[]> =
        computed(() => {
            const sublimationsConseillees = this.sublimationsConseillees();
            if (!sublimationsConseillees || sublimationsConseillees.length === 0) {
                return [];
            }
            return sublimationsConseillees.filter(s => !s.isEpic && !s.isRelic);
        });

    protected readonly sublimationsConseilleesEpicRelic: Signal<SublimationsDescriptions[]> =
        computed(() => {
            const sublimationsConseillees = this.sublimationsConseillees();
            if (!sublimationsConseillees || sublimationsConseillees.length === 0) {
                return [];
            }
            return sublimationsConseillees.filter(s => s.isEpic || s.isRelic);
        });

    private keepSublimationsMoreUsed(map: Map<string, number>, nbElements: number): SublimationsDescriptions[] {
        const sortedSublimations = Array.from(map.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(0, nbElements)
            .map(entry => entry[0]);

        const sublimationsDescriptions: SublimationsDescriptions[] = [];
        sortedSublimations.forEach(sublimationId => {
            const sublimation = this.sublimationsService.getSublimationById(parseInt(sublimationId, 10));
            if (sublimation) {
                sublimationsDescriptions.push(sublimation);
            }
        });

        return sublimationsDescriptions;
    }

    private fillMapSublimationsConseillees(sublimationsConseillees: string[]): void {
        sublimationsConseillees.forEach(sublimationsCode => {
            const sublimations = this.chasseFormService.getSublimationIdsByCode(sublimationsCode);
            sublimations.forEach(sublimationId => {
                this.incrementalMapCount(sublimationId, this.mapSublimationConseilleeCount);
            });

            const sublimationEpic = this.chasseFormService.getSublimationIdEpiqueByCode(sublimationsCode);
            if (sublimationEpic) {
                this.incrementalMapCount(sublimationEpic, this.mapSublimationConseilleeCountEpic);
            }

            const sublimationRelic = this.chasseFormService.getSublimationIdReliqueByCode(sublimationsCode);
            if (sublimationRelic) {
                this.incrementalMapCount(sublimationRelic, this.mapSublimationConseilleeCountRelic);
            }
        });
    }

    private incrementalMapCount(sublimationId: string, map: Map<string, number>): void {
        const count = map.get(sublimationId) ?? 0;
        map.set(sublimationId, count + 1);
    }
}
