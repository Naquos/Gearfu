export interface DescriptionSort {
    gfxId: number;
    name: {
        fr: string;
        en: string;
        es: string;
        pt: string;
    };
    description: {
        fr: string;
        en: string;
        es: string;
        pt: string;
    },
    urls: {
        fr: string;
        en: string;
        es: string;
        pt: string;
    };
    PA: number;
    PW: number;
    PM: number;
    NotLDV: boolean;
    POModifiable: boolean;
    Ligne: boolean;
    PorteeMin: number;
    PorteeMax: number;
    effect_normal: {
        fr: string;
        en: string;
        es: string;
        pt: string;
    };
    effect_critical: {
        fr: string;
        en: string;
        es: string;
        pt: string;
    };
    levelUnlock: number;
    // Format RLE: [[valeurs, start, end], ...]
    normalEffect: {
        fr: [string[], string, string][];
        en: [string[], string, string][];
        es: [string[], string, string][];
        pt: [string[], string, string][];
    };
    criticalEffect: {
        fr: [string[], string, string][];
        en: [string[], string, string][];
        es: [string[], string, string][];
        pt: [string[], string, string][];
    };
}