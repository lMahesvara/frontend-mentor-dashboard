import React from "react"

const Header = ({ setDarkMode }) => {
  return (
    <header
      className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 py-8 md:px-4 w-4/5 mx-auto   mb-5 
      "
    >
      <div className="border-b border-[#63687e] md:border-none pb-4 md:pb-0 ">
        <h1 className="text-xl md:text-3xl font-bold dark:text-white">
          Social Media Dashboard
        </h1>
        <p className="text-sm text-[#63687e] dark:text-[#8b97c6] font-semibold">
          Total Followers: 23,004
        </p>
      </div>
      <div className="flex items-center justify-between md:gap-3 ">
        <span className="md:ml-3 text-sm font-bold text-[#8f95af] dark:text-[#aeb3cb] ">
          Dark Mode
        </span>
        <label
          htmlFor="default-toggle"
          className="inline-flex relative items-center cursor-pointer"
        >
          <input
            type="checkbox"
            value=""
            id="default-toggle"
            className="sr-only peer"
            defaultChecked
            onClick={() => setDarkMode(prev => !prev)}
          />
          <div className="w-11 h-6 bg-[#a5acca] peer-focus:outline-none  rounded-full peer dark:bg-gradient-to-r dark:from-[#378fe6] dark:to-[#3eda82] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-100 dark:after:bg-[#242635]  after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
    </header>
  )
}

export default Header
