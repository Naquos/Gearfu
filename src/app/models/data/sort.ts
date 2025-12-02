import { ClassIdEnum } from "../enum/classIdEnum";
import { DescriptionSort } from "./descriptionSort";

export interface Sort {
    idClasse: ClassIdEnum;
    sortElementaires: {
        feu: DescriptionSort[];
        eau: DescriptionSort[];
        terre: DescriptionSort[];
        air: DescriptionSort[];
    },
    sortActifs: DescriptionSort[];
    sortPassifs: DescriptionSort[];
}