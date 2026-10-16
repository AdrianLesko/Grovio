import { useState, useEffect } from "react";
import * as itemsApi from '../services/itemsApi.js'

export function useItems() {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getItems = async () => {
      try {
        const items = await itemsApi.getAll()
        setItems(items);
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    };
    getItems();
  }, []);

  const addItem = async (newItem) => {
    try {
      setIsLoading(true)
      const item = await itemsApi.createItem(newItem)
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
      await itemsApi.deleteItem(item.id)
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
      const toggledItem = await itemsApi.toggleItem(itemToToggle)
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
      const item = await itemsApi.patchItem(newItem)
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
