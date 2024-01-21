import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";


// authにユーザー登録
export const signUpWithEmail = async (email: string, password: string) => {
    // パスワードが6文字以下の場合にはエラーをスローする
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(`サインアップが完了しました。${user.uid}`);
        return user;
    } catch (error) {
        console.log(`サインアップでエラーが発生しました。${error}`);
        throw error;
    }
};