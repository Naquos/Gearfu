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
}