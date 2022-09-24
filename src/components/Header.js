import React from "react"

const Header = () => {
  return (
    <header
      className="flex justify-between items-center py-8 px-4 w-4/5 mx-auto mb-5
      "
    >
      <div>
        <h1 className="text-3xl font-bold">Social Media Dashboard</h1>
        <p className="text-sm text-[#63687e] font-semibold">
          Total Followers: 23,004
        </p>
      </div>
      <div>
        <button>Dark Mode</button>
      </div>
    </header>
  )
}

export default Header
