import { useState } from "react";
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import Recommended from "./components/Recommended";
import Sidebar from "./components/Sidebar/Sidebar";
import products from "@/db/db";

function App() {
    console.log(products);
    const [selectedCategory, setSelectedCategory] = useState(null);
    // ----------- Input Filter -----------
    const [query, setQuery] = useState("");

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const filteredItems = products.filter(
        (product) =>
            product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1 //checks if the query exists as a substring within the title. If indexOf returns a value other than -1, the query is found.
    );

    // ----------- Radio Filtering -----------
    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    // ------------ Button Filtering -----------
    const handleClick = (event) => {
        setSelectedCategory(event.target.value);
    };

    function filteredData(products, selected, query) {
        let filteredProducts = products;

        // Filtering Input Items
        if (query) {
            filteredProducts = filteredItems;
        }

        // Applying selected filter
        if (selected) {
            filteredProducts = filteredProducts.filter(
                ({ category, color, company, newPrice, title }) =>
                    category === selected ||
                    color === selected ||
                    company === selected ||
                    newPrice === selected ||
                    title === selected
            );
        }

        return filteredProducts;
    }

    const result = filteredData(products, selectedCategory, query);
    return (
        <>
            <div className="flex">
                <Sidebar handleChange={handleChange} />
                <div>
                    <Navigation
                        query={query}
                        handleInputChange={handleInputChange}
                    />
                    <Recommended handleClick={handleClick} />
                    <Products result={result} />
                </div>
            </div>
        </>
    );
}

export default App;
