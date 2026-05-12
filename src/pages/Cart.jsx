import useCartStore from '../store/cartStore'

function Cart() {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore()

  if (items.length === 0) return <p>Kundvagnen är tom!</p>

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price} kr</p>
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}>−</button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
          <button onClick={() => removeItem(item.id)}>Ta bort</button>
        </div>
      ))}
      <p>Totalt: {getTotal()} kr</p>
    </div>
  )
}

export default Cart