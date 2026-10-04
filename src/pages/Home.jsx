import { products, categories } from "../data/products";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";
import { useRef } from "react";
import "./home.scss";
import CategoryCard from "../components/CategoryCard"
function Home({ search }) {
  const visible = products.filter((product) => {
  const matchesSearch = product.title
    .toLowerCase()
    .includes(search.toLowerCase())



  return matchesSearch
})

  const categoriesRef = useRef(null)


  function ScrollCategories(righrLeft) {
    categoriesRef.current.scrollBy({
      left: righrLeft * 300,     
      behavior: 'smooth',
    })
  }
 

  return (
    <div>
      <Hero />
  <section className="categories">
  <div className="container">
    <div className='categories__top'>
    <h2 className="categories__title">Категорії</h2>
      <div className='categories__actions'>
        <button
        type="button"
        onClick={() => ScrollCategories(-1)}
        className='categories__arrow'
        >
           &lt;
            </button>

            <button 
            type='button'
            onClick={() => ScrollCategories(+1)}
            className='categories__arrow'>
            
&gt;

            </button>
            </div>
            </div>
    <div className="categories__grid" ref={categoriesRef}>
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
        />
      ))}
    </div>
  </div>
</section>

      <div className="container">
        <h1 className="catalog__title">Каталог</h1>

  
  <div>
    {visible.length === 0 && <p>Нічого не знайдено</p>}

    <div className="catalog__grid">
      {visible.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>

</div>
      </div>
  );
}

export default Home;
