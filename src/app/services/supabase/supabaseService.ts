import { inject, Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { from, map, Observable, of } from "rxjs";
import { Build } from "../../models/data/build";
import { KeyEnum } from "../../models/enum/keyEnum";
import { LocalStorageService } from "../data/localStorageService";
import { Statistics } from "../../models/data/statistics";

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
    public getBuildsListOrderByStatistiquesMaitrises(): Observable<{ build: Build, statistics: Statistics | null }[]> {
        if (!this.isBrowser) {
            return of([]);
        }

        // On a une table build et une table statistics où on doit faire une jointure sur
        // build.id = statistics.buildId et trier par statistics.maitrises
        return from(this.supabase.from('build')
            .select('*, statistics!inner(*)')
            .order('maitrises', { ascending: false, foreignTable: 'statistics' }).limit(100)
        ).pipe(
            map(({ data, error }) => {
                if (error) {
                    throw error;
                }
                // On doit extraire les builds de la réponse
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return (data ?? []).map((item: any) => {
                    const { statistics, ...build } = item;
                    console.log('Build récupéré :', build, statistics.maitrises);
                    return { build: build as Build, statistics: statistics as Statistics | null };
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
            return this.createStatistics(statistics).pipe(
                map(() => undefined)
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