import React, {PropsWithChildren} from "react";
import {Button} from "../../../ui/button.tsx";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "../../../ui/dialog.tsx";
import {Label} from "../../../ui/label.tsx";
import {Input} from "../../../ui/input.tsx";

type HeaderButtonsProps = {
    title: string;
    onConfirm: () => void;
    isDialogOpen: boolean;
    setIsDialogOpen: (isOpen: boolean) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const HeaderButtons: React.FC<PropsWithChildren<HeaderButtonsProps>> = (
    {children, onConfirm, title, onChange, isDialogOpen, setIsDialogOpen}
) => {
    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger>
                <Button variant="outline" size="icon" onClick={() => setIsDialogOpen(true)}>
                    {children}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        Novas contas são criadas automaticamente.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col justify-between items-start gap-2 my-2">
                    <div>
                        <Label htmlFor="username">Nome de Usuário</Label>
                        <Input
                            id="username"
                            name="username"
                            placeholder="Nome de Usuário"
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <Label htmlFor="password">Senha</Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Senha"
                            onChange={onChange}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose className="mr-4" onClick={() => setIsDialogOpen(false)}>Cancelar</DialogClose>
                    <Button onClick={onConfirm}>Logar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
};

export default HeaderButtons;