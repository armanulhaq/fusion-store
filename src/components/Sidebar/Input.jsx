const Input = ({ handleChange, value, title, name, color, selectedValue }) => {
    return (
        <label className="flex gap-2">
            <div className="checkmark" style={{ backgroundColor: color }}></div>
            <input
                onChange={handleChange}
                type="radio"
                value={value}
                name={name}
                checked={selectedValue === value.toString()}
            />
            {title}
        </label>
    );
};

export default Input;
