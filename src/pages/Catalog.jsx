import { useParams } from "react-router-dom";
import { categories, products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import Filters from "../components/Filters";
import "./Catalog.scss"
import {filtersByCategory} from '../data/catalogFilters'
import TopDescribe from "../components/TopDescribe"
function Catalog() {
  const { categoryId } = useParams();
  const filtersGroups = filtersByCategory[categoryId] ?? []
  const category = categories.find((item) => item.id === categoryId);
  const startFilters = {
  gb: [],
  color: [],
  price: []
}

  const [filters, setFilters] = useState(startFilters)

  const categoryProduct = products.filter(
    (product) => product.category === categoryId,
  );

  const visible = categoryProduct.filter((product) => {

  return (
    filtersGroups.every((group) => {
      const selected = filters[group.id] ?? []

      return (
        selected.length === 0 ||
        selected.includes(product[group.id])
      )
    })
  )
})
  if (!category) {
    return <h1> Категорію не знайдено</h1>;
  }
  return (
    <main className="catalog-page">
      
      <div className="container">
        <TopDescribe categoryTitle={category.title}/>
        <h1 className="catalog__title">{category.title}</h1>


       <div className="catalog-page__layout">
        <Filters
    filters={filters}
    setFilters={setFilters}
    groups={filtersGroups}
    startFilters={startFilters}
  />
  <div className="catalog-page__content">
    {visible.length === 0 && (
      <p>Товарів за такими фільтрами не знайдено.</p>
    )}
  <p className="catalog-page__count">
  Знайдено товарів: {visible.length}
</p>
    <div className="catalog__grid">
      {visible.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          
        />
      ))}
    </div>
  </div>

  
</div>
      </div>
    </main>
  );
}
export default Catalog;
