import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../components/CartContext'
import { formatPrice } from '../utils/format'
import './Checkout.scss'

function Checkout() {
  const { items, totalPrice, clearCart } = useCart()
  const [form, setForm] = useState({
    name: '',
    lastname: '',
    phone: '',
    email: '',
  })
  const [isDone, setIsDone] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (
      !form.name.trim() ||
      !form.lastname.trim() ||
      !form.phone.trim() ||
      !form.email.trim()
    ) {
      setError('Заповніть усі поля')
      return
    }

    setError('')
    setIsDone(true)
    clearCart()
  }

  if (isDone) {
    return (
      
        <div className='checkout__message'>
          <h1>Дякуємо, {form.name}!</h1>
          <p>Тестове оформлення завершено.</p>
          <Link to='/' className='checkout__submit'>
            До каталогу
          </Link>
        </div>
   
    )
  }

  if (items.length === 0) {
    return (
      
        <div className='checkout__message'>
          <h1>Кошик порожній</h1>
          <p>Додай товари, щоб перейти до оформлення.</p>
          <Link to='/' className='checkout__submit'>
            Перейти до каталогу
          </Link>
        </div>

    )
  }

  return (
    <div className='container checkout'>
      <Link to='/cart' className='checkout__back'>
        ← Повернутися до кошика
      </Link>

      <h1 className='checkout__title'>Оформлення замовлення</h1>

      <div className='checkout__layout'>
        <form className='checkout__form' onSubmit={handleSubmit}>
          <h2>Контактні дані</h2>

          <div className='checkout__fields'>
            <label className='checkout__field'>
              <span>Ім’я</span>
              <input
                name='name'
                autoComplete='given-name'
                value={form.name}
                onChange={handleChange}
                placeholder='Олександр'
                required
              />
            </label>

            <label className='checkout__field'>
              <span>Прізвище</span>
              <input
                name='lastname'
                autoComplete='family-name'
                value={form.lastname}
                onChange={handleChange}
                placeholder='Шевченко'
                required
              />
            </label>

            <label className='checkout__field'>
              <span>Номер телефону</span>
              <input
                type='tel'
                name='phone'
                autoComplete='tel'
                value={form.phone}
                onChange={handleChange}
                placeholder='+380'
                required
              />
            </label>

            <label className='checkout__field'>
              <span>Електронна пошта</span>
              <input
                type='email'
                name='email'
                autoComplete='email'
                value={form.email}
                onChange={handleChange}
                placeholder='name@example.com'
                required
              />
            </label>
          </div>

          {error && (
            <p className='checkout__error'>
              {error}
            </p>
          )}

          <button type='submit' className='checkout__submit'>
            Підтвердити замовлення
          </button>
        </form>

        <div className='checkout__summary'>
          <h2>Ваше замовлення</h2>

          <div className='checkout__items'>
            {items.map((item) => (
              <div className='checkout__item' key={item.id}>
                <img src={item.image} alt={item.title} />

                <div>
                  <Link to={`/product/${item.id}`}>{item.title}</Link>
                  <p>
                    {item.qty} шт. × {formatPrice(item.price)}
                  </p>
                </div>

                <span className='checkout__item-price'>
                  {formatPrice(item.price * item.qty)}
                </span>
              </div>
            ))}
          </div>

          <div className='checkout__total'>
            <span>Разом</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
