import React, {useState} from "react";
import ThemeToggle from "./ThemeToggle.tsx";
import {IUser} from "../../../types/User.ts";
import {useUser} from "../../../hooks/useUser.ts";
import {ArrowDownFromLine, Save} from "lucide-react";
import HeaderButtons from "./buttons/HeaderButtons.tsx";
import {MilkGenerator} from "../../../models/MilkGenerator.ts";

type HeaderProps = {
    setUser: React.Dispatch<React.SetStateAction<IUser>>,
    milkBucketCounter: number,
    milkGenerators: MilkGenerator[],
}

const Header: React.FC<HeaderProps> = (
    {setUser, milkBucketCounter, milkGenerators}
) => {
    const {
        saveUser,
        loadUser
    } = useUser();

    const [isSaveDialogOpen, setIsSaveDialogOpen] = useState(false);
    const [isLoadDialogOpen, setIsLoadDialogOpen] = useState(false);
    const [inputValues, setInputValues] = useState({
        username: "",
        password: ""
    })

    const save = async () => {
        const user = getUser()

        await saveUser(user);
        setIsSaveDialogOpen(false);
    }

    const load = async () => {
        const user = getUser()

        loadUser(user)
            .then(userData => {
                setUser(userData);
                setIsLoadDialogOpen(false);
            });
    }

    const getUser = (): IUser => {
        return {
            username: inputValues.username,
            password: inputValues.password,
            save: {
                milkGenerators: milkGenerators,
                milkBucketCounter: milkBucketCounter
            }
        }
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        })
    }

    return (
        <header
            className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur
             supports-[backdrop-filter]:bg-background/60"
        >
            <div
                className="container flex h-14 max-w-screen-2xl justify-between items-center"
            >
                <div>
                    <h2>Desperate Measures</h2>
                </div>
                <div className="flex gap-4">
                    <HeaderButtons
                        title="Carregar Jogo"
                        onConfirm={load}
                        onChange={onChange}
                        isDialogOpen={isLoadDialogOpen}
                        setIsDialogOpen={setIsLoadDialogOpen}
                        children={<ArrowDownFromLine className="h-[1.2rem] w-[1.2rem]"/>}
                    />
                    <HeaderButtons
                        title="Salvar Jogo"
                        onConfirm={save}
                        onChange={onChange}
                        isDialogOpen={isSaveDialogOpen}
                        setIsDialogOpen={setIsSaveDialogOpen}
                        children={<Save className="h-[1.2rem] w-[1.2rem]"/>}
                    />
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
};

export default Header;