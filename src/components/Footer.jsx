import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__info">
          <Link to="/" className="footer__logo">
            ILehman-Store
          </Link>

          <p className="footer__description">
            Магазин техніки Apple. Допоможемо обрати пристрій для роботи,
            творчості та щоденного користування.
          </p>

          <div className="footer__socials">
            <span>Instagram</span>
            <span>Telegram</span>
            <span>TikTok</span>
          </div>
        </div>

        <nav className="footer__column">
          <h3 className="footer__title">Покупки</h3>
          <Link to="/">Каталог товарів</Link>
          <Link to="/favorites">Обране</Link>
          <Link to="/cart">Кошик</Link>
          <Link to="/checkout">Оформлення замовлення</Link>
        </nav>

        <nav className="footer__column">
          <h3 className="footer__title">Допомога покупцю</h3>
          <Link to="/about">Про нас</Link>
          <Link to="/contacts">Зв’язатися з нами</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
