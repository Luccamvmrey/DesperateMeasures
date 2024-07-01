import {ThemeProvider} from "./components/desperate-measures/context/theme-provider.tsx";
import Header from "./components/desperate-measures/header/Header.tsx";
import MilkerSection from "./components/desperate-measures/main/milker-section/MilkerSection.tsx";
import MainContent from "./components/desperate-measures/main/MainContent.tsx";
import {useEffect, useState} from "react";
import {milkGenerators} from "./models/MilkGenerators.ts";
import StoreSection from "./components/desperate-measures/main/store-section/StoreSection.tsx";
import {MilkGenerator} from "./models/MilkGenerator.ts";
import UpgradeSection from "./components/desperate-measures/main/upgrade-section/UpgradeSection.tsx";
import {IUser} from "./types/User.ts";

function App() {
    const [user, setUser] = useState<IUser>({
        username: "",
        password: "",
        save: {
            milkGenerators: [],
            milkBucketCounter: 0
        }
    })
    const [milkBucketCounter, setMilkBucketCounter] = useState(0);
    const [storeItems, setStoreItems] = useState(milkGenerators)
    const totalMilkPerSecondWithUpgrades = storeItems.reduce((total, item) => {
        const totalBoostFactor = item.upgrades.reduce((totalBoost, upgrade) => {
            return totalBoost * (upgrade.wasBought ? upgrade.boostFactor : 1);
        }, 1);
        return total + (item.milkPerSecond * item.amount * totalBoostFactor);
    }, 0);

    const incrementMilkBucketCounter = () => {
        setMilkBucketCounter(prevState => prevState + 1);
    }

    const calculatePrice = (item: MilkGenerator) => {
        const itemAmount = item.amount;
        const correctedAmount = itemAmount === 0 ? 1 : itemAmount;
        const power = Math.pow(1.15, correctedAmount - 1);

        return item.initialCost * power;
    }

    const canBuyMilkGenerator = (itemIndex: number) => {
        const item = storeItems[itemIndex];
        const price = calculatePrice(item);
        return milkBucketCounter >= price;
    }

    const buyMilkGenerator = (itemIndex: number) => {
        if (!canBuyMilkGenerator(itemIndex)) {
            return;
        }

        const item = storeItems[itemIndex];
        const price = calculatePrice(item);
        const updatedItem = {
            ...item,
            amount: item.amount + 1,
            currentCost: calculatePrice({...item, amount: item.amount + 1})
        };

        setMilkBucketCounter(prevState => {
            const newCounter = prevState - price;
            if (newCounter < 0) {
                return prevState;
            }

            setStoreItems(prevState => {
                const newState = [...prevState];
                newState[itemIndex] = updatedItem;
                return newState;
            });

            return newCounter;
        });
    }

    const buyUpgrade = (generatorIndex: number, upgradeIndex: number) => {
        const generator = storeItems[generatorIndex];
        const upgrade = generator.upgrades[upgradeIndex];

        if (milkBucketCounter < upgrade.cost || upgrade.wasBought) {
            return;
        }

        setMilkBucketCounter(prevState => prevState - upgrade.cost);

        const updatedGenerator = {
            ...generator,
            upgrades: generator.upgrades.map((item, index) => {
                if (index === upgradeIndex) {
                    return {
                        ...item,
                        wasBought: true
                    }
                }
                return item;
            })
        }

        setStoreItems(prevState => {
            const newState = [...prevState];
            newState[generatorIndex] = updatedGenerator;
            return newState;
        })
    }

    const incrementMilkBucketsFromGenerators = () => {
        setMilkBucketCounter(prevState => prevState + totalMilkPerSecondWithUpgrades);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            incrementMilkBucketsFromGenerators();
        }, 1000);

        return () => clearInterval(interval)
        // eslint-disable-next-line
    }, [storeItems]);

    useEffect(() => {
        if (user.username === "" || user.password === "") {
            return;
        }

        setMilkBucketCounter(user.save.milkBucketCounter);
        setStoreItems(user.save.milkGenerators);
    }, [user])

    return (
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <Header
                setUser={setUser}
                milkBucketCounter={milkBucketCounter}
                milkGenerators={storeItems}
            />
            <MainContent>
                <div className="flex-1">
                    <MilkerSection
                        milkBuckets={milkBucketCounter}
                        milkPerSecond={totalMilkPerSecondWithUpgrades}
                        onHolyCowClick={incrementMilkBucketCounter}
                    />
                    <UpgradeSection
                        storeItems={storeItems}
                        buyUpgrade={buyUpgrade}
                    />
                </div>

                <StoreSection
                    storeItems={storeItems}
                    onBuyMilkGenerator={buyMilkGenerator}
                />
            </MainContent>
        </ThemeProvider>
    )
}

export default App
