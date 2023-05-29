import React from 'react'
import DropArrow from "../../public/dropArrow.png"
import Image from 'next/image'

function ScheduleDetails() {
  return (
    <div className='bg-[#ffffff] xl:w-[380px] lg:w-[480px] xxs:w-[350px] rounded-[20px] h-[256px] flex flex-col items-center relative'>
      <div className="absolute left-2 top-[30px]">
        <h1 className="text-lg font-bold font-Mont">Today&apos;s Schedule</h1>
      </div>
      <div className="absolute right-2 top-[30px]">
        <h3 className="font-Mont  text-sm text-[#858585] font-normal flex items-center">
          See All
          <Image
            src={DropArrow}
            alt="Drop Arrow"
            width={8}
            height={5}
            className="ml-2"
          />
        </h3>
      </div>
      <div className="absolute top-[77px] left-[15px]">
        <div className="bg-[#9BDD7C]  w-[5px] h-[58px]"></div>
      </div>
      <div className="absolute top-[77px] left-[30px] flex flex-col">
        <span className="text-sm font-semibold font-lato text-[#666666]">Meeting with suppliers from Kuta Bali</span>
        <span className="text-xs font-normal font-lato text-[#999999]">14.00-15.00</span>
        <span className="text-xs font-normal font-lato text-[#999999]">at Sunset Road, Kuta, Bali </span>
      </div>
      <div className="absolute top-[160px] left-[15px]">
        <div className="bg-[#6972C3]  w-[5px] h-[58px]"></div>
      </div>
      <div className="absolute top-[160px] left-[30px] flex flex-col">
        <span className="text-sm font-semibold font-lato text-[#666666]">Check operation at Giga Factory 1</span>
        <span className="text-xs font-normal font-lato text-[#999999]">18.00-20.00</span>
        <span className="text-xs font-normal font-lato text-[#999999]">at Central Jakarta </span>
      </div>

    </div>
    )
}

export default ScheduleDetails