import React from "react";
import {MilkGenerator, Upgrade} from "../../../../models/MilkGenerator.ts";
import UpgradeItem from "./UpgradeItem.tsx";

interface UpgradeList {
    generatorIndex: number;
    icon?: string;
    upgrades: Upgrade[];
}

type UpgradeSectionProps = {
    storeItems: MilkGenerator[];
    buyUpgrade: (generatorIndex: number, upgradeIndex: number) => void;
}

const UpgradeSection: React.FC<UpgradeSectionProps> = ({storeItems, buyUpgrade}) => {
    const upgradeList: UpgradeList[] = storeItems.map((storeItem, index) => {
        return {
            generatorIndex: index,
            icon: storeItem.icon,
            upgrades: storeItem.upgrades.filter(upgrade => !upgrade.wasBought)
        }
    });

    return (
        <div className="w-2/3 mx-auto">
            <div>
                <h2 className="text-2xl font-bold px-4 mt-2">Upgrades</h2>
            </div>
            <div className="flex flex-wrap justify-start items-start p-4 gap-4">
                {upgradeList.map((upgradeItem) => upgradeItem.upgrades.map((upgrade, upgradeIndex) => {
                    return (
                        <UpgradeItem
                            key={upgradeIndex}
                            icon={upgradeItem.icon}
                            upgrade={upgrade}
                            buyUpgrade={() => buyUpgrade(upgradeItem.generatorIndex, upgradeIndex)}
                        />
                    );
                }))}
            </div>
        </div>

    );
};

export default UpgradeSection;