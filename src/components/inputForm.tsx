import { ChangeEventHandler, Dispatch, SetStateAction } from "react";
import { DiVim } from "react-icons/di";
import { FiEye, FiEyeOff } from "react-icons/fi";


type Props = {
    label: string;
    errorMessage?: string;
    placeHolder?: string;
    type: string;
    value: string | number;
    visibleIcon?: boolean; // 可視不可視切り替えボタンの有無 
    visible?: boolean; // ボタンのデザイン
    changeVisibleFunc?: () => void;
    onChangeFunc: ChangeEventHandler<HTMLInputElement>;
};

const InputForm: React.FC<Props> = ({ label, errorMessage, placeHolder, type, value, onChangeFunc, visibleIcon, visible, changeVisibleFunc }) => {
    return (
        <div>
            {errorMessage &&
                <p className="text-sm text-red-500 pb-2">{errorMessage}</p>
            }
            <div className="flex justify-between items-center space-x-3">
                <label className="mr-2">{label}</label>
                <div className="flex">
                    <input
                        type={type}
                        value={value}
                        onChange={onChangeFunc}
                        placeholder={placeHolder ?? ""}
                        className="text-black bg-white bg-opacity-0 border-b-2 border-gray-300 px-1"
                    />
                    <div className="w-5 ml-2">
                        {visibleIcon &&
                            <div onClick={changeVisibleFunc}>
                                {visible ? <FiEye color="" size={20} /> : <FiEyeOff color="" size={20}/>}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputForm;