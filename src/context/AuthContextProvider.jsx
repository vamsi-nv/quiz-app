import { createContext, useState, useContext } from "react"

export const AuthContext = createContext();

function AuthContextProvider({children}) {
    const [userName, setUsername] = useState(() => {
        return localStorage.getItem('username') || '';

    });

    const login = (name) => {
        setUsername(name);
        localStorage.setItem('username', name);
    }

    const logout = () => {
        setUsername('');
        localStorage.removeItem('username');
        localStorage.removeItem('score');
    }

  return (
  
        <AuthContext.Provider value={{userName, login, logout}}>
            {children}
        </AuthContext.Provider>
  
  )
}

export const useAuth = () => {
    return useContext(AuthContext);
}

export default AuthContextProvider