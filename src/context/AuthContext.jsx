import { createContext, useContext } from 'react' 
import { useState } from 'react'

export const AuthContext = createContext(null)

export const useAuthContext = () => {
  return useContext(AuthContext)
}
 
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState( () => {
    return localStorage.getItem('token') || null
  })

  const [user, setUser] = useState( () => {
    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  const isAuthenticated = Boolean(token)

  const login = (email, password) => {
    const token = 'sim-mock-token'
    setToken(token)
    localStorage.setItem('token', JSON.stringify(token))


    const simUser = {email}
    setUser(simUser)
    localStorage.setItem('user', JSON.stringify(simUser))
  }

  const logout = () => {
    setUser(null)
    setToken(null)

    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }


  return (
    <AuthContext.Provider value={{token, user, isAuthenticated, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
} 

