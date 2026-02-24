import { IdChassesEnum } from "../enum/idChassesEnum";
import { IdShardEnum } from "./enum/idShardEnum";

export interface Shard {
    id_shard: IdShardEnum;
    id_color: IdChassesEnum;
    level: number;
    is_whited: boolean;
}