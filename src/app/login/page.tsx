"use client";
import InputForm from '@/components/inputForm';
import { emailPattern } from '@/data/pattern';
import Image from 'next/image';
import Button from "@/components/button";
import { useEffect, useState } from 'react';
import { loginWithEmail } from '@/functions/auth';
import { useRouter } from 'next/navigation';
import { getUserDataFromFirestore } from '@/functions/firestore';
import { User } from '@/types/user';


const LoginPage = () => {

    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [visible, setVisible] = useState<boolean>(false); // パスワードの可視不可視
    const [canLogin, setCanLogin] = useState(false); // 登録ボタンを押せるかどうか

    const [user, setUser] = useState<User>();

    const login = async () => {
        try {
            const user = await loginWithEmail(email, password);
            const uid = user.uid;
            if (uid) {
                const userData = await getUserDataFromFirestore(uid);
                if (userData) {
                    console.log(userData);
                    setUser(userData);
                } else {
                    console.log("userDataの取得に失敗しました。");
                }
            }
        } catch (e) {
            alert("ログインに失敗しました。");
        }
    };

    // ログインできるか判定
    useEffect(() => {
        if (emailError === "" && passwordError === "") {
            setCanLogin(true);
        } else {
            setCanLogin(false);
        }
    }, [email, password, emailError, passwordError, canLogin]);


    return (
        <div className="min-h-screen bg-gray-100">
            <div className='w-full flex justify-center items-center pt-10'>
                <div className='bg-white px-24 py-10 shadow-md rounded-2xl'>
                    <div className="flex justify-center pb-8">
                        <Image
                            src="/logo_pink.svg"
                            alt="Alternative Text"
                            width={300}
                            height={100}
                        />
                    </div>

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

                    <div className="flex justify-center mt-10">
                        <Button
                            label="ログインする"
                            canClick={canLogin}
                            clickFunc={async () => {
                                await login();
                            }}
                            errorMessage=""
                        />
                    </div>

                    <div className="mt-6 text-sm text-center">
                        <p>初めてご利用方は
                            <span
                                onClick={() => { router.push("/register"); }}
                                className="border-b-2 border-pink-400 cursor-pointer hover:font-bold pb-1"
                            >
                                こちらから登録
                            </span>
                            ください
                        </p>
                    </div>

                    <div className='flex justify-center mt-5'>
                        <Button
                            label="テスト"
                            canClick={true}
                            clickFunc={async () => {
                                setEmail("yuto.mabe@gmail.com");
                                setPassword("ymabe315");
                            }}
                            color="bg-gray-200"
                            hoverColor='hover:bg-gray-400'
                            errorMessage=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;