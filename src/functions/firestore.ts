import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";



const registerUserData = async (uid: string, email: string) => {
    const userCollection = collection(db, "Users");
    const userDoc = doc(userCollection, uid);
    const userData = {
        uid: uid,
        email: email,
        userName: `User${uid.slice(0, 4)}`,
        gender: "NA",
        profilePath: "NA",
        level: 0,
        age: 0,
    };

    await setDoc(userDoc, userData).then(() => {
        console.log("user情報をFirestoreに登録しました。");
    }).catch(e => { console.log(`Firestoreへの登録に失敗しました。${e}`); });
};

export { registerUserData };