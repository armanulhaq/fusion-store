import { Button } from "./ui/button";

const Recommended = () => {
    return (
        <div>
            <h2 className="text-xl font-bold pl-5 pt-5 pb-3">Recommended</h2>
            <div className="flex gap-2 md:gap-4 lg:gap-5 px-5">
                <Button variant="outline">All</Button>
                <Button variant="outline">Nike</Button>
                <Button variant="outline">Adidas</Button>
                <Button variant="outline">Puma</Button>
                <Button variant="outline">Vans</Button>
            </div>
        </div>
    );
};

export default Recommended;
