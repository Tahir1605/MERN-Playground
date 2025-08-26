import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Github from "./pages/Github"
import Footer from "./components/Footer"
import ContactLayout from "../layout/ContactLayout"
import ContactForm from "./components/ContactForm"
import ContactInfo from "./components/ContactInfo"
import NotFound from "./components/NotFound"

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/github" element={<Github />} />
          <Route path="/contact" element={<ContactLayout />}>
            <Route path="form" element={<ContactForm />} />
            <Route path="info" element={<ContactInfo />} />
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
