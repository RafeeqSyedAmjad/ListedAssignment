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
    </div>
    )
}

export default ScheduleDetails