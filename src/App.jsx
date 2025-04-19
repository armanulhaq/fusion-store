import { useState } from "react";
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import Recommended from "./components/Recommended";
import Sidebar from "./components/Sidebar/Sidebar";
import products from "@/db/db";

function App() {
    const [filters, setFilters] = useState({
        category: null,
        color: null,
        price: null,
        company: null,
    });
    // ----------- Input Filter -----------
    const [query, setQuery] = useState("");

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const filteredItems = products.filter(
        (product) =>
            product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

    // ----------- Filter Handling -----------
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFilters((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // ------------ Button Filtering -----------
    const handleClick = (event) => {
        setFilters((prev) => ({
            ...prev,
            company: event.target.value,
        }));
    };

    // ------------ Clear Filters -----------
    const clearFilters = () => {
        setFilters({
            category: null,
            color: null,
            price: null,
            company: null,
        });
        setQuery("");
    };

    function filteredData(products, filters, query) {
        let filteredProducts = products;

        // Filtering Input Items
        if (query) {
            filteredProducts = filteredItems;
        }

        // Apply all active filters
        Object.entries(filters).forEach(([key, value]) => {
            if (value) {
                filteredProducts = filteredProducts.filter((product) => {
                    if (key === "price") {
                        // Handle price range filtering
                        const price = parseInt(product.newPrice);
                        switch (value) {
                            case "50":
                                return price <= 50;
                            case "100":
                                return price > 50 && price <= 100;
                            case "150":
                                return price > 100 && price <= 150;
                            case "200":
                                return price > 150;
                            default:
                                return true;
                        }
                    }
                    return product[key] === value;
                });
            }
        });

        return filteredProducts;
    }

    const result = filteredData(products, filters, query);
    return (
        <>
            <div className="flex">
                <Sidebar
                    handleChange={handleChange}
                    clearFilters={clearFilters}
                    filters={filters}
                />
                <div>
                    <Navigation
                        query={query}
                        handleInputChange={handleInputChange}
                    />
                    <Recommended
                        handleClick={handleClick}
                        selectedCompany={filters.company}
                    />
                    <Products result={result} />
                </div>
            </div>
        </>
    );
}

export default App;
