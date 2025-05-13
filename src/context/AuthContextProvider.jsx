import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [userCredentials, setUserCredentials] = useState({});

  

  return (
    <AuthContext.Provider value={{ userCredentials, setUserCredentials }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

export default AuthContextProvider;
