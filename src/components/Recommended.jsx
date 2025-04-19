import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Recommended = ({ handleClick, selectedCompany }) => {
    return (
        <div>
            <h2 className="text-xl font-bold pl-5 pt-5 pb-3">Recommended</h2>
            <div className="flex gap-2 md:gap-4 lg:gap-5 px-5">
                <Button
                    variant="outline"
                    onClick={handleClick}
                    value=""
                    className={cn(
                        "hover:bg-black hover:text-white",
                        selectedCompany === "" && "bg-black text-white"
                    )}
                >
                    All
                </Button>
                <Button
                    variant="outline"
                    onClick={handleClick}
                    value="Adidas"
                    className={cn(
                        "hover:bg-black hover:text-white",
                        selectedCompany === "Adidas" && "bg-black text-white"
                    )}
                >
                    Adidas
                </Button>
                <Button
                    variant="outline"
                    onClick={handleClick}
                    value="Nike"
                    className={cn(
                        "hover:bg-black hover:text-white",
                        selectedCompany === "Nike" && "bg-black text-white"
                    )}
                >
                    Nike
                </Button>
                <Button
                    variant="outline"
                    onClick={handleClick}
                    value="Puma"
                    className={cn(
                        "hover:bg-black hover:text-white",
                        selectedCompany === "Puma" && "bg-black text-white"
                    )}
                >
                    Puma
                </Button>
                <Button
                    variant="outline"
                    onClick={handleClick}
                    value="Vans"
                    className={cn(
                        "hover:bg-black hover:text-white",
                        selectedCompany === "Vans" && "bg-black text-white"
                    )}
                >
                    Vans
                </Button>
            </div>
        </div>
    );
};

export default Recommended;
