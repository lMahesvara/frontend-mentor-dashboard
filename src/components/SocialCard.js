import React from "react"
import iconUp from "../images/icon-up.svg"
import iconDown from "../images/icon-down.svg"

const SocialCard = ({ username, amount, type, today, up, icon, color }) => {
  const todayColor = up ? "text-[#1db489]" : "text-[#dc414c]"
  const todayIcon = up ? iconUp : iconDown
  const newColor = Array.isArray(color)
    ? `bg-gradient-to-r ${color[0]} ${color[1]}`
    : `${color}`

  return (
    <article className={` rounded-xl ${newColor}  `}>
      <div className="h-full w-full flex flex-col items-center justify-around gap-5 py-6 rounded-xl text-center  bg-[#f0f2fa] hover:bg-[#e2e4ec] dark:bg-[#252a41] dark:hover:bg-[#363e5f] mt-1 ">
        <div className="flex items-center gap-2">
          {icon}
          <span className="dark:text-[#8b97c6]">{username}</span>
        </div>
        <div>
          <h2 className="text-5xl font-black text-[#1e202a] dark:text-white">
            {amount}
          </h2>
          <p className="text-[#63687e] dark:text-[#8b97c6] text-sm tracking-[0.25em] mt-1">
            {type.toUpperCase()}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <img src={todayIcon} alt="arrow" />
          <span className={`text-sm font-semibold ${todayColor}`}>
            {today} Today
          </span>
        </div>
      </div>
    </article>
  )
}

export default SocialCard
