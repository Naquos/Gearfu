import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap, tap } from 'rxjs';
import { ClasseFormService } from '../../../services/form/classeFormService';
import { SupabaseService } from '../../../services/supabase/supabaseService';
import { SortService } from '../../../services/data/sortService';
import { DescriptionSort } from '../../../models/data/descriptionSort';
import { SortImageComponent } from '../sort-image/sort-image.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-sorts-conseilles',
    imports: [SortImageComponent, TranslateModule],
    templateUrl: './sorts-conseilles.component.html',
    styleUrl: './sorts-conseilles.component.scss'
})
export class SortsConseillesComponent {
    private readonly classeFormService = inject(ClasseFormService);
    private readonly sortService = inject(SortService);
    private readonly supabaseService = inject(SupabaseService);

    private readonly countSortNeutreConseilles = new Map<string, number>();
    private readonly countSortPassifConseilles = new Map<string, number>();
    private readonly nbDeckSorts = signal(0);
    private readonly MAX_SORTS = 18;
    private readonly MAX_SORTS_NEUTRE = 12;
    private readonly MAX_SORTS_PASSIF = 6;

    private readonly sortsConseilles = toSignal(this.classeFormService.classe$.pipe(
        switchMap(classe => this.supabaseService.getSortsConseillees(classe)),
        tap(() => {
            this.countSortNeutreConseilles.clear();
            this.countSortPassifConseilles.clear();
        }),
        tap(sorts => this.nbDeckSorts.set(sorts.length)),
        tap(sorts => this.fillCounts(sorts)),
        map(() => this.keepBestSortsConseilles())
    ), {
        initialValue: [] as DescriptionSort[]
    });

    protected readonly sortsNeutreConseilles = computed(() => this.sortsConseilles().slice(0, this.MAX_SORTS_NEUTRE));

    protected readonly sortsPassifConseilles = computed(() => this.sortsConseilles().slice(this.MAX_SORTS_NEUTRE, this.MAX_SORTS));

    /**
     * Calcule le ratio d'utilisation d'un sort neutre conseillé parmi les decks de sorts conseillés, en utilisant les compteurs remplis à partir des données récupérées
     * @param sort 
     * @returns 
     */
    protected ratioUsageSortNeutre(sort: DescriptionSort): string {
        const count = this.countSortNeutreConseilles.get(sort.gfxId.toString()) || 0;
        return this.nbDeckSorts() > 0 ? `${Math.round((count / this.nbDeckSorts()) * 100)}%` : '0%';
    }

    /**
     * Calcule le ratio d'utilisation d'un sort passif conseillé parmi les decks de sorts conseillés, en utilisant les compteurs remplis à partir des données récupérées
     * @param sort 
     * @returns 
     */
    protected ratioUsageSortPassif(sort: DescriptionSort): string {
        const count = this.countSortPassifConseilles.get(sort.gfxId.toString()) || 0;
        return this.nbDeckSorts() > 0 ? `${Math.round((count / this.nbDeckSorts()) * 100)}%` : '0%';
    }

    /**
     * Garde uniquement les sorts conseillés les plus utilisés, en fonction des compteurs remplis 
     * @returns 
     */
    private keepBestSortsConseilles(): DescriptionSort[] {
        const bestSortsNeutre = Array.from(this.countSortNeutreConseilles.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(0, this.MAX_SORTS_NEUTRE)
            .map(entry => parseInt(entry[0], 10))
            .map(id => this.sortService.getDescriptionSortNeutreById(id))
            .filter((x): x is DescriptionSort => !!x);

        const bestSortsPassif = Array.from(this.countSortPassifConseilles.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(0, this.MAX_SORTS_PASSIF)
            .map(entry => parseInt(entry[0], 10))
            .map(id => this.sortService.getDescriptionSortPassifById(id))
            .filter((x): x is DescriptionSort => !!x);

        return [...bestSortsNeutre, ...bestSortsPassif];
    }

    /**
     * Remplit les compteurs de sorts conseillés à partir des données récupérées
     * @param sorts
     */
    private fillCounts(sorts: string[]): void {
        sorts.forEach(sort => {
            const idsSorts = sort.split('-');
            if (idsSorts.length !== this.MAX_SORTS) {
                return; // Ignore les entrées mal formées
            }
            const idsSortsNeutre = idsSorts.slice(0, this.MAX_SORTS_NEUTRE);
            const idsSortsPassif = idsSorts.slice(this.MAX_SORTS_NEUTRE);
            idsSortsNeutre.forEach(id => this.incrementCount(this.countSortNeutreConseilles, id));
            idsSortsPassif.forEach(id => this.incrementCount(this.countSortPassifConseilles, id));
        });
    }

    /**
     * Incrémente le compteur pour un sort conseillé
     * @param map
     * @param key
     */
    private incrementCount(map: Map<string, number>, key: string): void {
        if (key === '0') {
            return; // Ignore les sorts non conseillés (ID 0)
        }
        const currentCount = map.get(key) || 0;
        map.set(key, currentCount + 1);
    }
}
