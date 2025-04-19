const Input = ({ handleChange, value, title, name, color, selectedValue }) => {
    return (
        <div className="flex gap-2 items-center">
            <div className="checkmark" style={{ backgroundColor: color }}></div>
            <input
                onChange={handleChange}
                type="radio"
                value={value}
                name={name}
                checked={selectedValue === value.toString()}
            />
            <span>{title}</span>
        </div>
    );
};

export default Input;
