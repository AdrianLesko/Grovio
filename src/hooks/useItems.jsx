import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import * as itemsApi from '../services/itemsApi.js'
import * as groupApi from '../services/groupsApi.js'
import { useAuthContext } from '../context/AuthContext.js'

export function useItems() {
  const [group, setGroup] = useState(null)
  const [items, setItems] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [itemToEdit, setItemToEdit] = useState(null);

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const { token } = useAuthContext()
  const { groupId } = useParams()
 
  useEffect(() => {
    const getItems = async () => {
      if (!token || !groupId) return
      try {
        const items = await itemsApi.getAll(token, groupId)
        const group = await groupApi.getGroup(token, groupId)
        setItems(items);
        setGroup(group)
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    };
    getItems()
    
    const interval = setInterval(() => {if (document.visibilityState === 'visible'){ 
      getItems()
    }}, 5000)

    window.addEventListener('focus', getItems)


    return () => {
      clearInterval(interval)
      window.removeEventListener('focus', getItems)
    }
  }, [token, groupId]);

  const leaveOrDeleteGroup = async () => {
    try {
      setIsLoading(true)
      await groupApi.deleteGroup(token, groupId)
    } catch (err) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }

  const addItem = async (newItem) => {
    try {
      setIsLoading(true)
      const item = await itemsApi.createItem(newItem, token, groupId)
      setItems((prev) => [item, ...prev]);
    } catch (err) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  };

  const deleteItem = async (item) => {
    try {
      setIsLoading(true)
      await itemsApi.deleteItem(item.id, token, groupId)
      setItems((prev) => prev.filter((e) => e.id !== item.id));
    } catch (err) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  };

  const toggleItem = async (itemToToggle) => {
    try {
      setIsLoading(true)
      const toggledItem = await itemsApi.toggleItem(itemToToggle,token, groupId)
      setItems((prev) =>
        prev.map((item) => {
          return item.id === toggledItem.id ? { ...toggledItem } : item;
        }),
      );
    } catch (err) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  };

  const openEdit = (item) => {
    setItemToEdit(item);
    setModalType("edit");
    setIsOpen(true);
  };

  const updateItem = async (newItem) => {
    try {
      setIsLoading(true)
      const item = await itemsApi.patchItem(newItem, token, groupId)
      setItems((prev) =>
        prev.map((e) => {
          return item.id === e.id ? item : e;
        }),
      );
      setItemToEdit(null);
      setModalType(null);
      setIsOpen(false);
    } catch (err) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  };

  return {
    group,
    leaveOrDeleteGroup,
    items,
    isOpen,
    isLoading,
    setIsOpen,
    modalType,
    setModalType,
    itemToEdit,
    addItem,
    deleteItem,
    toggleItem,
    openEdit,
    updateItem,
    error,
    setError,
  };
}
