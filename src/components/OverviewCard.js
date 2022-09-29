import React from "react"
import iconUp from "../images/icon-up.svg"
import iconDown from "../images/icon-down.svg"

const OverviewCard = ({ title, amount, icon, up, percentage }) => {
  const todayColor = up ? "text-[#1db489]" : "text-[#dc414c]"
  const todayIcon = up ? iconUp : iconDown
  return (
    <article className="h-full w-full flex flex-col items-center gap-6 py-5 rounded-xl text-center  bg-[#f0f2fa] hover:bg-[#e2e4ec] dark:bg-[#252a41] dark:hover:bg-[#363e5f] px-6">
      <div className="flex justify-between items-center w-full ">
        <span className="text-[#63687e] dark:text-[#8b97c6] font-semibold">
          {title}
        </span>
        {icon}
      </div>
      <div className="flex justify-between w-full">
        <h2 className="text-3xl font-black text-[#1e202a] dark:text-white">
          {amount}
        </h2>
        <div className="flex items-center gap-1">
          <img src={todayIcon} alt="arrow" />
          <span className={`text-sm font-semibold ${todayColor}`}>
            {percentage}%
          </span>
        </div>
      </div>
    </article>
  )
}

export default OverviewCard
