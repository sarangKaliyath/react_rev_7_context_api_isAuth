import React from "react";
import { useState } from "react";

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");

  const handleAuth = (token) => {
    if (token) {
      setIsAuth(true);
      setToken(token);
    }
  };

  const value = { isAuth, token, handleAuth ,setIsAuth};

  return <AuthContext.Provider value={value}>{children} </AuthContext.Provider>;
};
