import { useCart } from "./CartContext";
import { formatPrice } from "../utils/format";
import { Link} from "react-router-dom";
import "./ProductCard.scss";
import CartBuyButton from "./CartBuyButton";
import HeartIcon from "./icons/HeartIcon";
import {useFavorites} from "../components/FavoritesContext";

function ProductCard({ product }) {
  const { favorites, toggleFavorite } = useFavorites();
  const { items, addItem } = useCart();
  const inCart = items.some((item) => item.id === product.id);
  const isFavorite = favorites.includes(product.id)
  return (
    <div className="card">
      <button className={`card__svg ${isFavorite ? 'card__svg--active' : ''}`} type='button' onClick={() => toggleFavorite(product.id)}>
      <HeartIcon filled={isFavorite}/>
      </button>
      <Link to={`/product/${product.id}`}>
        <img className="card__image" src={product.image} alt={product.title} />
      </Link>
      
      <Link to={`/product/${product.id}`}>
        <h3 className="card__title">{product.title}</h3>
      </Link>
      <p className="card__price">{formatPrice(product.price)}</p>
      <CartBuyButton product={product} className="card__button" />
    </div>
  );
}

export default ProductCard;
