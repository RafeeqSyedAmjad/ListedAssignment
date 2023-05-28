import React from 'react'
import DashboardDetails from './DashboardDetails'
import ActivitiesChart from './ActivitiesChart'
import TopProductDetails from './TopProductDetails'
import ScheduleDetails from './ScheduleDetails'

function Dashboard() {
  return (
    <div className="flex flex-col items-center gap-10">
        <DashboardDetails/>
        <ActivitiesChart/>
        <div className="flex xxs:flex-col xl:ml-[280px] lg:ml-[240px]  xl:gap-[130px] xxs:gap-[40px] md:flex-row sm:gap-[40px] 2xl:gap-[150px] mb-[40px]">
              <TopProductDetails />
              <ScheduleDetails />
        </div>
    </div>
  )
}

export default Dashboard