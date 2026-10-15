import { useState, useEffect } from "react";
import { getAll, createItem, deleteItem, toggleItem, patchItem } from '../services/itemsApi.js'

export function useItems() {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [itemToEdit, setItemToEdit] = useState(null);

  useEffect(() => {
    const getItems = async () => {
      try {
        const items = await getAll()
        setItems(items);
      } catch (err) {
        console.log(err);
      }
    };
    getItems();
  }, []);

  const addItem = async (newItem) => {
    try {
      const item = await createItem(newItem)
      setItems((prev) => [item, ...prev]);
    } catch (err) {
      console.error(err);
      return;
    }
  };

  const deleteItem = async (item) => {
    try {
      await deleteItem(item.id)
      setItems((prev) => prev.filter((e) => e.id !== item.id));
    } catch (err) {
      console.error(err);
      return;
    }
  };

  const toggleItem = async (itemToToggle) => {
    try {
      const toggledItem = await toggleItem(itemToToggle)
      setItems((prev) =>
        prev.map((item) => {
          return item.id === toggledItem.id ? { ...toggledItem } : item;
        }),
      );
    } catch (err) {
      console.error(err.message);
      return;
    }
  };

  const openEdit = (item) => {
    setItemToEdit(item);
    setModalType("edit");
    setIsOpen(true);
  };

  const updateItem = async (newItem) => {
    try {
      const item = await patchItem(newItem)
      setItems((prev) =>
        prev.map((e) => {
          return item.id === e.id ? item : e;
        }),
      );
      setItemToEdit(null);
      setModalType(null);
      setIsOpen(false);
    } catch (err) {
      console.error(err.message);
      return;
    }
  };

  return {
    items,
    isOpen,
    setIsOpen,
    modalType,
    setModalType,
    itemToEdit,
    addItem,
    deleteItem,
    toggleItem,
    openEdit,
    updateItem,
  };
}
