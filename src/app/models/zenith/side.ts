import { Shard } from "./shard";
import { Sublimation } from "./sublimation";

export interface Side {
    shards: Shard[];
    sublimation: Sublimation;
}