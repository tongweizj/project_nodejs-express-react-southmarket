import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from '../src/context/AuthContext';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [favoriteItems, setFavoriteItems] = useState([]);
  
  // Load favourites from local storage when the component mounts
  useEffect(() => {
    if (isAuthenticated) {
      const savedFavorites = localStorage.getItem(`favorites_${isAuthenticated.user._id}`);
      if (savedFavorites) {
        setFavoriteItems(JSON.parse(savedFavorites));
      }
    }
  }, [isAuthenticated]);
  
  // Save favourites to local storage whenever it changes
  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem(`favorites_${isAuthenticated.user._id}`, JSON.stringify(favoriteItems));
    }
  }, [favoriteItems, isAuthenticated]);

  const addToFavorites = (item) => {
    setFavoriteItems((prevItems) => {
      const existingItem = prevItems.find((i) => i._id === item._id);
      if (existingItem) {
        return prevItems;
      } else {
        return [...prevItems, item];
      }
    });
  };

  const removeFromFavorites = (id) => {
    setFavoriteItems((prevItems) => prevItems.filter((item) => item._id !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favoriteItems, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};