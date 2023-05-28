import Image from "next/image";
import Vector3 from "../../public/Vector3.png";
import twoprofile from "../../public/twoprofile.png";
import transaction from "../../public/transactions.png";
import thumbsup from "../../public/thumbsup.png";

function DashboardDetails() {
    return (
        <div className="flex  flex-wrap gap-8 xl:gap-10 2xl:gap-[100px] 2xl:ml-[270px]  lg:ml-[300px] lg:gap-4 xl:ml-[300px] mt-[40px] xxs:items-center xxs:justify-center" >
            <div className="bg-[#DDEFE0] rounded-[20px] flex items-center justify-between h-[120px] w-[222px]">
                <div className="flex flex-col gap-1 ml-[25px] mt-[45px]">
                    <h4 className="font-lato font-normal text-[14px]">Total Revenues</h4>
                    <h2 className="text-2xl font-bold">$2,129,430</h2>
                </div>
                <div className="relative mr-[25.65px] mb-[76px]">
                    <Image src={Vector3} width={26.4} height={24} alt="total Revenue logo" />
                </div>
            </div>
            <div className="bg-[#F4ECDD] rounded-[20px] flex items-center justify-between h-[120px] w-[222px]">
                <div className="flex flex-col gap-1 ml-[25px] mt-[45px]">
                    <h4 className="font-lato font-normal text-[14px]">Total Transactions</h4>
                    <h2 className="text-2xl font-bold">1,520</h2>
                </div>
                <div className="relative mr-[25.65px] mb-[76px]">
                    <Image src={transaction} width={26.4} height={24} alt="total Revenue logo" />
                </div>
            </div>
            <div className="bg-[#EFDADA] rounded-[20px] flex items-center justify-between h-[120px] w-[222px]">
                <div className="flex flex-col gap-1 ml-[25px] mt-[45px]">
                    <h4 className="font-lato font-normal text-[14px]">Total Likes</h4>
                    <h2 className="text-2xl font-bold">9,721</h2>
                </div>
                <div className="relative mr-[25.65px] mb-[76px]">
                    <Image src={thumbsup} width={26.4} height={24} alt="total Revenue logo" />
                </div>
            </div>
            <div className="bg-[#DEE0EF] rounded-[20px] flex items-center justify-between h-[120px] w-[222px]">
                <div className="flex flex-col gap-1 ml-[25px] mt-[45px]">
                    <h4 className="font-lato font-normal text-[14px]">Total Users</h4>
                    <h2 className="text-2xl font-bold">892</h2>
                </div>
                <div className="relative mr-[25.65px] mb-[76px]">
                    <Image src={twoprofile} width={26.4} height={24} alt="total Revenue logo" />
                </div>
            </div>

        </div>
    )
}

export default DashboardDetails