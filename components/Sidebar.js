
import dashboard from "../public/dashboard.png"
import transaction from "../public/transaction_icon.png"
import SidebarLink from "./SidebarLink"
import Schedule from "../public/schedule_icon.png"
import Users from "../public/user_icon.png"
import Settings from "../public/setting_icon.png"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid"
import { useState } from "react"


function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    function toggleSidebar() {
        setSidebarOpen(!sidebarOpen);
    }

    return (
        <div className="flex lg:mt-[40px] lg:ml-[40px]">
            <span className="absolute text-4xl text-white cursor-pointer lg:hidden top-5 left-4" onClick={toggleSidebar}>
                <Bars3BottomLeftIcon className="h-8 px-2 bg-black rounded-md w-9" />
            </span>
            <div
                className={`sidebar xxs:z-40 fixed flex flex-col items-center lg:h-[92vh] xxs:h-screen w-[280px] bg-[#000000] lg:rounded-[30px] xxs:rounded-none ${sidebarOpen ? "" : "xxs:left-[-300px]  lg:left-[40px]"
                    }`}


            >
                <div className="flex justify-end w-full pr-4 mt-2 lg:hidden">
                    <XMarkIcon className="w-6 h-6 text-white cursor-pointer" onClick={toggleSidebar} />
                </div>
                <h1 className="text-[#FFFFFF] font-Mont text-4xl mt-[60px] font-bold mr-[35px]">Board.</h1>
                <div className="mt-[60px] space-y-10">
                    <SidebarLink text="Dashboard" logo={dashboard} active  />
                    <SidebarLink text="Transactions" logo={transaction} />
                    <SidebarLink text="Schedules" logo={Schedule} />
                    <SidebarLink text="Users" logo={Users} />
                    <SidebarLink text="Settings" logo={Settings} />
                </div>

                <div className="mt-auto space-y-5 text-sm font-normal font-Mont mb-[60px] mr-[35px]">
                    <h3 className="text-[#FFFFFF] ">Help</h3>
                    <h3 className="text-[#FFFFFF]">Contact Us</h3>
                </div>


            </div>

        </div>

    )
}

export default Sidebar