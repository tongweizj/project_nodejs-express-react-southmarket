import { useEffect, useState } from "react";
import { loadFavorites, saveFavorites } from "./api";
import { useAuth } from "/src/context/AuthContext";


export function useFavorites() {
  const { isAuthenticated } = useAuth();
  const userId = isAuthenticated?.user?._id;

  const [favoriteItems, setFavoriteItems] = useState([]);

  // 初始化
  useEffect(() => {
    if (userId) {
      setFavoriteItems(loadFavorites(userId));
    }
  }, [userId]);

  // 持久化
  useEffect(() => {
    if (userId) {
      saveFavorites(userId, favoriteItems);
    }
  }, [favoriteItems, userId]);
 
    const addToFavorites = (item) => {
        setFavoriteItems((prev) => {
            if (prev.some((i) => i._id === item._id)) return prev;
            return [...prev, item];
        });
    };

    const removeFromFavorites = (id) => {
        setFavoriteItems((prev) =>
            prev.filter((item) => item._id !== id)
        );
    };

    const isFavorite = (id) =>
        favoriteItems.some((item) => item._id === id);

  return {
    favoriteItems,
    addToFavorites,
    removeFromFavorites,
    isFavorite
  };
}
