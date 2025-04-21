import { X } from "lucide-react";
import Category from "./Category";
import Colours from "./Colours";
import Price from "./Price";
import { Button } from "@/components/ui/button";

const MobileSidebar = ({
    handleChange,
    clearFilters,
    filters,
    isOpen,
    onClose,
}) => {
    if (!isOpen) return null;

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
                    onClick={() => {
                        clearFilters();
                        onClose();
                    }}
                    className="w-full mb-5 hover:bg-black hover:text-white"
                >
                    Clear Filters
                </Button>
                <Category
                    handleChange={handleChange}
                    selectedCategory={filters.category}
                />
                <Price
                    handleChange={handleChange}
                    selectedPrice={filters.price}
                />
                <Colours
                    handleChange={handleChange}
                    selectedColor={filters.color}
                />
            </div>
        </div>
    );
};

export default MobileSidebar;
