import useCartStore from '../store/cartStore'
import productImages from '../assets/images/productImages.js'
import '../assets/styles/ProductCard.css'

function ProductCard({ product }) {
  const addItem = useCartStore(state => state.addItem)
  const image = productImages[product.name]

  return (
    <div className="product-card">
      <div className="product-card-img">
        {image
          ? <img src={image} alt={product.name} />
          : <div className="product-card-placeholder">🏖️</div>
        }
      </div>
      <div className="product-card-body">
        <h3>{product.name}</h3>
        <p>{product.price} kr</p>
        <button onClick={() => addItem(product)}>+ Lägg till</button>
      </div>
    </div>
  )
}

export default ProductCard