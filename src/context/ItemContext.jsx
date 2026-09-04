import {createContext, useContext} from 'react'

export const ItemContext = createContext(null)

export function useItemContext () {
  return useContext(ItemContext)
}
