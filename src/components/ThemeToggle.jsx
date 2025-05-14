import { useTheme } from "../context/ThemeContextProvider"


function ThemeToggle() {
    const {theme, setTheme} = useTheme();

  return (
    <button
     className="focus:outline-2 focus:outline-blue-500 cursor-pointer p-2 rounded-lg bg-gray-200 dark:bg-gray-700 absolute top-5 right-5"
     onClick={() => setTheme(theme === 'light' ? 'dark': 'light') }>
        {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}

export default ThemeToggle