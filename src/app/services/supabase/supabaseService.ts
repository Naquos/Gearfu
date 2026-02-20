import { Injectable } from "@angular/core";
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { from, map, Observable } from "rxjs";
import { Build } from "../../models/data/build";

@Injectable({providedIn: 'root'})
export class SupabaseService {
    private readonly supabase: SupabaseClient;
    constructor() {
        const supabaseUrl = 'https://nsxhzgbzihkpltpsqpip.supabase.co';
        const supabaseKey = 'sb_publishable_4twYhHBfyncLO2Fq8YLSLA_GaUjMka1';
        this.supabase = createClient(supabaseUrl, supabaseKey);
    }

    public getBuildsList(): Observable<Build[]> {
        return from(this.supabase.from('build').select('*')).pipe(
            map(({ data, error }) => {
                if (error) {
                    throw error;
                }
                return (data ?? []) as Build[];
            })
        );
    }
}