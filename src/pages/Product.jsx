import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../components/CartContext";
import { formatPrice } from "../utils/format";
import ProductCard from "../components/ProductCard";
import "./Product.scss";
import { useFavorites } from "../components/FavoritesContext";
import CartBuyButton from "../components/CartBuyButton";
function Product() {
  const { id } = useParams();
  const { favorites, toggleFavorite } = useFavorites();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h1>Товар не знайдено</h1>;
  }
  const isFavorite = favorites.includes(product.id);
  const variants = products.filter((p) => p.category === product.category);
  const related = variants.filter((p) => p.id !== product.id);

  return (
    <main className="product">
      <div className="container">
        <nav className="product__breadcrumbs">
          <Link to="/">Каталог</Link>
          <span>/</span>
          <span>{product.title}</span>
        </nav>

        <div className="product__main">
          <div className="product__gallery">
            <div className="product__thumbnails">
              {variants.map((variant) => (
                <Link
                  key={variant.id}
                  to={`/product/${variant.id}`}
                  className={`product__thumbnail ${
                    variant.id === product.id
                      ? "product__thumbnail--active"
                      : ""
                  }`}
                >
                  <img src={variant.image} alt="" />
                </Link>
              ))}
            </div>

            <img
              className="product__image"
              src={product.image}
              alt={product.title}
            />
          </div>

          <div className="product__info">
            <h1 className="product__title">{product.title}</h1>
            <p className="product__price">{formatPrice(product.price)}</p>

            <p className="product__stock">
              {product.inStock ? "Є в наявності" : "Немає в наявності"}
            </p>

            <p className="product__description">{product.description}</p>
            <div className="product__actions">
              <button
                className="product__favorite"
                onClick={() => toggleFavorite(product.id)}
              >
                {isFavorite ? "Видалити з обраного" : "Додати в обране"}
              </button>

              <CartBuyButton product={product} className="product__button" />
            </div>
            <div className="product__service">
              <div>
                <span>Доставка та оплата</span>
                <Link to="/contacts">Уточнити умови</Link>
              </div>

              <div>
                <span>Потрібна допомога?</span>
                <Link to="/contacts">Зв’язатися з нами</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="product__details">
        <div className="container">
          <div className="product__details-inner">
            <h2>Деталі товару</h2>
            <p className="product__description">{product.description}</p>

            <dl className="product__specs">
              <div>
                <dt>Назва</dt>
                <dd>{product.title}</dd>
              </div>
              <div>
                <dt>Ціна</dt>
                <dd>{formatPrice(product.price)}</dd>
              </div>
              <div>
                <dt>Наявність</dt>
                <dd>{product.inStock ? "Є в наявності" : "Очікується"}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="product__reviews">
          <h2>Відгуки</h2>
          <p>Про цей товар поки немає відгуків.</p>
        </section>

        {related.length > 0 && (
          <section className="product__related">
            <h2>Схожі товари</h2>

            <div className="product__related-grid">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default Product;
