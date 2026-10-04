import {Link} from 'react-router-dom'
import './TopDescribe.scss'

function TopDescribe( {categoryTitle}) {
    return (
        <nav className='TopDescribe'>
            <Link to='/'> Головна </Link>
        
        <span className="TopDescribe__arrow">›</span>

      <span>Каталог</span>

      <span className="TopDescribe__arrow">›</span>

      <span className="TopDescribe__current">
        {categoryTitle}
      </span>
    </nav>
  )
}

export default TopDescribe