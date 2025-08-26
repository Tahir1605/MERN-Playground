
import Card from "./components/Card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="flex flex-col gap-5">
      <Navbar />
      <Card />
      <Footer />
    </div>
  )
}

export default App