export function loadFavorites(userId) {
  const raw = localStorage.getItem(`favorites_${userId}`);
  return raw ? JSON.parse(raw) : [];
}

export function saveFavorites(userId, favorites) {
  localStorage.setItem(
    `favorites_${userId}`,
    JSON.stringify(favorites)
  );
}