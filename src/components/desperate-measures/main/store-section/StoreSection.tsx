import React from "react";
import {MilkGenerator} from "../../../../models/MilkGenerator.ts";
import Store from "./Store.tsx";

type StoreSectionProps = {
    storeItems: MilkGenerator[];
    onBuyMilkGenerator: (itemIndex: number) => void;
}

const StoreSection: React.FC<StoreSectionProps> = ({storeItems, onBuyMilkGenerator}) => {
    return (
        <section className="flex flex-col items-center gap-4 h-full border-t-2 py-4 overflow-x-hidden md:flex-1 md:p-4 md:border-l-2 md:border-t-0 md:overflow-auto">
            <div>
                <span className="text-xl">Geradores de Leite</span>
            </div>
            <Store
                storeItems={storeItems}
                onBuyMilkGenerator={onBuyMilkGenerator}
            />
        </section>
    );
};

export default StoreSection;