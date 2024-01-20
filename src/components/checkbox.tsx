

type Props = {
    label: string;
    checked: boolean;
    onChangeFunc: () => void;
};

const Checkbox: React.FC<Props> = ({ label, checked, onChangeFunc }) => {
    return (
        <div className="flex items-center justify-center py-6 space-x-2">
            <input 
            type="checkbox" 
            checked={checked} 
            onChange={onChangeFunc}
            className=" form-checkbox"
            />
            <label className="text-black text-sm">{label}</label>
        </div>
    );
};

export default Checkbox;