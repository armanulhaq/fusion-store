import Input from "./Input";

const Price = ({ handleChange }) => {
    return (
        <>
            <div className="ml">
                <h2 className="mt-5 mb-3 text-[17px] font-bold">Price</h2>
                <div>
                    <Input
                        handleChange={handleChange}
                        value={50}
                        title="$0 - 50"
                        name="test2"
                    />

                    <Input
                        handleChange={handleChange}
                        value={100}
                        title="$50 - $100"
                        name="test2"
                    />

                    <Input
                        handleChange={handleChange}
                        value={150}
                        title="$100 - $150"
                        name="test2"
                    />

                    <Input
                        handleChange={handleChange}
                        value={200}
                        title="Over $150"
                        name="test2"
                    />
                </div>
            </div>
        </>
    );
};

export default Price;
