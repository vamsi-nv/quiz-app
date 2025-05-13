import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import AuthContextProvider from "./context/AuthContextProvider";
import Index from "./pages/Index";
import Quiz from "./components/Quiz";
import Signup from "./components/Signup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Index/>} />
      <Route path="signup" element={<Signup/>} />
      <Route path="login" element={<Login/>}/>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="quiz" element={<Quiz/>}/>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </StrictMode>
);
