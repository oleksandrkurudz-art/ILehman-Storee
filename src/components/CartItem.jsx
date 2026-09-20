import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { formatPrice } from "../utils/format";
import "./CartItem.scss";

function CartItem({ item }) {
  const { removeItem, setQty } = useCart();

  return (
    <div className="cart-item">
      <Link to={`/product/${item.id}`} className="cart-item__image">
        <img src={item.image} alt={item.title} />
      </Link>

      <div className="cart-item__info">
        <Link to={`/product/${item.id}`} className="cart-item__title">
          {item.title}
        </Link>
        <p>{formatPrice(item.price)} / шт.</p>
      </div>

      <div className="cart-item__quantity">
        <button onClick={() => setQty(item.id, item.qty - 1)}>−</button>

        <span>{item.qty}</span>

        <button onClick={() => setQty(item.id, item.qty + 1)}>+</button>
      </div>

      <strong className="cart-item__total">
        {formatPrice(item.price * item.qty)}
      </strong>

      <button className="cart-item__remove" onClick={() => removeItem(item.id)}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M6 6L18 18M18 6L6 18" />
        </svg>
      </button>
    </div>
  );
}

export default CartItem;
