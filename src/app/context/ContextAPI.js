'use client'
import React, { useState, createContext, useEffect } from "react"
import { jwtDecode } from "jwt-decode"

export const LoginContext = createContext()

const dataLogin = {
  username: 'admin',
  password: 'admin',
  rol: 'admin'
}

export const LoginProvider = ({ children }) => {

  const [userData, setUserData] = useState(null)
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    if (userData && userData.token) {
      const tokenInfo = jwtDecode(userData.token)
      setUserInfo({
        name: tokenInfo.full_name,
        username: tokenInfo.username,
        rol: tokenInfo.rol
      })
    }
  }, [userData])


  return (
    <LoginContext.Provider value={{
      userData, setUserData, userInfo
    }}
    >
      {children}
    </LoginContext.Provider>
  )
}