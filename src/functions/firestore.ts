import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import { User } from "@/types/user";


// ユーザー情報の初期登録
const registerUserData = async (uid: string, email: string, storagePath: string) => {
    const userCollection = collection(db, "Users");
    const userDoc = doc(userCollection, uid);
    const userData = {
        uid: uid,
        email: email,
        userName: `User${uid.slice(0, 4)}`,
        gender: "NA",
        profilePath: storagePath,
        level: 0,
        age: 0,
    };

    await setDoc(userDoc, userData).then(() => {
        console.log("user情報をFirestoreに登録しました。");
    }).catch(e => { console.log(`Firestoreへの登録に失敗しました。${e}`); });
};


// ユーザー情報の取得
const getUserDataFromFirestore = async (uid: string) => {
    const userDoc = doc(db, "Users", uid);
    const docSnap = await getDoc(userDoc);

    if (docSnap.exists()) {
        const userData = docSnap.data() as User;
        return userData;
    } else {
        return null;
    }
};

export { registerUserData, getUserDataFromFirestore };