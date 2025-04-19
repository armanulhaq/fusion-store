import { Input } from "@/components/ui/input";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { Menu } from "lucide-react";

const Navigation = ({ handleInputChange, query, onMenuClick }) => {
    return (
        <nav className="flex justify-between border-b items-center lg:pr-20 gap-3 p-5 z-20">
            <div className="flex items-center gap-2">
                <img
                    className="lg:hidden w-6 h-6 lg:w-7 lg:h-7"
                    src="/logo.png"
                    alt=""
                />
            </div>

            <Input
                className="w-[190px] lg:w-[400px] relative text-sm"
                type="text"
                placeholder="Search"
                onChange={handleInputChange}
                value={query}
            />
            <div className="flex items-center gap-4 lg:gap-8">
                <button onClick={onMenuClick} className="md:hidden">
                    <Menu className="w-6 h-6" />
                </button>
                <div className="hidden md:flex gap-4 lg:gap-8">
                    <a href="#">
                        <FaShoppingCart className="w-5 h-5" color="black" />
                    </a>
                    <a href="#">
                        <FaHeart className="w-5 h-5" color="black" />
                    </a>
                    <a href="#">
                        <FaUserAlt className="w-5 h-5" color="black" />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
