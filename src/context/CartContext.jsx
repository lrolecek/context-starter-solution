import {useState, createContext} from 'react'

export const CartContext = createContext(null)

export function CartProvider({children}) {
  const [cart, setCart] = useState([])

  const addToCart = (id, name, price) => {
    setCart(prev => [
      ...prev,
      {
        id,
        name,
        price,
        amount: 1,
      }
    ])
  }

  const emptyCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      emptyCart,
    }}>
      {children}
    </CartContext.Provider>
  )
}