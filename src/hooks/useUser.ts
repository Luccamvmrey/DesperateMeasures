import {collection, doc, getDoc, setDoc} from "firebase/firestore";
import {db} from "../services/firebase.ts";
import {IUser} from "../types/User.ts";

type UseUser = {
    saveUser: (user: IUser) => Promise<void>,
    loadUser: (user: IUser) => Promise<IUser>,
}

export const useUser = (): UseUser => {
    const usersRef = collection(db, 'users');

    const loadUser = async (user: IUser): Promise<IUser> => {
        const userData = await getUser(user);
        console.log("From userUser loadUser", userData)
        const isCorrectPassword = await checkPassword(user);

        if (!isCorrectPassword) {
            throw new Error("Incorrect password");
        }
        return userData;
    }

    const saveUser = async (user: IUser): Promise<void> => {
        const isCorrectPassword = await checkPassword(user);

        if (isCorrectPassword) {
            const userRef = doc(usersRef, user.username);
            await setDoc(userRef, user);
        }

        return;
    }

    const checkPassword = async (user: IUser): Promise<boolean> => {
        const _user = await getUser(user);
        return user.password === _user.password;
    }

    const getUser = async (user: IUser): Promise<IUser> => {
        const userRef = doc(usersRef, user.username);
        const userDoc = await getDoc(userRef);

        console.log("From useUser getUser", userDoc.data())

        let userData: IUser;

        if (!userDoc.exists()) {
            console.log("User not found");
            userData = await createUser(user);
        } else {
            userData = userDoc.data() as IUser;
        }

        return userData
    }

    const createUser = async (newUser: IUser): Promise<IUser> => {
        const userRef = doc(usersRef, newUser.username);
        const user = {
            username: newUser.username,
            password: newUser.password,
            save: newUser.save
        }

        await setDoc(userRef, user);
        return user;
    }

    return {
        saveUser,
        loadUser
    };
}