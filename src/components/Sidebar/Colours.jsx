import Input from "./Input";

const Colors = ({ handleChange, selectedColor }) => {
    return (
        <>
            <div>
                <h2 className="mt-5 mb-3 text-[17px] font-bold">Colours</h2>

                <Input
                    handleChange={handleChange}
                    value="black"
                    title="Black"
                    name="color"
                    color="black"
                    selectedValue={selectedColor}
                />

                <Input
                    handleChange={handleChange}
                    value="blue"
                    title="Blue"
                    name="color"
                    color="blue"
                    selectedValue={selectedColor}
                />

                <Input
                    handleChange={handleChange}
                    value="red"
                    title="Red"
                    name="color"
                    color="red"
                    selectedValue={selectedColor}
                />

                <Input
                    handleChange={handleChange}
                    value="green"
                    title="Green"
                    name="color"
                    color="green"
                    selectedValue={selectedColor}
                />

                <Input
                    handleChange={handleChange}
                    value="white"
                    title="White"
                    name="color"
                    color="white"
                    selectedValue={selectedColor}
                />
            </div>
        </>
    );
};

export default Colors;
