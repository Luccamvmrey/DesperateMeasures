import React from "react";
import {getFormattedValue} from "../../../../utils/utils.ts";

type MilkBucketCounterProps = {
    milkBuckets: number;
    milkPerSecond: number;
}

const MilkBucketCounter: React.FC<MilkBucketCounterProps> = ({milkBuckets, milkPerSecond}) => {
    return (
        <div className="flex flex-col items-center">
            <span className="text-xl">Você tem: {getFormattedValue(milkBuckets)} baldes de leite</span>
            <span>{getFormattedValue(milkPerSecond)}BL/Segundo</span>
        </div>
    );
};

export default MilkBucketCounter;