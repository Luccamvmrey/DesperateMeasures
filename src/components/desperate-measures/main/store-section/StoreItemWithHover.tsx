import React from "react";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "../../../ui/hover-card.tsx";
import {MilkGenerator} from "../../../../models/MilkGenerator.ts";
import StoreItem from "./StoreItem.tsx";
import { getFormattedValue } from "../../../../utils/utils.ts";

type StoreItemWithHoverProps = {
    storeItem: MilkGenerator;
    onBuyMilkGenerator: () => void;
}

const StoreItemWithHover: React.FC<StoreItemWithHoverProps> = ({storeItem, onBuyMilkGenerator}) => {
    const boughtUpgrades = storeItem.upgrades.filter(upgrade => upgrade.wasBought);
    const totalBoostFactor = boughtUpgrades.reduce((totalBoost, upgrade) => {
        return totalBoost * upgrade.boostFactor;
    }, 1);

    const milkBucketsPerSecond = storeItem.milkPerSecond * storeItem.amount * totalBoostFactor;


    return (
        <HoverCard>
            <HoverCardTrigger className="w-full hover:cursor-pointer">
                <StoreItem
                    storeItem={storeItem}
                    onBuyMilkGenerator={onBuyMilkGenerator}
                />
            </HoverCardTrigger>
            <HoverCardContent>
                <div className="mb-2">
                    <span>{storeItem.amount} {storeItem.generatorName} gerando {getFormattedValue(milkBucketsPerSecond)}BL/S</span>
                </div>
                <div>
                    <p className="text-sm">{storeItem.description}</p>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
};

export default StoreItemWithHover;