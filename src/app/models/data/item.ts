import { IdChassesEnum } from "../enum/idChassesEnum";
import { ItemTypeDefinitionEnum } from "../enum/itemTypeDefinitionEnum";
import { RarityItemEnum } from "../enum/rarityItemEnum";
import { EquipEffects } from "./equipEffects";
import { MonsterDrop } from "./monsterDrop";

export interface Item {
    id: number;
    level: number;
    rarity: RarityItemEnum;
    itemTypeId: ItemTypeDefinitionEnum;
    equipEffects: EquipEffects[];
    enchantement: {
        slotColorPattern: IdChassesEnum[];
        isEpic: boolean;
        isRelic: boolean;
    }
    description: {
        fr: string;
        en: string;
        es: string;
        pt: string;
    }
    title: {
        fr: string;
        en: string;
        es: string;
        pt: string;
    };
    idImage: number;
    weightForSort: number;
    weight: number;
    maitrise: number;
    resistance: number;
    isCraftable: boolean;
    mobDropable: MonsterDrop[];
    bossDropable: MonsterDrop[];
    archiDropable: MonsterDrop[];
    isPvP: boolean;
}