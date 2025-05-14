import { createContext, useContext, useEffect, useState } from "react"

export const ThemeContext = createContext();

function ThemeContextProvider({children}) { 
    const [theme, setTheme]    = useState('dark');
    
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

        setTheme(savedTheme);
    },[]);

    useEffect(() => {
        if(theme === 'dark'){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);

export default ThemeContextProvider