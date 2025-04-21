const Input = ({ handleChange, value, title, name, selectedValue }) => {
    return (
        <div className="flex gap-2 items-center">
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
