// src/features/cart/hooks.js
import { useEffect, useState } from "react";
import { loadCart, saveCart } from "./api";
import { useAuth } from "/src/context/AuthContext";

export function useCart() {
  const { isAuthenticated } = useAuth();
  const userId = isAuthenticated?.user?._id;

  const [items, setItems] = useState([]);

  // 初始化
  useEffect(() => {
    if (userId) {
      setItems(loadCart(userId));
    }
  }, [userId]);

  // 持久化
  useEffect(() => {
    if (userId) {
      saveCart(userId, items);
    }
  }, [items, userId]);
 
  const increment = (id) => {
    setItems((items) =>
      items.map((i) =>
        i._id === id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  const decrement = (id) => {
    setItems((items) =>
      items.map((i) =>
        i._id === id && i.quantity > 1
          ? { ...i, quantity: i.quantity - 1 }
          : i
      )
    );
  };

  const remove = (id) => {
    setItems((items) => items.filter((i) => i._id !== id));
  };

  const clear = () => setItems([]);

  const subtotal = items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  return {
    items,
    subtotal,
    increment,
    decrement,
    remove,
    clear
  };
}
