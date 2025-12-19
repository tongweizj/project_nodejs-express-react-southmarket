import React, { createContext, useState} from 'react';
import { useAuth } from './AuthContext';

export const FavoritesContext = createContext(null);

export const FavoritesProvider = ({ children }) => {

  const [favoriteItems, setFavoriteItems] = useState([]);
  return (
    <FavoritesContext.Provider 
      value={{ favoriteItems, setFavoriteItems}}
    >
      {children}
    </FavoritesContext.Provider>
  );
};