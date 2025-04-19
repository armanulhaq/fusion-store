import Input from "./Input";

function Category({ handleChange, selectedCategory }) {
    return (
        <div>
            <h2 className="mt-5 mb-3 text-[17px] font-bold">Category</h2>

            <div className="">
                <Input
                    handleChange={handleChange}
                    value="sneakers"
                    title="Sneakers"
                    name="category"
                    selectedValue={selectedCategory}
                />
                <Input
                    handleChange={handleChange}
                    value="flats"
                    title="Flats"
                    name="category"
                    selectedValue={selectedCategory}
                />
                <Input
                    handleChange={handleChange}
                    value="sandals"
                    title="Sandals"
                    name="category"
                    selectedValue={selectedCategory}
                />
                <Input
                    handleChange={handleChange}
                    value="heels"
                    title="Heels"
                    name="category"
                    selectedValue={selectedCategory}
                />
            </div>
        </div>
    );
}

export default Category;
