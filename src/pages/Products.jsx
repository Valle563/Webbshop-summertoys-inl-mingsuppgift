import useProducts from '../hooks/useProducts'
import ProductCard from '../components/ProductCard'

function Products() {
  const { products, loading } = useProducts()

  if (loading) return <p>Laddar produkter...</p>

  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Products