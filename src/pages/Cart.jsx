import { Link } from 'react-router'
import useCartStore from '../store/cartStore'
import '../assets/styles/cart.css'

function Cart() {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Kundvagnen är tom!</h2>
        <p>Hitta något kul i shoppen! 🏄</p>
        <Link to="/products">
          <button className="btn btn-green btn-md btn-pill">Gå till shoppen</button>
        </Link>
      </div>
    )
  }

  return (
    <div className="cart">
      <h2>Din kundvagn</h2>
      {items.map(item => (
        <div key={item.id} className="cart-item">
          <p>{item.name}</p>
          <div className="qty-control">
            <button className="btn btn-primary btn-sm btn-pill" onClick={() => updateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}>−</button>
            <span>{item.quantity}</span>
            <button className="btn btn-primary btn-sm btn-pill" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
          </div>
          <p>{item.price * item.quantity} kr</p>
          <button className="btn btn-red btn-sm btn-pill" onClick={() => removeItem(item.id)}>Ta bort</button>
        </div>
      ))}
      <div className="cart-total">
        <h3>Totalt: {getTotal()} kr</h3>
        <button className="btn btn-checkout btn-lg btn-pill">Beställ</button>
      </div>
    </div>
  )
}

export default Cart