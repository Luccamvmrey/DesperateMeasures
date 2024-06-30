export interface MilkGenerator {
    icon?: string;
    amount: number;
    generatorName: string;
    milkPerSecond: number;
    initialCost: number;
    currentCost: number;
    description: string;
    upgrades: Upgrade[];
}

export interface Upgrade {
    name: string;
    description: string;
    cost: number;
    boostFactor: number;
    wasBought: boolean;
}