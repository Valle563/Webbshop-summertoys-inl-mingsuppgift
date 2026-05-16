import useCartStore from '../store/cartStore'
import productImages from '../assets/images/productImages.js'
import defaultImage from '../assets/images/leksak.png'
import '../assets/styles/productCard.css'

function ProductCard({ product }) {
  const addItem = useCartStore(state => state.addItem)
  function normalize(s){
    return s
      .toLowerCase()
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, ' ')
      .trim()
  }

  function splitTokens(value) {
    return normalize(value).split(' ').filter(Boolean)
  }

  function findBestMatch(name) {
    const normalizedName = normalize(name)
    const nameTokens = splitTokens(normalizedName)
    let bestKey = null
    let bestScore = 0

    Object.keys(productImages).forEach((key) => {
      const normalizedKey = normalize(key)
      if (normalizedKey === normalizedName) {
        bestKey = key
        bestScore = Infinity
        return
      }

      const keyTokens = splitTokens(normalizedKey)
      const common = keyTokens.filter(token => nameTokens.includes(token)).length
      if (common > bestScore) {
        bestScore = common
        bestKey = key
      }
    })

    return bestKey
  }

  const productName = normalize(product.name || '')
  const imageKey = findBestMatch(product.name || '')
  const image = imageKey ? productImages[imageKey] : defaultImage

  return (
    <div className="product-card">
      <div className="product-card-img">
        {image ? (
          <img src={image} alt={product.name} />
        ) : (
          <div className="product-card-placeholder">
            <span>Ingen bild</span>
          </div>
        )}
      </div>
      <div className="product-card-body">
        <div>
          <h3>{product.name}</h3>
          <p className="product-card-price">{product.price} kr</p>
        </div>
        <button className="btn btn-red btn-md btn-pill" onClick={() => addItem(product)}>+ Lägg till</button>
      </div>
    </div>
  )
}

export default ProductCard