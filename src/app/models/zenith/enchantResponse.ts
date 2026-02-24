import { Side } from "./side";
import { Sublimation } from "./sublimation";

export const keyId = [134, 120, 136, 23, 24, 119, 132, 138, 133, 540] as const;

export type KeyId = (typeof keyId)[number];

export interface EnchantResponse {
    sides: Record<KeyId, Side>;
    epic: Sublimation;
    relic: Sublimation;
};