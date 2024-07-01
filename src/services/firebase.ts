import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: import.meta.env.GOOGLE_API_KEY,
    authDomain: "desperatemeasures-e51d5.firebaseapp.com",
    projectId: "desperatemeasures-e51d5",
    storageBucket: "desperatemeasures-e51d5.appspot.com",
    messagingSenderId: "187031180228",
    appId: "1:187031180228:web:9a2e7598f98d86e7400a91"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);