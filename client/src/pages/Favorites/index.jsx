import FavoritesView from "/src/features/Favorites/FavoritesView";
import { useFavorites } from "/src/features/Favorites/hooks";
import { useAuth } from "/src/context/AuthContext";

const FavoritesPage = () => {
  const { isAuthenticated } = useAuth();
  const favorites = useFavorites();

  if (!isAuthenticated) {
    return <p>Please log in to view your cart.</p>;
  }

  return (
    <FavoritesView
      favoriteItems={favorites.favoriteItems}
      removeFromFavorites = {favorites.removeFromFavorites}
    />
  );
};

export default FavoritesPage;
