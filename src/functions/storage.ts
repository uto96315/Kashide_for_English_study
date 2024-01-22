import { ref, uploadBytes, uploadString } from "firebase/storage";
import { storage } from "./firebase";


// 新規登録時にstorageに空のフォルダを登録してパスを取得する
const makeDirectoryWithRegister = async (uid: string) => {
    const folderRef = ref(storage, "UserProfileImages/" + uid + "/.keep");
    let result;

    await uploadBytes(folderRef, new Uint8Array(0)).then((res) => {
        console.log("フォルダ作成", res.metadata.fullPath);
        result = res.metadata.fullPath;
    }).catch((e) => {
        result = false;
    });

    return result;
};


export { makeDirectoryWithRegister };