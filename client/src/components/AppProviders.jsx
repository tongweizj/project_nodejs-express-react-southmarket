import { AuthProvider } from '@/context/AuthContext.jsx';
import { CartProvider } from '@/context/CartContext';
import { FavoritesProvider } from '@/context/FavoritesContext';

const AppProviders = ({ children }) => (
  <AuthProvider>
    <CartProvider>
      <FavoritesProvider>
        {children}
      </FavoritesProvider>
    </CartProvider>
  </AuthProvider>
);
export default AppProviders;