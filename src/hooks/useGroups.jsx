import * as groupsApi from '../services/groupsApi.js'
import { useState, useEffect } from 'react'
import { useAuthContext } from '../context/AuthContext.js'

export function useGroups () {
  const [groups, setGroups] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const {token} = useAuthContext() 

  useEffect(() => {
    if (!token) return
    const getGroups = async () => {
      try {
        setIsLoading(true)
        const groups = await groupsApi.getGroups(token)
        setGroups(groups)
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    }
    getGroups()
  }, [token])

  useEffect(() => {
    const timer = setTimeout(() => setError(null), 4000)

    return () => clearTimeout(timer)
  }, [error])


  const createGroup = async ( name ) => {
    try {
      setIsLoading(true)
      const group = await groupsApi.createGroup(token, name)
      setGroups(prev => [group, ...prev])
      return group
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  const joinGroup = async (code) => {
    try {
      setIsLoading(true)
      const group = await groupsApi.joinGroup(token, code)
      setGroups( prev => [group, ...prev])
      return group
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }



 return { groups, isLoading, error, createGroup, joinGroup}

  
}