import Card from "./components/Card"
import ThemeBtn from "./components/ThemeBtn"

const App = () => {
  return(
    <div className="flex flex-col h-screen bg-gray-800 gap-5 justify-center items-center">
      <ThemeBtn/>
      <Card/>
    </div>
  )
}
export default App