import React from "react";
import { MilkGenerator } from "../../../../models/MilkGenerator";
import StoreItemWithHover from "./StoreItemWithHover.tsx";

type StoreProps = {
    storeItems: MilkGenerator[];
    onBuyMilkGenerator: (itemIndex: number) => void;
}

const Store: React.FC<StoreProps> = ({storeItems, onBuyMilkGenerator}) => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 w-4/5">
            {storeItems.map((item, index) => {
                return (
                    <StoreItemWithHover
                        key={index}
                        storeItem={item}
                        onBuyMilkGenerator={() => onBuyMilkGenerator(index)}
                    />
                )
            })}
        </div>
    );
};

export default Store;