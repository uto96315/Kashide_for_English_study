"use client";
import Button from "@/components/button";
import Checkbox from "@/components/checkbox";
import InputForm from "@/components/inputForm";
import { emailPattern } from "@/data/pattern";
import { signUpWithEmail } from "@/functions/auth";
import { registerUserData } from "@/functions/firestore";
import { useEffect, useState } from "react";



const RegisterPage = () => {

    // state関係
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [emailError, setEmailError] = useState<string>(""); // メールアドレスに関するエラーを格納する場所
    const [passwordError, setPasswordError] = useState<string>(""); // パスワードに関するエラーを格納
    const [visible, setVisible] = useState<boolean>(false); // パスワードの可視不可視
    const [tosChecked, setTosChecked] = useState<boolean>(false);
    const [canRegister, setCanRegister] = useState(false); // 登録ボタンを押せるかどうか

    // 登録できる状態かどうか判定する
    useEffect(() => {
        if (emailError === "" && passwordError === "" && tosChecked) {
            setCanRegister(true);
        } else {
            setCanRegister(false);
        }
    }, [email, password, emailError, passwordError, tosChecked, canRegister]);

    // auth -> storage -> firestore 
    const register = async () => {
        try {
            const authResult = await signUpWithEmail(email, password);
            const uid = authResult.uid;
            if (uid) {
                await registerUserData(uid, email);
            } else {
                console.log("uidがありません。", uid);
            }
        } catch (e) {
            console.log("認証でエラーが発生しました。", e);
            alert("登録エラーが発生しました。\n再度お試しください。");
            window.location.reload();
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="w-full flex justify-center items-center pt-10">
                <div className="bg-white px-24 py-10 shadow-md rounded-2xl">
                    <InputForm
                        label="メールアドレス"
                        errorMessage={emailError}
                        placeHolder="example@kashide.com"
                        type="email"
                        value={email}
                        onChangeFunc={(e) => {
                            const val = e.target.value;
                            const isValidEmail = emailPattern.test(val);
                            if (!isValidEmail) {
                                setEmailError("メールアドレスの形式で入力してください");
                            } else {
                                setEmailError("");
                            }
                            setEmail(val);
                        }}
                    />
                    <div className="py-3"></div>
                    <InputForm
                        label="パスワード"
                        errorMessage={passwordError}
                        placeHolder="6文字以上"
                        type={visible ? "string" : "password"}
                        value={password}
                        visibleIcon={true}
                        visible={visible}
                        changeVisibleFunc={() => {
                            setVisible(!visible);
                        }}
                        onChangeFunc={(e) => {
                            const inputedPass = e.target.value;
                            if (inputedPass.length < 6) {
                                setPasswordError("6文字以上で入力してください。");
                            } else {
                                setPasswordError("");
                            }
                            setPassword(inputedPass);
                        }}
                    />

                    <Checkbox
                        label="利用規約に同意する"
                        checked={tosChecked}
                        onChangeFunc={() => { setTosChecked(!tosChecked); }}
                    />

                    <div className="flex justify-center">
                        <Button
                            label="登録する"
                            canClick={canRegister}
                            clickFunc={async () => {
                                await register();
                            }}
                            errorMessage=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;