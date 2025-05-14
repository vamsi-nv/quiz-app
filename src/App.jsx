import { Outlet } from 'react-router-dom';
import ThemeContextProvider from './context/ThemeContextProvider';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <ThemeContextProvider>
      
    <div className="transition-colors duration-300 w-full h-screen grid place-items-center bg-white dark:bg-neutral-900 dark:text-white">
      <ThemeToggle/>
      <Outlet />
    </div>
    </ThemeContextProvider>
  );
}

export default App;
