import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

function CartBuyButton({ product, className = "" }) {
  const { items, addItem } = useCart();
  const navigate = useNavigate();
  const inCart = items.some((item) => item.id === product.id);

  function handleClick() {
    if (inCart) {
      navigate("/cart");
      return;
    }

    addItem(product);
  }

  return (
    <button
      className={`${className}${inCart ? " is-in-cart" : ""}`}
      disabled={!product.inStock && !inCart}
      onClick={handleClick}
    >
      {inCart ? "У кошику" : product.inStock ? "Купити" : "Немає в наявності"}
    </button>
  );
}

export default CartBuyButton;
