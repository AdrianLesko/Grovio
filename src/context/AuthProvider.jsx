import { AuthContext } from './AuthContext.js'
import { useState } from 'react'
import { userLogin, userRegister } from '../services/authApi.js'

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState( () => {
    return localStorage.getItem('token') || null
  })

  const [user, setUser] = useState( () => {
    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  const isAuthenticated = Boolean(token)

  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const login = async (email, password) => {
    try {
      setIsLoading(true)
      const {token, user} = await userLogin(email, password)

      setUser({...user, token: token})
      setToken(token)

      localStorage.setItem('user', JSON.stringify({...user, token: token}))
      localStorage.setItem('token', JSON.stringify(token))

    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (name, surname, email, password) => {
    try {
      setIsLoading(true)
      const {token, user} = await userRegister(name, surname, email, password)

      setUser({...user, token: token})
      setToken(token)

      localStorage.setItem('user', JSON.stringify({...user, token: token}))
      localStorage.setItem('token', JSON.stringify(token))
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    setToken(null)

    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }


  return (
    <AuthContext.Provider value={{token, user, error, isLoading, isAuthenticated, login, register, logout}}>
      {children}
    </AuthContext.Provider>
  )
} 