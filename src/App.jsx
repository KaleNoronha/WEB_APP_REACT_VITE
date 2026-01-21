import Layout from "./Components/layouts/layout"
import { Routes, Route } from "react-router"
import {Contact,Home,Service,About,Page }from "./Page"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="page" element={<Page />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App