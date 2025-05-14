import { useTheme } from "../context/ThemeContextProvider"


function ThemeToggle() {
    const {theme, setTheme} = useTheme();

  return (
    <button
     className="cursor-pointer p-2 rounded-lg bg-gray-200 dark:bg-gray-700 absolute top-5 right-5"
     onClick={() => setTheme(theme === 'dark' ? 'light': 'dark') }>
        {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}

export default ThemeToggle