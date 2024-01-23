import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyC7jSm-LZ49OLCmiHAO1yx5F6hbqpUIMVk",
    authDomain: "kashide-for-english-study.firebaseapp.com",
    projectId: "kashide-for-english-study",
    storageBucket: "kashide-for-english-study.appspot.com",
    messagingSenderId: "481891746959",
    appId: "1:481891746959:web:c17031aa456122c0a29cfa"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };