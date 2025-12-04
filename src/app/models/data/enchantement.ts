import { ChasseCombinaison } from "./chasseCombinaison";
import { SublimationsEpiqueRelique } from "./sublimationEpiqueRelique";

export interface Enchantement {
    chasseCombinaison: ChasseCombinaison[];
    epique?: SublimationsEpiqueRelique;
    relique?: SublimationsEpiqueRelique;
}