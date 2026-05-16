

import { useNavigate } from 'react-router'
import { collection, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'
import useProducts from '../hooks/useProducts'
import '../assets/styles/admin.css'

function Admin() {
  const { products, loading } = useProducts()
  const navigate = useNavigate()

  async function deleteProduct(id) {
    await deleteDoc(doc(db, 'products', id))
  }

  function handleLogout() {
    localStorage.removeItem('isAdmin')
    navigate('/login')
  }

  function goToAddProduct() {
    navigate('/admin/add')
  }

  if (loading) return <p>Laddar produkter...</p>

  return (
    <div className="admin">
      <div className="admin-header">
        <h2>Hantera produkter</h2>
        <div className="admin-header-actions">
          <button type="button" className="btn btn-primary btn-md btn-pill" onClick={goToAddProduct}>Lägg till produkter</button>
          <button type="button" className="btn btn-red btn-md btn-pill" onClick={handleLogout}>Logga ut</button>
        </div>
      </div>

      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-row">
            <span>{product.name}</span>
            <span>{product.price} kr</span>
            <button className="btn btn-primary btn-sm btn-pill" onClick={() => navigate(`/admin/edit/${product.id}`)}>Redigera</button>
            <button className="btn btn-red btn-sm btn-pill" onClick={() => deleteProduct(product.id)}>Ta bort</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Admin