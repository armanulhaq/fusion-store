import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Star, ShoppingCart, Truck } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const ProductCard = ({
    img,
    title,
    reviews,
    prevPrice,
    newPrice,
    discount,
}) => {
    const sizes = [6, 7, 8, 9, 10];
    const [selectedSize, setSelectedSize] = useState(0);
    console.log(discount);

    return (
        <section>
            <Card className="py-2 transform transition-transform duration-300 hover:scale-105">
                <CardContent className="w-100% flex text-center justify-center">
                    <img
                        className="w-[160px] h-[100px] md:w-[200px] md:h-[132px] lg:w-[300px] lg:h-[150px] mt-5 lg:my-10"
                        src={img}
                        alt=""
                    />
                </CardContent>
                <CardTitle className="px-4 text-sm lg:text-lg truncate">
                    {title}
                </CardTitle>
                <CardDescription className="flex flex-col gap-2 px-4 py-1">
                    <div className="flex gap-1 lg:gap-2">
                        <div className="flex">
                            <Star
                                className={cn(
                                    "w-3 h-3 lg:w-4 lg:h-4 fill-yellow-400 text-yellow-400"
                                )}
                            />
                            <Star
                                className={cn(
                                    "w-3 h-3 lg:w-4 lg:h-4 fill-yellow-400 text-yellow-400"
                                )}
                            />
                            <Star
                                className={cn(
                                    "w-3 h-3 lg:w-4 lg:h-4 fill-yellow-400 text-yellow-400"
                                )}
                            />
                            <Star
                                className={cn(
                                    "w-3 h-3 lg:w-4 lg:h-4 fill-yellow-400 text-yellow-400"
                                )}
                            />
                            <Star
                                className={cn(
                                    "w-3 h-3 lg:w-4 lg:h-4 fill-yellow-400 text-yellow-400"
                                )}
                            />
                        </div>

                        <div className="text-xs">{reviews}</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-red-700">
                            ${newPrice}
                        </span>
                        <span className="text-gray-500 line-through">
                            {prevPrice}
                        </span>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs lg:text-sm font-medium text-gray-700">
                            Select Size
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={cn(
                                        "px-4 py-2 rounded-full border text-sm font-medium transition-colors",
                                        selectedSize === size
                                            ? " bg-[#000] text-white"
                                            : "border-gray-200 hover:border-gray-300"
                                    )}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-2 my-2 text-sm text-gray-600">
                        <Truck className="w-5 h-5" />
                        <span className="text-xs lg:text-xs ">
                            Free delivery on orders over $100
                        </span>
                    </div>
                    <Button className="w-full bg-black hover:bg-gray-800 text-white">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                    </Button>
                </CardDescription>
            </Card>
        </section>
    );
};

export default ProductCard;
