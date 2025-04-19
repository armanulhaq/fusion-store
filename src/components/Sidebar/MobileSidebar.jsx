import { X } from "lucide-react";
import Category from "./Category";
import Colours from "./Colours";
import Price from "./Price";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const MobileSidebar = ({
    handleChange,
    clearFilters,
    filters,
    isOpen,
    onClose,
}) => {
    const [localFilters, setLocalFilters] = useState(filters);

    useEffect(() => {
        setLocalFilters(filters);
    }, [filters]);

    if (!isOpen) return null;

    // Check if any filter is selected
    const isAnyFilterSelected = Object.values(localFilters).some(
        (value) => value !== null
    );

    const handleLocalChange = (e) => {
        const { name, value } = e.target;
        setLocalFilters((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleApply = () => {
        // Update parent state with local filters
        Object.entries(localFilters).forEach(([key, value]) => {
            if (value !== filters[key]) {
                handleChange({ target: { name: key, value } });
            }
        });
        onClose();
    };

    const handleLocalClear = () => {
        setLocalFilters({
            category: null,
            color: null,
            price: null,
            company: null,
        });
        clearFilters();
    };

    return (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
            <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-2">
                    <img className="w-6 h-6" src="/logo.png" alt="" />
                    <div className="font-extrabold text-[15px]">
                        Fusion <span className="text-[#4361ee]"> Store</span>
                    </div>
                </div>
                <button onClick={onClose}>
                    <X className="w-6 h-6" />
                </button>
            </div>
            <div className="p-4 overflow-y-auto">
                <Button
                    variant="outline"
                    onClick={handleLocalClear}
                    className="w-full mb-5 hover:bg-black hover:text-white"
                >
                    Clear Filters
                </Button>
                <Category
                    handleChange={handleLocalChange}
                    selectedCategory={localFilters.category}
                />
                <Price
                    handleChange={handleLocalChange}
                    selectedPrice={localFilters.price}
                />
                <Colours
                    handleChange={handleLocalChange}
                    selectedColor={localFilters.color}
                />
                <Button
                    onClick={handleApply}
                    className="w-full mt-5 bg-black text-white hover:bg-gray-800"
                    disabled={!isAnyFilterSelected}
                >
                    Apply Filters
                </Button>
            </div>
        </div>
    );
};

export default MobileSidebar;
