import {useState} from 'react'
export function useItems () {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [modalType, setModalType] = useState(null)
  const [itemToEdit, setItemToEdit] = useState(null)
  

   const addItem = (newItem) => {
    setItems(prev => [newItem, ...prev]);
  };

  const deleteItem = (idToDelete) => {
    setItems( prev => prev.filter(item => item.id !== idToDelete))
  }


  const toggleItem = (itemToToggle) => {
    setItems(prev => prev.map(item => {
      return item.id === itemToToggle.id ? 
        {...item, isBought: !itemToToggle.isBought} :
        item
    }))
  }

  const openEdit = (item) => {
      setItemToEdit(item)
      setModalType('edit')
      setIsOpen(true)
    } 
    
  const updateItem = (newItem) => {
    setItems(prev => prev.map(item => {
      return item.id === newItem.id ? newItem : item
    }))
    setIsOpen(false)
    setItemToEdit(null)
    setModalType(null)
  }

  return { items, isOpen, setIsOpen, modalType, setModalType, itemToEdit, addItem, deleteItem, toggleItem, openEdit, updateItem}
}