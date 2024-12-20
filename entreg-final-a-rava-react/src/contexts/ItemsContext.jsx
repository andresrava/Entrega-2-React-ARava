import { createContext, useState } from "react";

export const ItemsContext = createContext();

export const Provider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    const alreadyExists = items.some((i) => i.data.id === newItem.data.id);

    if (alreadyExists) {
      const transformedItems = items.map((i) => {
        if (i.data.id == newItem.data.id) {
          return { ...i, quantity: i.quantity + newItem.quantity };
        } else {
          return i;
        }
      });
      setItems(transformedItems);
    } else {
      setItems((prev) => [...prev, newItem]);
    }
  };

  const reset = () => {
    setItems([]);
  };

  const removeItems = (id) => {
    const updatedItems = items.filter((i) => i.data.id !== id);
    setItems(updatedItems);
  };
  return (
    <ItemsContext.Provider value={{ items, addItem, reset, removeItems }}>
      {children}
    </ItemsContext.Provider>
  );
};
