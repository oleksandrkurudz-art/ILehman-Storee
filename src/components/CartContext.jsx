import {createContext, useContext, useState, useEffect} from 'react'

const CartContext = createContext(null)





function readState() {
  const cart = localStorage.getItem("cart");

  if (!cart) {
    return [];
  }

  try {
    return JSON.parse(cart);
  } catch (e) {
    return [];
  }
}



export function CartProvider({children}) {
    const [items, setItems] = useState(readState)    
   
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(items))
    }, [items])

    const totalCount = items.reduce((sum, item) => sum + item.qty, 0)
    const totalPrice = items.reduce((sum, item) => sum + item.price * item.qty, 0)


    const value = { items, totalCount, totalPrice, addItem, removeItem, setQty, clearCart}
  
  
  function removeItem(id){
    setItems((prev) => prev.filter((item) => item.id !== id))
  }
  function setQty(id, qty) {
  if (qty < 1) {
    return removeItem(id)
  }
  setItems((prev) => prev.map((item) => (item.id === id ? { ...item, qty } : item)))
}

function clearCart() {
  setItems([])
}


  function addItem(product) {
    setItems((prev) => {
      const eviable = prev.find((item) => item.id === product.id)
      
      if (eviable) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      }

      return [...prev, { ...product, qty: 1 }]
    })
  }
  



    return <CartContext.Provider value={value}>{children}
    </CartContext.Provider>
    

}

export function useCart() {
  return useContext(CartContext)
}