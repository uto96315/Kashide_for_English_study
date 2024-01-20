

type Props = {
    label: string;
    canClick?: boolean; // 条件を満たしていて押せる状態かどうか
    clickFunc: () => void;
    errorMessage?: string;
};

const Button: React.FC<Props> = ({ label, canClick, clickFunc }) => {
    return (
        <button
            className={canClick ?
                "bg-pink-300 py-2 px-10 rounded-md text-white hover: shadow-md hover:bg-pink-400" :
                "bg-gray-200 py-2 px-10 rounded-md"
            }
            onClick={clickFunc}
        >
            {label}
        </button>
    );
};


export default Button;