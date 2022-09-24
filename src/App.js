import Background from "./components/Background"
import Header from "./components/Header"
import SocialContainer from "./components/SocialContainer"

function App() {
  return (
    <div className="w-screen h-screen relative font-inter">
      <Background />
      <Header className="max-w-screen-md" />
      <SocialContainer />
    </div>
  )
}

export default App
