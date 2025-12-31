// src/pages/CartPage.jsx
import CartView from "/src/features/cart/CartView";
import { useCart } from "/src/features/cart/hooks";
import { useAuth } from "/src/context/AuthContext";

const CartPage = () => {
  const { isAuthenticated } = useAuth();
  const cart = useCart();

  if (!isAuthenticated) {
    return <p>Please log in to view your cart.</p>;
  }

  return (
    <CartView
      items={cart.cartItems}
      subtotal={cart.subtotal}
      onIncrement={cart.increment}
      onDecrement={cart.decrement}
      onRemove={cart.remove}
      onCheckout={cart.clear}
      tax={0.13}
    />
  );
};

export default CartPage;
