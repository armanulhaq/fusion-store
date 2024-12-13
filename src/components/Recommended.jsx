import { Button } from "./ui/button";

const Recommended = ({ handleClick }) => {
    return (
        <div>
            <h2 className="text-xl font-bold pl-5 pt-5 pb-3">Recommended</h2>
            <div className="flex gap-2 md:gap-4 lg:gap-5 px-5">
                <Button variant="outline" onClick={handleClick} value="">
                    All
                </Button>
                <Button variant="outline" onClick={handleClick} value="Adidas">
                    Adidas
                </Button>
                <Button variant="outline" onClick={handleClick} value="Nike">
                    Nike
                </Button>
                <Button variant="outline" onClick={handleClick} value="Puma">
                    Puma
                </Button>
                <Button variant="outline" onClick={handleClick} value="Vans">
                    Vans
                </Button>
            </div>
        </div>
    );
};

export default Recommended;
