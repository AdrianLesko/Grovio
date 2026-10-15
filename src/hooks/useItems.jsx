import { useState, useEffect } from "react";
export function useItems() {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [itemToEdit, setItemToEdit] = useState(null);

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await fetch("http://localhost:8000/items");
        if (!response.ok) {
          throw new Error("response !ok");
        }
        const items = await response.json();
        setItems(items);
      } catch (err) {
        console.log(err);
      }
    };
    getItems();
  }, []);

  const addItem = async (newItem) => {
    try {
      const response = await fetch("http://localhost:8000/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });

      if (!response.ok) {
        return;
      }

      const item = await response.json();
      console.log("new item created and added to database");
      setItems((prev) => [item, ...prev]);
    } catch (err) {
      console.error(err);
      return;
    }
  };

  const deleteItem = async (item) => {
    try {
      const response = await fetch(`http://localhost:8000/items/${item.id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("failed to update database");
      }
      setItems((prev) => prev.filter((e) => e.id !== item.id));
    } catch (err) {
      console.error(err);
      return;
    }
  };

  const toggleItem = async (itemToToggle) => {
    try {
      const response = await fetch(
        `http://localhost:8000/items/${itemToToggle.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ isBought: !itemToToggle.isBought }),
        },
      );
      const toggledItem = await response.json();
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
      const response = await fetch(
        `http://localhost:8000/items/${newItem.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newItem),
        },
      );

      if (!response.ok) {
        throw new Error("Something went wrong updating the data");
      }

      const item = await response.json();
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
