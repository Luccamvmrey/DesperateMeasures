import {MilkGenerator} from "../models/MilkGenerator.ts";

export interface Save {
    milkGenerators: MilkGenerator[],
    milkBucketCounter: number
}