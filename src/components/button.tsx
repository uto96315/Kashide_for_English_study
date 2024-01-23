import { Colors } from "react-native/Libraries/NewAppScreen";


type Props = {
    label: string;
    canClick?: boolean; // 条件を満たしていて押せる状態かどうか
    clickFunc: () => void;
    errorMessage?: string;
    color?: string;
    hoverColor?: string;
};

const Button: React.FC<Props> = ({ label, canClick, clickFunc, color = "bg-pink-300", hoverColor="bg-pink-400" }) => {
    return (
        <button
            className={canClick
                ? `${color} py-2 px-10 rounded-md text-white hover:shadow-md ${hoverColor}`
                : "bg-gray-200 py-2 px-10 rounded-md"}
            onClick={clickFunc}
        >
            {label}
        </button>
    );
};


export default Button;