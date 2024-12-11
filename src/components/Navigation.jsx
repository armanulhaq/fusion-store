import { Input } from "@/components/ui/input";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";

const Navigation = () => {
    return (
        <nav className="flex justify-between border-b items-center ml-[20rem] gap-4 p-5 z-20 pr-[20rem]">
            <Input
                className="w-[400px] relative "
                type="text"
                placeholder="Search"
            />
            <div className="flex text-center gap-5">
                <a href="#">
                    <FaShoppingCart />
                </a>
                <a href="#">
                    <FaHeart />
                </a>
                <a href="#">
                    <FaUserAlt />
                </a>
            </div>
        </nav>
    );
};

export default Navigation;
