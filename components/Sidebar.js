import Image from "next/image"
import dashboard from "../public/dashboard.png" 
import transaction from "../public/transaction_icon.png"
import SidebarLink from "./SidebarLink"
import Schedule from "../public/schedule_icon.png"
import Users from "../public/user_icon.png"
import Settings from "../public/setting_icon.png" 
import {XMarkIcon} from "@heroicons/react/24/outline" 
function Sidebar() {
    return (
        <div onClick={dropdown} className="fixed flex flex-col items-center  xl:h-[92vh] xxs:h-screen xl:w-[280px] bg-[#000000] xl:rounded-[30px] xxs:rounded-none">
            <div className="flex justify-end w-full pr-4 mt-2 lg:hidden">
                <XMarkIcon className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-[#FFFFFF] font-Mont md:text-4xl xxs:text-sm mt-[60px] font-bold xxs:px-1  xl:mr-[35px]">Board.</h1>
            <div className="mt-[60px] space-y-10">
                <SidebarLink text="Dashboard" logo={dashboard} active/>
                <SidebarLink text="Transactions" logo={transaction}  />
                <SidebarLink text="Schedules" logo={Schedule}  />
                <SidebarLink text="Users" logo={Users}  />
                <SidebarLink text="Settings" logo={Settings} />
            </div>

            <div className="mt-auto space-y-5 text-sm font-normal font-Mont mb-[60px] xl:mr-[35px]">
                <h3 className="text-[#FFFFFF] ">Help</h3>
                <h3 className="text-[#FFFFFF]">Contact Us</h3>
            </div>


        </div>
    )
}

export default Sidebar