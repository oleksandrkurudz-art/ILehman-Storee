import {Link} from 'react-router-dom'

function CategoryCard({category}) {

    return(
        <Link to={`/catalog/${category.id}`}
        className='category-card'>
            <img
            className='category-card__image'
            src={category.image}
            alt={category.title}/>
       <span className='category-card__title'>
        {category.title}
        </span>
        </Link>


    )
    
}

export default CategoryCard