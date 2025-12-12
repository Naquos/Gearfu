import { inject, Injectable, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { AbstractDestroyService } from "./abstract/abstractDestroyService";
import { ActivatedRoute, Router } from "@angular/router";
import { map, takeUntil, distinctUntilChanged } from "rxjs";
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
    aptitudesManual?: string;
    // Paramètre indiquant si les données sont compressées
    c?: '1';
}

@Injectable({providedIn: 'root'})
export class UrlServices extends AbstractDestroyService {

    private _initialParams: UrlParams | null = null;

    private readonly localStorageService = inject(LocalStorageService);
    private readonly activatedRoute = inject(ActivatedRoute);
    private readonly router = inject(Router);
    private readonly platformId = inject(PLATFORM_ID);
    private readonly isBrowser = isPlatformBrowser(this.platformId);

    // Seuil de longueur à partir duquel on compresse (en caractères)
    private readonly COMPRESSION_THRESHOLD = 50;

    constructor() {
        super();
        // Écouter les changements de hash pour mettre à jour les paramètres
        if (this.isBrowser) {
            window.addEventListener('hashchange', () => {
                this._initialParams = this.getInitialHashParams();
            });
        }
    }

    /**
     * Getter paresseux pour les paramètres initiaux
     * Parse les paramètres uniquement quand ils sont demandés pour la première fois
     */
    private get initialParams(): UrlParams {
        if (this._initialParams === null) {
            this._initialParams = this.getInitialHashParams();
        }
        return this._initialParams;
    }

    /**
     * Setter pour les paramètres initiaux
     */
    private set initialParams(value: UrlParams) {
        this._initialParams = value;
    }
        

    public readonly itemsId$ = this.activatedRoute.fragment.pipe(
        map(() => {
            const fromUrl = this.getItemsIdFromUrl();
            const fromStorage = this.localStorageService.getItem<string>(KeyEnum.KEY_BUILD);
            return fromUrl || fromStorage || "";
        }),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
    );

    public setItemsIdInUrl(itemsId: string): void {
        if (!this.isBrowser) {
            return; // Ne pas naviguer côté serveur
        }
        if (this.initialParams.itemsId === itemsId) {
            return; // Éviter les navigations inutiles
        }
        this.initialParams.itemsId = itemsId;
        this.updateHash();
    }

    public setLevelInUrl(level: number): void {
        if (!this.isBrowser) {
            return; // Ne pas naviguer côté serveur
        }
        if (this.initialParams.level === level) {
            return; // Éviter les navigations inutiles
        }
        this.initialParams.level = level;
        this.updateHash();
    }

    public getLevelFromUrl(): number | undefined {
        return this.initialParams?.level
    }

    public setClasseInUrl(classe: ClassIdEnum): void {
        if (!this.isBrowser) {
            return; // Ne pas naviguer côté serveur
        }
        if (this.initialParams.classe === classe) {
            return; // Éviter les navigations inutiles
        }
        this.initialParams.classe = classe;
        this.updateHash();
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

    public setAptitudesManualInUrl(aptitudesManual: string): void {
        this.updateUrlParams({ aptitudesManual });
    }

    public getAptitudesManualFromUrl(): string | undefined {
        const isCompressed = this.initialParams?.c === '1';
        return this.decompressIfNeeded(this.initialParams?.aptitudesManual || '', isCompressed);
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
            // Utiliser compressToEncodedURIComponent pour être compatible avec les hash URLs
            const compressed = LZString.compressToEncodedURIComponent(data);
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
     * Gère la rétrocompatibilité avec l'ancien format Base64
     * Détecte automatiquement si les données sont compressées même sans flag
     */
    private decompressIfNeeded(data: string, isCompressed: boolean): string {
        if (!data) {
            return data;
        }

        // Si le flag indique que c'est compressé, on tente la décompression
        if (!isCompressed) {
            // Vérifier si ça ressemble à des données compressées
            const looksLikeCompressed = data.length > 20 && (
                /^[A-Za-z0-9\-_]+$/.test(data) || // EncodedURIComponent format
                /^[A-Za-z0-9+/=]+$/.test(data)    // Base64 format
            );
            
            if (!looksLikeCompressed) {
                return data;
            }
        }

        try {
            // Essayer d'abord EncodedURIComponent (nouveau format pour hash URLs)
            let decompressed = LZString.decompressFromEncodedURIComponent(data);
            
            // Si échec, essayer Base64 (ancien format pour rétrocompatibilité avec query params)
            if (!decompressed) {
                decompressed = LZString.decompressFromBase64(data);
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
        if (!this.isBrowser) {
            return; // Ne pas naviguer côté serveur
        }
        
        let needsCompression = false;
        let hasChanges = false;

        // Vérifier si on doit compresser les paramètres
        if (newParams.sorts !== undefined) {
            const result = this.compressIfNeeded(newParams.sorts);
            if (this.initialParams.sorts !== result.compressed) {
                this.initialParams.sorts = result.compressed;
                hasChanges = true;
            }
            needsCompression = needsCompression || result.isCompressed;
        }

        if (newParams.aptitudes !== undefined) {
            const result = this.compressIfNeeded(newParams.aptitudes);
            if (this.initialParams.aptitudes !== result.compressed) {
                this.initialParams.aptitudes = result.compressed;
                hasChanges = true;
            }
            needsCompression = needsCompression || result.isCompressed;
        }

        if (newParams.enchantement !== undefined) {
            const result = this.compressIfNeeded(newParams.enchantement);
            if (this.initialParams.enchantement !== result.compressed) {
                this.initialParams.enchantement = result.compressed;
                hasChanges = true;
            }
            needsCompression = needsCompression || result.isCompressed;
        }

        if (newParams.aptitudesManual !== undefined) {
            const result = this.compressIfNeeded(newParams.aptitudesManual);
            if (this.initialParams.aptitudesManual !== result.compressed) {
                this.initialParams.aptitudesManual = result.compressed;
                hasChanges = true;
            }
            needsCompression = needsCompression || result.isCompressed;
        }

        // Ne mettre à jour que si des changements ont été détectés
        if (!hasChanges) {
            return;
        }

        // Ajouter le flag de compression si nécessaire
        if (needsCompression) {
            this.initialParams.c = '1';
        } else if (!this.hasOtherCompressedParams({})) {
            // Retirer le flag si plus rien n'est compressé
            this.initialParams.c = undefined;
        }

        // Mettre à jour le hash
        this.updateHash();
    }

    /**
     * Vérifie si d'autres paramètres sont encore compressés
     */
    private hasOtherCompressedParams(excludeParams: Partial<UrlParams>): boolean {
        const keysToCheck: (keyof UrlParams)[] = ['sorts', 'aptitudes', 'enchantement', 'aptitudesManual'];
        
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
     * Met à jour le hash de l'URL avec tous les paramètres actuels
     */
    private updateHash(): void {
        if (!this.isBrowser) {
            return;
        }

        const params = new URLSearchParams();
        
        if (this.initialParams.itemsId) {
            params.set('itemsId', this.initialParams.itemsId);
        }
        if (this.initialParams.level) {
            params.set('level', this.initialParams.level.toString());
        }
        if (this.initialParams.classe) {
            params.set('classe', this.initialParams.classe.toString());
        }
        if (this.initialParams.aptitudes) {
            params.set('aptitudes', this.initialParams.aptitudes);
        }
        if (this.initialParams.sorts) {
            params.set('sorts', this.initialParams.sorts);
        }
        if (this.initialParams.enchantement) {
            params.set('enchantement', this.initialParams.enchantement);
        }
        if (this.initialParams.aptitudesManual) {
            params.set('aptitudesManual', this.initialParams.aptitudesManual);
        }
        if (this.initialParams.c) {
            params.set('c', this.initialParams.c);
        }

        const hash = params.toString();
        if (hash) {
            window.location.hash = hash;
        } else {
            window.location.hash = '';
        }
    }

    /**
     * Extrait les paramètres depuis le hash de l'URL au chargement initial
     * Le hash n'est pas envoyé au serveur, évitant ainsi les problèmes SSR
     * IMPORTANT: On garde les valeurs compressées telles quelles pour éviter les boucles
     */
    private getInitialHashParams(): UrlParams {
        if (typeof window === 'undefined') {
            return {};
        }
        
        try {
            let searchString = window.location.hash.substring(1); // Enlever le #
            let needsConversion = false;
            
            // Si pas de hash, essayer les query params (rétrocompatibilité)
            if (!searchString && window.location.search) {
                searchString = window.location.search.substring(1); // Enlever le ?
                needsConversion = true; // Marquer pour conversion
            }
            
            const urlParams = new URLSearchParams(searchString);
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

            // IMPORTANT: On garde les valeurs compressées telles quelles
            // La décompression se fait uniquement dans les getters
            const aptitudes = urlParams.get('aptitudes');
            if (aptitudes) {
                params.aptitudes = aptitudes;
            }

            const sorts = urlParams.get('sorts');
            if (sorts) {
                params.sorts = sorts;
            }

            const enchantement = urlParams.get('enchantement');
            if (enchantement) {
                params.enchantement = enchantement;
            }

            const aptitudesManual = urlParams.get('aptitudesManual');
            if (aptitudesManual) {
                params.aptitudesManual = aptitudesManual;
            }
            
            // Si on a détecté une ancienne URL avec query params, la convertir en hash
            if (needsConversion && searchString) {
                // Remplacer l'URL actuelle par la version avec hash (sans rechargement)
                const newUrl = window.location.pathname + '#' + searchString;
                window.history.replaceState(null, '', newUrl);
            }
            
            return params;
        } catch (error) {
            console.error("Error parsing hash params:", error);
            return {};
        }
    }
}