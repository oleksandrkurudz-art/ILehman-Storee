import { Link } from 'react-router-dom'
function NotFound() {
    return (
       <div>
        <h2>Такої сторінки не існує</h2>
        <Link to='/'> На головну </Link>
        </div>
    )
}

export default NotFound