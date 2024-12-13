import Input from "./Input";

const Colors = ({ handleChange }) => {
    return (
        <>
            <div>
                <h2 className="mt-5 mb-3 text-[17px] font-bold">Colours</h2>

                <Input
                    handleChange={handleChange}
                    value="black"
                    title="Black"
                    name="test1"
                    color="black"
                />

                <Input
                    handleChange={handleChange}
                    value="blue"
                    title="Blue"
                    name="test1"
                    color="blue"
                />

                <Input
                    handleChange={handleChange}
                    value="red"
                    title="Red"
                    name="test1"
                    color="red"
                />

                <Input
                    handleChange={handleChange}
                    value="green"
                    title="Green"
                    name="test1"
                    color="green"
                />

                <Input
                    handleChange={handleChange}
                    value="white"
                    title="White"
                    name="test1"
                    color="white"
                />
            </div>
        </>
    );
};

export default Colors;
