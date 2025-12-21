import { useContext, useEffect, useMemo } from "react";
import { CartContext } from "/src/context/CartContext";
import { useAuth } from "/src/context/AuthContext";

export function useCart() {
  const context = useContext(CartContext);
  const { isAuthenticated } = useAuth();

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  const { cartItems, setCartItems } = context;
  const userId = isAuthenticated?.user?._id;

  /* ---------------------------
     Persistence (localStorage)
  ---------------------------- */

  useEffect(() => {
    if (!userId) return;

    const saved = localStorage.getItem(`cart_${userId}`);
    if (saved) {
      setCartItems(JSON.parse(saved));
    }
  }, [userId, setCartItems]);

  useEffect(() => {
    if (!userId) return;

    localStorage.setItem(
      `cart_${userId}`,
      JSON.stringify(cartItems)
    );
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

  const removeItem = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => item._id !== id)
    );
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

  const clearCart = () => setCartItems([]);

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
    removeItem,
    updateQuantity,
    clearCart,
    itemCount,
    totalPrice,
  };
}
