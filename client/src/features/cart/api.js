
const CART_KEY = (userId) => `cart_${userId}`;

export function loadCart(userId) {
  if (!userId) return [];
  const raw = localStorage.getItem(CART_KEY(userId));
  return raw ? JSON.parse(raw) : [];
}

export function saveCart(userId, items) {
  if (!userId) return;
  localStorage.setItem(CART_KEY(userId), JSON.stringify(items));
}