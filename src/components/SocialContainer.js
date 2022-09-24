import React from "react"
import SocialCard from "./SocialCard"

const info = [
  {
    name: "facebook",
    username: "@nathanf",
    followers: "1987",
    today: "12",
    up: true,
    icon: "../images/icon-facebook.svg",
    color: "#198ff5",
  },
  {
    name: "twitter",
    username: "@nathanf",
    followers: "1044",
    today: "99",
    up: true,
    icon: "../images/icon-twitter.svg",
    color: "#1ca0f2",
  },
  {
    name: "instagram",
    username: "@realnathanf",
    followers: "11k",
    today: "1099",
    up: true,
    icon: "../images/icon-instagram.svg",
    color: ["#fdc468", "#df4996"],
  },
  {
    name: "youtube",
    username: "@nathanf",
    followers: "8239",
    today: "144",
    up: false,
    icon: "../images/icon-youtube.svg",
    color: "#c4032a",
  },
]

const SocialContainer = () => {
  return (
    <section className="w-4/5 grid grid-cols-auto-fit  gap-4 mx-auto">
      {info.map(item => (
        <SocialCard
          key={item.name}
          name={item.name}
          username={item.username}
          followers={item.followers}
          today={item.today}
          up={item.up}
          icon={item.icon}
          color={item.color}
        />
      ))}
    </section>
  )
}

export default SocialContainer
