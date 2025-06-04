import { useLocation } from 'react-router-dom';
import './cart.css'


const Cart = () => {

    const { state } = useLocation();
const cart = state ? state.cart : [];

    const calculateTotal = (cart) => {
        return cart.reduce((total, item) => total + item.price, 0)
    }
    return (
        <div>
      <h1>Cart Page</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.title} - ${item.price}
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${calculateTotal(cart)}</h3>
    </div>
    )
}

export default Cart;