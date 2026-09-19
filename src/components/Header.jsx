import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import CartIcon from "./icons/CartIcon";
import HeartIcon from "./icons/HeartIcon";
import SearchIcon from "./icons/SearchIcon";
import "./Header.scss";

function Header({ search, setSearch }) {
  const { totalCount } = useCart();
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    setSearch(search.trim());
    navigate("/");
  }
  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo">
          ILehman-Store
        </Link>

        <form className="header__search" onSubmit={handleSearch} role="search">
          <button
            type="submit"
            className="header__search-icon"
          >
            <SearchIcon />
          </button>

          <input
            type="search"
            className="header__search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Пошук товарів"
          />
        </form>

        <nav className="header__nav">
          <NavLink to="/" className="header__link">
            Каталог
          </NavLink>
          <NavLink to="/about" className="header__link">
            Про нас
          </NavLink>
          <NavLink to="/contacts" className="header__link">
            Зв’язок
          </NavLink>
        </nav>

        <div className="header__actions">
          <NavLink to="/favorites" className="header__icon">
            <HeartIcon />
          </NavLink>

          <NavLink to="/cart" className="header__icon">
            <CartIcon />
            {totalCount > 0 && (
              <span className="header__badge">{totalCount}</span>
            )}
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
