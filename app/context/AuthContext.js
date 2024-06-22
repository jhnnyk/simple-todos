'use client'
import { createContext, useEffect, useState } from "react"
import { auth } from "@/firebase/config"

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      setUser(user)
      unsub()
    })
  }, [])

  console.log('AuthContext state: ', user)

  return (
    <AuthContext.Provider value={user}>
      { children }
    </AuthContext.Provider>
  )
}
