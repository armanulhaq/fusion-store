import { Button } from "./ui/button";

const Recommended = ({ handleClick }) => {
    return (
        <div>
            <h2 className="text-xl font-bold pl-5 pt-5 pb-3">Recommended</h2>
            <div className="flex gap-2 md:gap-4 lg:gap-5 px-5">
                <Button variant="outline" onClick={handleClick}>
                    All
                </Button>
                <Button variant="outline" onClick={handleClick}>
                    Nike
                </Button>
                <Button variant="outline" onClick={handleClick}>
                    Adidas
                </Button>
                <Button variant="outline" onClick={handleClick}>
                    Puma
                </Button>
                <Button variant="outline" onClick={handleClick}>
                    Vans
                </Button>
            </div>
        </div>
    );
};

export default Recommended;
