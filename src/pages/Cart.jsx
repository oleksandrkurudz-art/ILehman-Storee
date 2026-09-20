import { Link } from "react-router-dom";
import { useCart } from "../components/CartContext";
import CartItem from "../components/CartItem";
import { formatPrice } from "../utils/format";
import "./Cart.scss";

function Cart() {
  const { items, totalCount, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <main className="container cart">
        <div className="cart__empty">
          <h1>Кошик порожній</h1>
          <p>Знайди щось для себе в нашому каталозі.</p>
          <Link to="/" className="cart__checkout">
            Перейти до каталогу
          </Link>
        </div>
      </main>
    );
  }

  return (
     <main className="container cart">
      <h1 className="cart__title">Кошик</h1>

      <div className="cart__layout">
        <div>
          <div className="cart__items">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="cart__actions">
            <Link to="/">← Продовжити покупки</Link>
            <button onClick={clearCart}>Очистити кошик</button>
          </div>
        </div>

        <aside className="cart__summary">
          <h2>Ваше замовлення</h2>

          <div className="cart__row">
            <span>Кількість товарів</span>
            <span>{totalCount}</span>
          </div>

          <div className="cart__row cart__row--total">
            <span>Разом</span>
            <strong>{formatPrice(totalPrice)}</strong>
          </div>

          <Link to="/checkout" className="cart__checkout">
            Оформити замовлення
          </Link>
        </aside>
      </div>
    </main>
  );
}

export default Cart;
