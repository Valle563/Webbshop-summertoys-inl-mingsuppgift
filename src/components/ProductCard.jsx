import useCartStore from "../store/cartStore";

function ProductCard({ product }) {
  const addItem = useCartStore(state => state.addItem)

  return (
    <div>
      <p> {product.name} </p>
      <p> {product.price}</p>

      <button onClick={() => addItem(product)}> + Lägg till </button>
    </div>
  ) 
}

export default ProductCard