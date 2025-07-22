import {useContext} from 'react'
import {CartContext} from '../context/CartContext'
import {UserContext} from '../context/UserContext'

export const Product = ({id, name, description, price, image}) => {

  const {addToCart} = useContext(CartContext)
  const {user} = useContext(UserContext)

  const handleBuy = () => {
    addToCart(id, name, price)
    console.log(`Product ${id} added to cart`)
  }

  return (
    <div style={{border: '5px solid green', margin: '1em', padding: '1em'}}>
      {/* <img src={image} alt={name} /> */}
      <h3>{name}</h3>
      <p>{description}</p>
      <p><strong>{price}</strong> {user.currency}</p>
      { user.isLoggedIn &&
        <button onClick={handleBuy}>Buy</button>
      }
    </div>
  );
}

export default Product;