import { useState } from "react"
import Background from "./components/Background"
import Header from "./components/Header"
import Overview from "./components/Overview"
import SocialContainer from "./components/SocialContainer"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={` ${darkMode ? "dark" : ""}`}>
      <Background />
      <div
        className={`w-screen h-full min-h-screen font-inter  dark:bg-[#1c1e26] transition-colors duration-200 ease-in-out `}
      >
        <Header className="max-w-screen-md" setDarkMode={setDarkMode} />
        <SocialContainer />
        <Overview />
      </div>
    </div>
  )
}

export default App
