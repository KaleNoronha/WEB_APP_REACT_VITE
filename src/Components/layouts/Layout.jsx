import { useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import MainView from "./MainView"

function Layout() {
  const [currentSection, setcurrentSection] = useState('home');

  return (
    <div>
      <Header setcurrentSection={setcurrentSection} currentSection={currentSection} />
      <MainView currentSection={currentSection} />
      <Footer />
    </div>
  )
}

export default Layout;