import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Header from './components/Header'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Favorites from './pages/Favorites'
import { useState } from 'react'
import Footer from './components/Footer'

function App() {
  const [search, setSearch] = useState('')

 
  return (
   <>
   <Header search={search} setSearch={setSearch} />
    <div className="app">
      
      <Routes>
      <Route path='/' element={<Home search={search} />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/about' element={<About />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path='*' element={<NotFound/>}/>
       </Routes> 
    </div>
    <Footer />
    </>
  )
}

export default App
