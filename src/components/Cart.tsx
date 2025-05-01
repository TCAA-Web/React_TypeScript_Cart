import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const Cart = () => {
  const { cartData, removeFromCart, clearCart, addToCart } = useContext(CartContext)

  return (
    <div>
      <h2>Cart: </h2>
      <div>
        <ul>
          {cartData.map((product) => {
            return (
              <li>
                <b>{product.title}</b>
                <p>{product.price * product.quantity!} Dkk</p>
                <button onClick={() => removeFromCart(product.id)}>-</button>
                <p>{product.quantity}</p>
                <button onClick={() => addToCart(product)}>+</button>
              </li>
            )
          })}
        </ul>
      </div>
      <button onClick={clearCart}>Tøm kurv</button>
    </div>
  )
}
