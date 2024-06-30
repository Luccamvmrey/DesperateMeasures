import React from "react";
import {MilkGenerator} from "../../../../models/MilkGenerator.ts";
import {Card, CardContent, CardDescription, CardTitle} from "../../../ui/card.tsx";
import {getFormattedValue} from "../../../../utils/utils.ts";

type StoreItemProps = {
    storeItem: MilkGenerator;
    onBuyMilkGenerator: () => void;
}

const StoreItem: React.FC<StoreItemProps> = ({storeItem, onBuyMilkGenerator}) => {
    const boughtUpgrades = storeItem.upgrades.filter(upgrade => upgrade.wasBought);
    const totalBoostFactor = boughtUpgrades.reduce((totalBoost, upgrade) => {
        return totalBoost * upgrade.boostFactor;
    }, 1);

    const milkBucketsPerSecond = storeItem.milkPerSecond * storeItem.amount * totalBoostFactor;

    return (
        <Card className="flex justify-between items-center w-full px-4 py-2" onClick={onBuyMilkGenerator}>
            <div className=" w-[32px] h-[32px] mr-4">
                <img src={storeItem.icon} alt={storeItem.generatorName}/>
            </div>
            <CardContent className="p-0 flex-1">
                <CardTitle className="text-xl ">{storeItem.generatorName}</CardTitle>
                <CardDescription>{getFormattedValue(storeItem.currentCost)} BL</CardDescription>
            </CardContent>
            <div>
                <div className="text-2xl ml-4">
                    {storeItem.amount}
                </div>
                <div className="text-sm md:hidden">
                    {getFormattedValue(milkBucketsPerSecond)} BL/S
                </div>
            </div>
        </Card>
    );
};

export default StoreItem;