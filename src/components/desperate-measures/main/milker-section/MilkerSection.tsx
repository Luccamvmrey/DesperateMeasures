import React from "react";
import HolyCow from "./HolyCow.tsx";
import MilkBucketCounter from "./MilkBucketCounter.tsx";

type MilkerSectionProps = {
    milkBuckets: number;
    milkPerSecond: number;
    onHolyCowClick: () => void;
}

const MilkerSection: React.FC<MilkerSectionProps> = (
    {milkBuckets, milkPerSecond, onHolyCowClick}
) => {
    return (
        <section className="p-4">
            <div className="flex flex-col justify-center items-center gap-12">
                <MilkBucketCounter
                    milkBuckets={milkBuckets}
                    milkPerSecond={milkPerSecond}
                />
                <HolyCow onHolyCowClick={onHolyCowClick}/>
            </div>
        </section>
    );
};

export default MilkerSection;