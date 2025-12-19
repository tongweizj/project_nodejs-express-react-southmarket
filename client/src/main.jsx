import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { CartProvider } from '/helpers/CartContext';
import { FavoritesProvider } from '/helpers/FavoritesContext';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <AuthProvider>
    <CartProvider>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </CartProvider>
  </AuthProvider>
);