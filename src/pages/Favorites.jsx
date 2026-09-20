import { Link } from "react-router-dom";
import { useFavorites } from "../components/FavoritesContext";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Favorites.scss";

function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();
  const favoriteProducts = products.filter((p) => favorites.includes(p.id));

  return (
    <div className="container favorites">
      <h1>Обране</h1>

      {favoriteProducts.length === 0 ? (
        <>
          <p>Тут поки порожньо.</p>
          <Link to="/">До каталогу</Link>
        </>
      ) : (
        <div className="favorites__grid">
          {favoriteProducts.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />

              <button
                className="favorites__remove"
                onClick={() => toggleFavorite(product.id)}
              >
                Видалити з обраного
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
