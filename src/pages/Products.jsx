import { useState } from 'react'
import useProducts from '../hooks/useProducts'
import ProductCard from '../components/ProductCard'
import '../assets/styles/products.css'

function Products() {
  const { products, loading } = useProducts()
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')

  if (loading) return <p>Laddar produkter...</p>

  const filtered = products
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'name-asc') return a.name.localeCompare(b.name)
      if (sort === 'name-desc') return b.name.localeCompare(a.name)
      if (sort === 'price-asc') return a.price - b.price
      if (sort === 'price-desc') return b.price - a.price
      return 0
    })

  return (
    <div className="products">
      <div className="products-controls">
        <input
          type="text"
          placeholder="Sök efter produkt..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Sortera...</option>
          <option value="name-asc">Namn A–Ö</option>
          <option value="name-desc">Namn Ö–A</option>
          <option value="price-asc">Pris stigande</option>
          <option value="price-desc">Pris fallande</option>
        </select>
      </div>

      <div className="product-grid">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products