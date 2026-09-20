import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";
import { useState } from "react";
import "./home.scss";
function Home({ search }) {
  const visible = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <Hero />
      <div className="container">
        <h1 className="catalog__title">Каталог</h1>

        {visible.length === 0 && <p>Нічого не знайдено</p>}

        <div className="catalog__grid">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
