import { Component, Signal, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap, tap } from 'rxjs';
import { SublimationsDescriptions } from '../../../models/data/sublimationsDescriptions';
import { ClasseFormService } from '../../../services/form/classeFormService';
import { ChasseFormService } from '../../../services/form/chasseFormService';
import { SublimationService } from '../../../services/data/sublimationService';
import { SupabaseService } from '../../../services/supabase/supabaseService';
import { EnchantementSublimationsClassiquesComponent } from '../enchantement-sublimations-classiques/enchantement-sublimations-classiques.component';
import { EnchantementSublimationsEpiquesReliquesComponent } from '../enchantement-sublimations-epiques-reliques/enchantement-sublimations-epiques-reliques.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-enchantement-sublimations-community',
    imports: [
        EnchantementSublimationsClassiquesComponent,
        EnchantementSublimationsEpiquesReliquesComponent,
        TranslateModule
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
    private readonly nbSublimationsClassiquesConseillees = 10;
    private readonly nbSublimationsEpiquesReliquesConseillees = 4;
    private readonly nbDeckAvecSublimationClassiqueConseillee = signal(0);
    private readonly nbDeckAvecSublimationEpicConseillee = signal(0);
    private readonly nbDeckAvecSublimationRelicConseillee = signal(0);

    private readonly sublimationsConseillees = toSignal(this.classeFormService.classe$.pipe(
        switchMap(classe => this.supabaseService.getSublimationsConseillees(classe)),
        tap(() => {
            this.mapSublimationConseilleeCount.clear();
            this.mapSublimationConseilleeCountEpic.clear();
            this.mapSublimationConseilleeCountRelic.clear();
        }),
        tap(sublimationsConseillees => this.fillMapSublimationsConseillees(sublimationsConseillees)),
        map(() => {
            const topSublimationsConseillees = this.keepSublimationsMoreUsed(this.mapSublimationConseilleeCount,
                this.nbSublimationsClassiquesConseillees);
            const topSublimationsConseilleesEpic = this.keepSublimationsMoreUsed(this.mapSublimationConseilleeCountEpic,
                this.nbSublimationsEpiquesReliquesConseillees);
            const topSublimationsConseilleesRelic = this.keepSublimationsMoreUsed(this.mapSublimationConseilleeCountRelic,
                this.nbSublimationsEpiquesReliquesConseillees);
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

    /**
     * Calcule le ratio d'utilisation d'une sublimation conseillée parmi les decks de sublimations conseillées,
     * en utilisant les compteurs remplis à partir des données récupérées
     * @param sublimation 
     * @returns 
     */
    protected ratioUsageSublimation(sublimation: SublimationsDescriptions): string {
        if (sublimation.isEpic) {
            const count = this.mapSublimationConseilleeCountEpic.get(sublimation.id.toString()) ?? 0;
            return this.nbDeckAvecSublimationEpicConseillee() > 0 ? `${Math.round((count / this.nbDeckAvecSublimationEpicConseillee()) * 100)}%` : '0%';
        }
        if (sublimation.isRelic) {
            const count = this.mapSublimationConseilleeCountRelic.get(sublimation.id.toString()) ?? 0;
            return this.nbDeckAvecSublimationRelicConseillee() > 0 ? `${Math.round((count / this.nbDeckAvecSublimationRelicConseillee()) * 100)}%` : '0%';
        }
        const count = this.mapSublimationConseilleeCount.get(sublimation.id.toString()) ?? 0;
        return this.nbDeckAvecSublimationClassiqueConseillee() > 0 ? `${Math.round((count / this.nbDeckAvecSublimationClassiqueConseillee()) * 100)}%` : '0%';
    }


    /**
     * Garde uniquement les sublimations conseillées les plus utilisées, en fonction des compteurs remplis
     * @param map 
     * @param nbElements 
     * @returns 
     */
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

    /**
     * Garde uniquement les éléments distincts d'une liste de chaînes de caractères
     * @param list 
     * @returns 
     */
    private distinctElementsList(list: string[]): string[] {
        return Array.from(new Set(list));
    }

    /**
     * Remplit les compteurs de sublimations conseillées à partir des données récupérées
     * @param sublimationsConseillees 
     */
    private fillMapSublimationsConseillees(sublimationsConseillees: string[]): void {
        let nbDeckAvecSublimationClassiqueConseillee = 0;
        let nbDeckAvecSublimationEpicConseillee = 0;
        let nbDeckAvecSublimationRelicConseillee = 0;
        sublimationsConseillees.forEach(sublimationsCode => {
            const sublimations = this.chasseFormService.getSublimationIdsByCode(sublimationsCode);
            if (sublimations.length > 0) {
                nbDeckAvecSublimationClassiqueConseillee++;
                const distinctSublimations = this.distinctElementsList(sublimations);
                distinctSublimations.forEach(sublimationId => {
                    this.incrementalMapCount(sublimationId, this.mapSublimationConseilleeCount);
                });
            }

            const sublimationEpic = this.chasseFormService.getSublimationIdEpiqueByCode(sublimationsCode);
            if (sublimationEpic) {
                nbDeckAvecSublimationEpicConseillee++;
                this.incrementalMapCount(sublimationEpic, this.mapSublimationConseilleeCountEpic);
            }

            const sublimationRelic = this.chasseFormService.getSublimationIdReliqueByCode(sublimationsCode);
            if (sublimationRelic) {
                nbDeckAvecSublimationRelicConseillee++;
                this.incrementalMapCount(sublimationRelic, this.mapSublimationConseilleeCountRelic);
            }
        });
        this.nbDeckAvecSublimationClassiqueConseillee.set(nbDeckAvecSublimationClassiqueConseillee);
        this.nbDeckAvecSublimationEpicConseillee.set(nbDeckAvecSublimationEpicConseillee);
        this.nbDeckAvecSublimationRelicConseillee.set(nbDeckAvecSublimationRelicConseillee);
    }

    /**
     * Incrémente le compteur pour une sublimation conseillée
     * @param sublimationId 
     * @param map 
     */
    private incrementalMapCount(sublimationId: string, map: Map<string, number>): void {
        const count = map.get(sublimationId) ?? 0;
        map.set(sublimationId, count + 1);
    }
}
