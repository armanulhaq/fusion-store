import Category from "./Category";
import Colours from "./Colours";
import Price from "./Price";

const Sidebar = () => {
    return (
        <div className="hidden md:block border-r lg:block w-[15%] h-[100vh]">
            <div className="flex gap-2   items-center p-5 z-20 ">
                <img className="w-6 h-6 lg:w-7 lg:h-7" src="/logo.png" alt="" />
                <div className="hidden lg:block font-extrabold text-[15px] lg:text-[19px]">
                    Fusion <span className="text-[#4361ee]"> Store</span>
                </div>
            </div>
            <div className="w-full flex flex-col mt-10 md:px-7 lg:px-12">
                <Category />
                <Price />
                <Colours />
            </div>
        </div>
    );
};

export default Sidebar;
