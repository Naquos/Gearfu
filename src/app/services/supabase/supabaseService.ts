import { inject, Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { from, map, Observable, of } from "rxjs";
import { Build } from "../../models/data/build";
import { KeyEnum } from "../../models/enum/keyEnum";
import { LocalStorageService } from "../data/localStorageService";

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
        return from(this.supabase.from('build').update(build).eq('id', build.id)).pipe(
            map(({ error }) => {
                if (error) {
                    throw error;
                }
            })
        );
    }
}