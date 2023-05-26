import Image from "next/image"
import dashboard from "../public/dashboard.png" 
import transaction from "../public/transaction_icon.png"
import SidebarLink from "./SidebarLink"
import Schedule from "../public/schedule_icon.png"
import Users from "../public/user_icon.png"
import Settings from "../public/setting_icon.png" 
function Sidebar() {
    return (
        <div className="fixed flex flex-col items-center  xl:h-[92vh] xxs:h-screen xl:w-[280px] bg-[#000000] xl:rounded-[30px] xxs:rounded-none">
            <h1 className="text-[#FFFFFF] font-Mont md:text-4xl xxs:text-sm mt-[60px] font-bold xxs:px-1">Board.</h1>
            <div className="mt-[60px] space-y-10">
                <SidebarLink text="Dashboard" logo={dashboard} active/>
                <SidebarLink text="Transactions" logo={transaction}  />
                <SidebarLink text="Schedules" logo={Schedule}  />
                <SidebarLink text="Users" logo={Users}  />
                <SidebarLink text="Settings" logo={Settings} />
            </div>
        </div>
    )
}

export default Sidebar