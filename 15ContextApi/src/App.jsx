import ThemeButton from "./components/ThemeButton"
import ThemeCard from "./components/ThemeCard"
import { UseThemeContext } from "./context/ThemeContext"


const App = () => {
  const {isDark} = UseThemeContext();
  return (
    <div className={` flex justify-center items-center flex-col gap-5 h-screen ${isDark ? 'bg-gray-700' : 'bg-gray-100'} `}>
        <ThemeButton/>
        <ThemeCard/>
    </div>
  )
}

export default App