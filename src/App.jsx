import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="w-full h-screen grid place-items-center">
      <Outlet />
    </div>
  );
}

export default App;
