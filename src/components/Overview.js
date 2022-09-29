import React from "react"
import iconFacebook from "../images/icon-facebook.svg"
import iconTwitter from "../images/icon-twitter.svg"
import iconInstagram from "../images/icon-instagram.svg"
import iconYoutube from "../images/icon-youtube.svg"
import OverviewCard from "./OverviewCard"

const info = [
  {
    title: "Page Views",
    amount: "87",
    icon: <img src={iconFacebook} alt="facebook" />,
    up: true,
    percentage: 3,
  },
  {
    title: "Likes",
    amount: "52",
    icon: <img src={iconFacebook} alt="facebook" />,
    up: false,
    percentage: 2,
  },
  {
    title: "Likes",
    amount: "5462",
    icon: <img src={iconInstagram} alt="instagram" />,
    up: true,
    percentage: 2257,
  },
  {
    title: "Profile Views",
    amount: "52k",
    icon: <img src={iconInstagram} alt="instagram" />,
    up: true,
    percentage: 1375,
  },
  {
    title: "Retweets",
    amount: "117",
    icon: <img src={iconTwitter} alt="twitter" />,
    up: true,
    percentage: 303,
  },
  {
    title: "Likes",
    amount: "507",
    icon: <img src={iconTwitter} alt="twitter" />,
    up: true,
    percentage: 553,
  },
  {
    title: "Likes",
    amount: "107",
    icon: <img src={iconYoutube} alt="youtube" />,
    up: false,
    percentage: 19,
  },
  {
    title: "Total Views",
    amount: "1407",
    icon: <img src={iconYoutube} alt="youtube" />,
    up: false,
    percentage: 12,
  },
]

const Overview = () => {
  return (
    <>
      <h2 className="w-4/5 mx-auto mt-12 text-[#63687e] dark:text-white text-2xl font-bold">
        Overview - Today
      </h2>
      <section className="w-4/5 mt-12 mx-auto grid grid-cols-auto-fit gap-6">
        {info.map((item, index) => (
          <OverviewCard
            key={index}
            title={item.title}
            amount={item.amount}
            icon={item.icon}
            up={item.up}
            percentage={item.percentage}
          />
        ))}
      </section>
    </>
  )
}

export default Overview
