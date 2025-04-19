import Input from "./Input";

const Price = ({ handleChange, selectedPrice }) => {
    return (
        <>
            <div className="ml">
                <h2 className="mt-5 mb-3 text-[17px] font-bold">Price</h2>
                <div>
                    <Input
                        handleChange={handleChange}
                        value={50}
                        title="$0 - 50"
                        name="price"
                        selectedValue={selectedPrice}
                    />

                    <Input
                        handleChange={handleChange}
                        value={100}
                        title="$51 - $100"
                        name="price"
                        selectedValue={selectedPrice}
                    />

                    <Input
                        handleChange={handleChange}
                        value={150}
                        title="$101 - $150"
                        name="price"
                        selectedValue={selectedPrice}
                    />

                    <Input
                        handleChange={handleChange}
                        value={200}
                        title="Over $150"
                        name="price"
                        selectedValue={selectedPrice}
                    />
                </div>
            </div>
        </>
    );
};

export default Price;
