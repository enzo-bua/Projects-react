import React, { useState } from "react";

export const Context = React.createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token') //lee si esta registrado o no
  }) 
  const value = {
    isAuth,
    activateAuth: (token) => {
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
    },
    removeAuth: () => {
      setIsAuth(false)
      window.sessionStorage.removeItem('token')
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
    )
}

export default {
  Provider,
  Consumer: Context.Consumer
}