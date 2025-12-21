import { useContext, useEffect } from "react";
import { FavoritesContext } from "/src/context/FavoritesContext";
import { useAuth } from "../context/AuthContext";
/**
 * Domain hook for Favorites
 * Single entry point for favorites logic
 */
export function useFavorites() {
    const context = useContext(FavoritesContext);
    const { isAuthenticated } = useAuth();

    if (!context) {
        throw new Error("useFavorites must be used within FavoritesProvider");
    }

    //   const { favorites, addFavorite, removeFavorite } = context;
    const { favoriteItems, setFavoriteItems } = context;
    const userId = isAuthenticated?.user?._id;

    // 👉 从 localStorage 读取
    useEffect(() => {
        if (!userId) return;

        const saved = localStorage.getItem(`favorites_${userId}`);
        if (saved) {
            setFavoriteItems(JSON.parse(saved));
        }
    }, [userId, setFavoriteItems]);

    // 👉 写回 localStorage
    useEffect(() => {
        if (!userId) return;

        localStorage.setItem(
            `favorites_${userId}`,
            JSON.stringify(favoriteItems)
        );
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
        isFavorite,
        count: favoriteItems.length,
    };
}