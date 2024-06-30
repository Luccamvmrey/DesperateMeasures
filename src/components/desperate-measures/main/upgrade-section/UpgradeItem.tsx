import React from "react";
import {Upgrade} from "../../../../models/MilkGenerator.ts";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "../../../ui/hover-card.tsx";
import {getFormattedValue} from "../../../../utils/utils.ts";

type UpgradeItemProps = {
    icon?: string;
    upgrade: Upgrade;
    buyUpgrade: () => void;
}

const UpgradeItem: React.FC<UpgradeItemProps> = ({icon, upgrade, buyUpgrade}) => {
    return (
        <HoverCard>
            <HoverCardTrigger>
                <div onClick={buyUpgrade} className="w-10 h-10 rounded border-border border-2 flex justify-center items-center">
                    <img src={icon} alt="icon" className="w-8 h-8"/>
                </div>
            </HoverCardTrigger>
            <HoverCardContent className="flex flex-col gap-2">
                <div>
                    <span>{upgrade.name}</span>
                </div>
                <div>
                    <span>{upgrade.description}</span>
                </div>
                <div className="flex justify-between">
                    <span>Preço: {getFormattedValue(upgrade.cost)}</span>
                    <span>Melhoria: {upgrade.boostFactor}</span>
                </div>
            </HoverCardContent>
        </HoverCard>

    );
};

export default UpgradeItem;