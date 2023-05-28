import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Vector from "../public/Vector1.png";
import apple from "../public/apple1.svg";

function Header() {
    return (
        <div className="flex items-center  justify-between max-h-max text-black lg:ml-[340px] 2xl:ml-[450px]  xxs:ml-[80px] sm:ml-[130px] sm:mr-[40px] xs:ml-[180px] lg:mr-[60px]  lg:mt-[50px] xxs:mt-[23px]">
            <h1 className="hidden text-2xl font-bold sm:block font-Mont">Dashboard</h1>
            <div className="flex items-center gap-8 xxs:gap-6">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="text-sm font-lato font-normal placeholder-[#B0B0B0] focus:outline-none active:outline-none w-[11rem] h-[30px] pl-[15px] rounded-[10px]"
                    />
                    <MagnifyingGlassIcon className="absolute w-3 h-3 text-[#858585] -translate-y-1/2 top-1/2 right-[9px]" />
                </div>
                <Image src={Vector} width={18} height={20} alt="Bell Icon" />
                <img src={apple} alt="" className="w-[30px] h-[30px] rounded-full" />
            </div>
        </div>
    );
}

export default Header;
