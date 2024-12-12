import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Colours = () => {
    const categories = ["All", "Black", "Blue", "Red", "Green", "White"];
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="mt-5">
            <h2 className="text-[17px] font-bold">Colours</h2>
            <RadioGroup
                className="mt-2"
                value={selectedCategory}
                onValueChange={handleCategoryChange}
            >
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="flex items-center space-x-2 cursor-pointer transition-all duration-200 ease-in-out p-1"
                    >
                        <RadioGroupItem
                            value={category}
                            id={`option-${index}`}
                            className={cn(
                                "w-5 h-5 rounded-full border-gray-200",
                                selectedCategory === category
                                    ? "bg-black text-white"
                                    : "bg-white text-black"
                            )}
                        />
                        <Label
                            htmlFor={`option-${index}`}
                            className="text-gray-700 font-medium text-sm"
                        >
                            {category}
                        </Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    );
};

export default Colours;
