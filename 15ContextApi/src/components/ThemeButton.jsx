import { UseThemeContext } from "../context/ThemeContext"

const ThemeButton = () => {
    const {isDark,ThemeToggle} = UseThemeContext();
    return(
        <div>
            <button className={`px-4 py-2 text-xl font-semibold rounded-md cursor-pointer ${isDark ? 'bg-gray-900 text-white' : 'bg-green-700 text-black'}`} onClick={ThemeToggle}>Theme {`${isDark ? 'Dark':'Light'}`} </button>
        </div>
    )
}

export default ThemeButton