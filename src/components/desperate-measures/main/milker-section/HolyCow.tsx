import React, {useState} from "react";

import holyCow from "../../../../assets/holy-cow.png";

type HolyCowProps = {
    onHolyCowClick: () => void;
}

const HolyCow: React.FC<HolyCowProps> = ({onHolyCowClick}) => {
    const initialClass = "transition-all";
    const [classNames, setClassNames] = useState(initialClass);

    const onCowClick = () => {
        scaleCow();
        onHolyCowClick();
    }

    const scaleCow = () => {
        setClassNames(`${initialClass} scale-110`);
        setTimeout(() => {
            setClassNames(initialClass);
        }, 75);
    }

    return (
        <div onClick={onCowClick}>
            <img src={holyCow} alt="Holy Cow" className={classNames}/>
        </div>
    );
};

export default HolyCow;