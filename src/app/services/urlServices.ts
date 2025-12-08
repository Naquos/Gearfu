import { inject, Injectable } from "@angular/core";
import { AbstractDestroyService } from "./abstract/abstractDestroyService";
import { ActivatedRoute, Router } from "@angular/router";
import { map, startWith, takeUntil } from "rxjs";
import { KeyEnum } from "../models/enum/keyEnum";
import { LocalStorageService } from "./data/localStorageService";
import { ClassIdEnum } from "../models/enum/classIdEnum";
import * as LZString from "lz-string";

interface UrlParams {
    level?: number;
    itemsId?: string;
    classe?: ClassIdEnum;
    aptitudes?: string;
    sorts?: string;
    enchantement?: string;
    // Paramètre indiquant si les données sont compressées
    c?: '1';
}

@Injectable({providedIn: 'root'})
export class UrlServices extends AbstractDestroyService {

    private initialParams: UrlParams = this.getInitialQueryParams();

    private readonly localStorageService = inject(LocalStorageService);
    private readonly activatedRoute = inject(ActivatedRoute);
    private readonly router = inject(Router);

    // Seuil de longueur à partir duquel on compresse (en caractères)
    private readonly COMPRESSION_THRESHOLD = 50;
        

    public readonly itemsId$ = this.activatedRoute.queryParams.pipe(
        startWith(this.initialParams),
        map(x => {
            const fromUrl = x["itemsId"] as string | undefined;
            const fromStorage = this.localStorageService.getItem<string>(KeyEnum.KEY_BUILD);
            return fromUrl || fromStorage || "";
        }),
        takeUntil(this.destroy$)
    );

    public setItemsIdInUrl(itemsId: string): void {
        this.initialParams.itemsId = itemsId;
        this.router.navigate([], {
            queryParams: this.initialParams,
            queryParamsHandling: 'merge'
        });
    }

    public setLevelInUrl(level: number): void {
        this.initialParams.level = level;
        this.router.navigate([], {
            queryParams: this.initialParams,
            queryParamsHandling: 'merge'
        });
    }

    public getLevelFromUrl(): number | undefined {
        return this.initialParams?.level
    }

    public setClasseInUrl(classe: ClassIdEnum): void {
        this.initialParams.classe = classe;
        this.router.navigate([], {
            queryParams: this.initialParams,
            queryParamsHandling: 'merge'
        });
    }

    public getClasseFromUrl(): ClassIdEnum | undefined {
        return this.initialParams?.classe
    }

    public setAptitudesInUrl(aptitudes: string): void {
        this.updateUrlParams({ aptitudes });
    }

    public getAptitudesFromUrl(): string | undefined {
        const isCompressed = this.initialParams?.c === '1';
        return this.decompressIfNeeded(this.initialParams?.aptitudes || '', isCompressed);
    }

    public setSortsInUrl(sorts: string): void {
        this.updateUrlParams({ sorts });
    }

    public getSortsFromUrl(): string | undefined {
        const isCompressed = this.initialParams?.c === '1';
        return this.decompressIfNeeded(this.initialParams?.sorts || '', isCompressed);
    }

    public setEnchantementInUrl(enchantement: string): void {
        this.updateUrlParams({ enchantement });
    }

    public getEnchantementFromUrl(): string | undefined {
        const isCompressed = this.initialParams?.c === '1';
        return this.decompressIfNeeded(this.initialParams?.enchantement || '', isCompressed);
    }

    /**
     * Récupère l'itemsId depuis l'URL
     */
    public getItemsIdFromUrl(): string | undefined {
        return this.initialParams?.itemsId;
    }

    /**
     * Vérifie si les données sont compressées
     */
    public isCompressed(): boolean {
        return this.initialParams?.c === '1';
    }

    /**
     * Compresse une chaîne si elle dépasse le seuil de compression
     * Retourne la chaîne compressée et indique si une compression a été appliquée
     */
    private compressIfNeeded(data: string): { compressed: string; isCompressed: boolean } {
        if (!data || data.length < this.COMPRESSION_THRESHOLD) {
            return { compressed: data, isCompressed: false };
        }

        try {
            // Utiliser compressToBase64 pour éviter les problèmes d'encodage URL
            const compressed = LZString.compressToBase64(data);
            // Ne compresser que si cela réduit significativement la taille (au moins 20%)
            if (compressed && compressed.length < data.length * 0.8) {
                return { compressed, isCompressed: true };
            }
        } catch (error) {
            console.error('Error compressing data:', error);
        }

        return { compressed: data, isCompressed: false };
    }

    /**
     * Décompresse une chaîne si elle a été compressée
     * Tente d'abord la décompression, sinon retourne la chaîne telle quelle
     * Gère la rétrocompatibilité avec l'ancien format EncodedURIComponent
     * Détecte automatiquement si les données sont compressées même sans flag
     */
    private decompressIfNeeded(data: string, isCompressed: boolean): string {
        if (!data) {
            return data;
        }

        // Si le flag indique que c'est compressé OU si la longueur suggère une compression
        // (les données compressées sont généralement plus courtes et contiennent des caractères Base64)
        const looksLikeCompressed = data.length < this.COMPRESSION_THRESHOLD && /^[A-Za-z0-9+/=]+$/.test(data);
        
        if (!isCompressed && !looksLikeCompressed) {
            return data;
        }

        try {
            // Essayer d'abord Base64 (nouveau format)
            let decompressed = LZString.decompressFromBase64(data);
            
            // Si échec, essayer EncodedURIComponent (ancien format pour rétrocompatibilité)
            if (!decompressed) {
                decompressed = LZString.decompressFromEncodedURIComponent(data);
            }
            
            // Si la décompression réussit, retourner le résultat, sinon retourner l'original
            return decompressed || data;
        } catch (error) {
            console.error('Error decompressing data:', error);
            return data;
        }
    }

    /**
     * Met à jour les paramètres URL en appliquant la compression si nécessaire
     */
    private updateUrlParams(newParams: Partial<UrlParams>): void {
        let needsCompression = false;

        // Vérifier si on doit compresser les paramètres
        const compressedParams: Partial<UrlParams> = { ...newParams };

        if (newParams.sorts) {
            const result = this.compressIfNeeded(newParams.sorts);
            compressedParams.sorts = result.compressed;
            needsCompression = needsCompression || result.isCompressed;
        }

        if (newParams.aptitudes) {
            const result = this.compressIfNeeded(newParams.aptitudes);
            compressedParams.aptitudes = result.compressed;
            needsCompression = needsCompression || result.isCompressed;
        }

        if (newParams.enchantement) {
            const result = this.compressIfNeeded(newParams.enchantement);
            compressedParams.enchantement = result.compressed;
            needsCompression = needsCompression || result.isCompressed;
        }

        // Ajouter le flag de compression si nécessaire
        if (needsCompression) {
            compressedParams.c = '1';
        } else if (!this.hasOtherCompressedParams(newParams)) {
            // Retirer le flag si plus rien n'est compressé
            compressedParams.c = undefined;
        }

        // Mettre à jour les paramètres
        Object.assign(this.initialParams, compressedParams);

        this.router.navigate([], {
            queryParams: this.initialParams,
            queryParamsHandling: 'merge'
        });
    }

    /**
     * Vérifie si d'autres paramètres sont encore compressés
     */
    private hasOtherCompressedParams(excludeParams: Partial<UrlParams>): boolean {
        const keysToCheck: (keyof UrlParams)[] = ['sorts', 'aptitudes', 'enchantement'];
        
        for (const key of keysToCheck) {
            if (!(key in excludeParams) && this.initialParams[key]) {
                const value = this.initialParams[key] as string;
                if (value && value.length >= this.COMPRESSION_THRESHOLD) {
                    return true;
                }
            }
        }
        
        return false;
    }

    /**
     * Extrait les query params depuis window.location au chargement initial
     * Utile pour le SSR et le premier chargement
     */
    private getInitialQueryParams(): UrlParams {
        if (typeof window === 'undefined') {
            return {};
        }
        
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const params: UrlParams = {};
            
            // Vérifier si les données sont compressées
            const isCompressed = urlParams.get('c') === '1';
            if (isCompressed) {
                params.c = '1';
            }
            
            const itemsId = urlParams.get('itemsId');
            if (itemsId) {
                params.itemsId = itemsId;
            }
            
            const level = urlParams.get('level');
            if (level) {
                params.level = parseInt(level, 10);
            }

            const classe = urlParams.get('classe');
            if (classe) {
                params.classe = parseInt(classe, 10) as ClassIdEnum;
            }

            const aptitudes = urlParams.get('aptitudes');
            if (aptitudes) {
                params.aptitudes = this.decompressIfNeeded(aptitudes, isCompressed);
            }

            const sorts = urlParams.get('sorts');
            if (sorts) {
                params.sorts = this.decompressIfNeeded(sorts, isCompressed);
            }

            const enchantement = urlParams.get('enchantement');
            if (enchantement) {
                params.enchantement = this.decompressIfNeeded(enchantement, isCompressed);
            }
            
            return params;
        } catch (error) {
            console.error("Error parsing query params:", error);
            return {};
        }
    }
}