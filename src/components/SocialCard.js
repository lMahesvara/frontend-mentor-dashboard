import React from "react"
import svg from "../images/icon-down.svg"

const SocialCard = ({ name, username, followers, today, up, icon, color }) => {
  return (
    <article className="flex flex-col bg-[#f0f2fa] items-center justify-around gap-5 py-6 rounded-xl border-t-4 border-t-blue-500  ">
      <div>
        <img src={icon} alt={name} />
        <span>{username}</span>
      </div>
      <div>
        <h2 className="text-5xl font-black text-[#1e202a]">{followers}</h2>
        <p className="text-[#63687e] tracking-[0.25em]">Followers</p>
      </div>
      <div>
        <p className="text-sm text-[#1db489] font-semibold">{today} Today</p>
      </div>
    </article>
  )
}

export default SocialCard
