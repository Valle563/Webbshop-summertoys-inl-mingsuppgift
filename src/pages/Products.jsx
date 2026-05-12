import useProducts from '../hooks/useProducts'

function Products() {
  const { products, loading } = useProducts()

  if (loading) return <p>Laddar produkter...</p>

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price} kr</p>
        </div>
      ))}
    </div>
  )
}

export default Products