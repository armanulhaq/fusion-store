import { Input } from "@/components/ui/input";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";

const Navigation = () => {
    return (
        <nav className="flex justify-between border-b items-center md:ml-[15rem] lg:ml-[18rem] gap-3 p-5 z-20 lg:pr-[2rem]">
            <div className="flex gap-3">
                <img className="w-6 h-6 lg:w-7 lg:h-7" src="/logo.png" alt="" />
                <div className="hidden lg:block font-extrabold text-[15px] lg:text-[20px]">
                    Fusion <span className="text-[#4361ee]"> Store</span>
                </div>
            </div>

            <Input
                className="w-[190px] lg:w-[400px] relative text-sm"
                type="text"
                placeholder="Search"
            />
            <div className="flex text-center gap-4 lg:gap-8">
                <a href="#">
                    <FaShoppingCart className="w-5 h-5" color="#4361ee" />
                </a>
                <a href="#">
                    <FaHeart className="w-5 h-5" color="#4361ee" />
                </a>
                <a href="#">
                    <FaUserAlt className="w-5 h-5" color="#4361ee" />
                </a>
            </div>
        </nav>
    );
};

export default Navigation;
