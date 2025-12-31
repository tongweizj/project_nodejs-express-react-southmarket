// src/features/cart/hooks.js
import { useEffect, useState, useMemo } from "react";
import { loadCart, saveCart } from "./api";
import { useAuth } from "/src/context/AuthContext";

export function useCart() {
  const { isAuthenticated } = useAuth();
  const userId = isAuthenticated?.user?._id;
  const [cartItems, setCartItems] = useState([]);

  // 初始化
  useEffect(() => {
    if (userId) {
      setCartItems(loadCart(userId));
    }
  }, [userId]);

  // 持久化
  useEffect(() => {
    if (userId) {
      saveCart(userId, cartItems);
    }
  }, [cartItems, userId]);
 
  /* ---------------------------
     Business Actions
  ---------------------------- */

  const addItem = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i._id === item._id);
      if (existing) {
        return prev.map((i) =>
          i._id === item._id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id, quantity) => {
    console.log(`updateQuantity${id}, ${quantity} :`)
    if (quantity <= 0) return removeItem(id);

    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, quantity } : item
      )
    );
  };

  const remove = (id) => {
    setCartItems((items) => items.filter((i) => i._id !== id));
  };

  const clear = () => setItems([]);

  const subtotal = cartItems.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );
  /* ---------------------------
     Derived State
  ---------------------------- */

  const itemCount = useMemo(
    () => cartItems.reduce((sum, i) => sum + i.quantity, 0),
    [cartItems]
  );

  const totalPrice = useMemo(
    () =>
      cartItems.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      ),
    [cartItems]
  );
  return {
    cartItems,
    addItem,
    remove,
    updateQuantity,
    clear,
    subtotal,
    itemCount,
    totalPrice
  };
}
