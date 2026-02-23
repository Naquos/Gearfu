import { inject, Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { catchError, from, map, Observable, of } from "rxjs";
import { Build } from "../../models/data/build";
import { KeyEnum } from "../../models/enum/keyEnum";
import { LocalStorageService } from "../data/localStorageService";
import { Statistics } from "../../models/data/statistics";
import { ClassIdEnum } from "../../models/enum/classIdEnum";
import { OrderBySearchBuildEnum } from "../../models/enum/orderBySearchBuildEnum";

let browserSupabaseClient: SupabaseClient | null = null;

@Injectable({providedIn: 'root'})
export class SupabaseService {
    private readonly supabase: SupabaseClient;
    private readonly isBrowser: boolean;
    private readonly localStorageService = inject(LocalStorageService);

    constructor(@Inject(PLATFORM_ID) platformId: object) {
        this.isBrowser = isPlatformBrowser(platformId);
        const supabaseUrl = 'https://nsxhzgbzihkpltpsqpip.supabase.co';
        const supabaseKey = 'sb_publishable_4twYhHBfyncLO2Fq8YLSLA_GaUjMka1';

        if (!this.isBrowser) {
            this.supabase = null as unknown as SupabaseClient;
            return;
        }

        if (!browserSupabaseClient) {
            browserSupabaseClient = createClient(supabaseUrl, supabaseKey, {
                auth: {
                    persistSession: false,
                    autoRefreshToken: false,
                    detectSessionInUrl: false,
                },
            });
        }

        this.supabase = browserSupabaseClient;
    }

    public getBuildsList(): Observable<Build[]> {
        if (!this.isBrowser) {
            return of([]);
        }
        return from(this.supabase.from('build').select('*')).pipe(
            map(({ data, error }) => {
                if (error) {
                    throw error;
                }
                return (data ?? []) as Build[];
            })
        );
    }

    /**
     * Récupère la liste des builds triée par le nombre de maitrises décroissant
     * avec leur statistiques associées
     * @returns 
     */
    public getBuildsListByFilter(
        lvlMin = 200,
        lvlMax = 245,
        classe: ClassIdEnum = ClassIdEnum.Feca,
        orderBy: OrderBySearchBuildEnum = OrderBySearchBuildEnum.maitrises,
        PA = 6,
        PM = 3,
        PW = 6,
        PO = 0,
        CC = 0,
        parade = 0
    ): Observable<{ build: Build, statistics: Statistics | null }[]> {
        if (!this.isBrowser) {
            return of([]);
        }
        // Si jamais l'utilisateur ne souhaite pas filtrer sur une statistique, on met une valeur très basse pour ne pas exclure de résultats
        const _PA = !PA || PA <= 0 ? -100 : PA;
        const _PM = !PM || PM <= 0 ? -100 : PM;
        const _PW = !PW || PW <= 0 ? -100 : PW;
        const _PO = !PO || PO <= 0 ? -100 : PO;
        const _CC = !CC || CC <= 0 ? -100 : CC;
        const _parade = !parade || parade <= 0 ? -100 : parade;
        const _levelMin = !lvlMin || lvlMin <= 0 ? 0 : lvlMin;
        const _levelMax = !lvlMax || lvlMax <= 0 ? 999 : lvlMax;

        // On part de statistics pour trier directement sur la colonne maitrises,
        // puis on récupère le build lié via jointure.
        return from(this.supabase.from('statistics')
            .select('*, build!inner(*)')
            .eq('build.classe', classe)
            .neq('build.itemsId', '') // On filtre pour n'avoir que les builds avec des items
            .gte('build.level', _levelMin)
            .lte('build.level', _levelMax)
            .gt('maitrises', 40) // On filtre pour n'avoir que les builds avec au moins 40 maitrise qui est la valeur par défaut donnée par la guilde
            .gte('PA', _PA)
            .gte('PM', _PM)
            .gte('PW', _PW)
            .gte('PO', _PO)
            .gte('CC', _CC)
            .gte('parade', _parade)
            .order(orderBy, { ascending: false })
            .limit(100)
        ).pipe(
            map(({ data, error }) => {
                if (error) {
                    throw error;
                }
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return (data ?? []).map((item: any) => {
                    const { build, ...statistics } = item;
                    return {
                        build: Array.isArray(build) ? (build[0] as Build) : (build as Build),
                        statistics: statistics as Statistics,
                    };
                });
            })
        );
    }

    public getBuildById(id: string): Observable<Build | null> {
        if (!this.isBrowser) {
            return of(null);
        }
        return from(this.supabase.from('build').select('*').eq('id', id).single()).pipe(
            map(({ data, error }) => {
                if (error) {
                    throw error;
                }
                return (data as Build) ?? null;
            })
        );
    }

    public createEmptyBuild(): Observable<Build | null> {
        if (!this.isBrowser) {
            return of(null);
        }
        const newBuild: Omit<Build, 'id'> = {
            nameBuild: 'Nouveau build',
            classe: 1,
            level: 200,
            itemsId: '',
            aptitudes: '',
            sorts: '0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0',
            enchantement: '',
            elementSelector: '',
            compressed: false,
            token: this.localStorageService.getItem<string>(KeyEnum.KEY_TOKEN) || '',
        };
        return from(this.supabase.from('build').insert([newBuild]).select()).pipe(
            map(({ data, error }) => {
                if (error) {
                    throw error;
                }
                return (data[0] as Build) ?? null;
            })
        );
    }

    public updateBuild(build: Build): Observable<void> {
        if (!this.isBrowser) {
            return of(undefined);
        }
        if(!build.id) {
            throw new Error('Build ID is required for update');
        }
        return from(this.supabase.from('build').update(build).eq('id', build.id)).pipe(
            map(({ error }) => {
                if (error) {
                    throw error;
                }
            })
        );
    }

    /**
     * Crée une nouvelle entrée de statistiques pour un build donné
     * @param buildId
     * @returns 
     */
    public createEmptyStatistics(buildId: string): Observable<Statistics | null> {
        if (!this.isBrowser) {
            return of(null);
        }
        const newStatistics: Omit<Statistics, 'id'> = {
            buildId: buildId,
            PA: 0,
            PM: 0,
            PW: 0,
            PO: 0,
            CC: 0,
            parade: 0,
            maitrises: 0,
            resistances: 0,
            poids: 0,
        };
        return from(this.supabase.from('statistics').insert([newStatistics]).select()).pipe(
            map(({ data, error }) => {
                if (error) {
                    throw error;
                }
                return (data[0] as Statistics) ?? null;
            })
        );
    }

    /**
     * Crée les statistiques d'un build à partir d'un objet Statistics
     * @param statistics 
     * @returns 
     */
    public createStatistics(statistics: Statistics): Observable<Statistics | null> {
        if (!this.isBrowser) {
            return of(null);
        }
        const newStatistics: Omit<Statistics, 'id'> = {
            token: statistics.token || this.localStorageService.getItem<string>(KeyEnum.KEY_TOKEN) || '',
            buildId: statistics.buildId || '',
            PA: statistics.PA,
            PM: statistics.PM,
            PW: statistics.PW,
            PO: statistics.PO,
            CC: statistics.CC,
            parade: statistics.parade,
            maitrises: statistics.maitrises,
            resistances: statistics.resistances,
            poids: statistics.poids,
        };
        return from(this.supabase.from('statistics').insert([newStatistics]).select()).pipe(
            map(({ data, error }) => {
                if (error) {
                    throw error;
                }
                return (data[0] as Statistics) ?? null;
            })
        );
    }


    /**
     * Met à jour les statistiques d'un build s'il existe ou les crée sinon
     * @param statistics 
     * @returns 
     */
    public updateOrCreateStatistics(statistics: Statistics): Observable<void> {
        if (!this.isBrowser) {
            return of(undefined);
        }
        if(!statistics.id) {
            return this.getStatisticsByBuildId(statistics?.buildId ?? "").pipe(
                map(existingStats => {
                    if (existingStats) {
                        // Si les statistiques existent déjà, on les met à jour
                        this.updateOrCreateStatistics({ ...statistics, id: existingStats.id }).subscribe();
                    }
                }),
                catchError(() => {// Si une erreur survient (par exemple si les statistiques n'existent pas), on les crée
                    return this.createStatistics(statistics).pipe(
                        map(() => undefined)
                    );
                })
            );
        }
        return from(this.supabase.from('statistics').update(statistics).eq('id', statistics.id)).pipe(
            map(({ error }) => {
                if (error) {
                    throw error;
                }
            })
        );
    }

    /**
     * Récupère les statistiques d'un build donné
     * @param buildId
     * @returns
     */
    public getStatisticsByBuildId(buildId: string): Observable<Statistics | null> {
        if (!this.isBrowser) {
            return of(null);
        }
        return from(this.supabase.from('statistics').select('*').eq('buildId', buildId).single()).pipe(
            map(({ data, error }) => {
                if (error) {
                    throw error;
                }
                return (data as Statistics) ?? null;
            })
        );
    }
}