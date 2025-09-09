import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
    const [isDark,setIsDark] = useState(true);

    useEffect(() => {
        const saved = localStorage.getItem("isDark");
        if(saved !== null){
            setIsDark(JSON.parse(saved));
        }
    },[])

    const ThemeToggle = () => {
        setIsDark((prev) => !prev);
    }

    useEffect(() => {
        localStorage.setItem("isDark",JSON.stringify(isDark))
    },[isDark])

    const value = {
        isDark,
        ThemeToggle
    }

       return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
       )
}

export const UseThemeContext = () => useContext(ThemeContext);