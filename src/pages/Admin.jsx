

import { useState } from 'react'
import { collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'
import useProducts from '../hooks/useProducts'
import productSchema from '../validation/ProductSchema'

function Admin() {
  const { products, loading } = useProducts()
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [errors, setErrors] = useState({})
  const [editingProduct, setEditingProduct] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()

    const { error } = productSchema.validate(
      { name, price: Number(price) },
      { abortEarly: false }
    )

    if (error) {
      const newErrors = {}
      error.details.forEach(detail => {
        newErrors[detail.path[0]] = detail.message
      })
      setErrors(newErrors)
      return
    }

    setErrors({})

    if (editingProduct) {
      updateProduct()
    } else {
      addProduct()
    }
  }

  async function addProduct() {
    await addDoc(collection(db, 'products'), {
      name,
      price: Number(price)
    })
    setName('')
    setPrice('')
  }

  async function updateProduct() {
    await updateDoc(doc(db, 'products', editingProduct.id), {
      name,
      price: Number(price)
    })
    setName('')
    setPrice('')
    setEditingProduct(null)
  }

  async function deleteProduct(id) {
    await deleteDoc(doc(db, 'products', id))
  }

  function startEdit(product) {
    setEditingProduct(product)
    setName(product.name)
    setPrice(product.price)
  }

  function cancelEdit() {
    setEditingProduct(null)
    setName('')
    setPrice('')
    setErrors({})
  }

  if (loading) return <p>Laddar produkter...</p>

  return (
    <div className="admin">
      <h2>Hantera produkter</h2>

      <form onSubmit={handleSubmit}>
        <h3>{editingProduct ? 'Redigera produkt' : 'Lägg till produkt'}</h3>

        <div>
          <label>Namn</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <label>Pris</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {errors.price && <p className="error">{errors.price}</p>}
        </div>

        <button type="submit">
          {editingProduct ? 'Spara ändringar' : 'Lägg till'}
        </button>

        {editingProduct && (
          <button type="button" onClick={cancelEdit}>Avbryt</button>
        )}
      </form>

      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-row">
            <span>{product.name}</span>
            <span>{product.price} kr</span>
            <button onClick={() => startEdit(product)}>Redigera</button>
            <button onClick={() => deleteProduct(product.id)}>Ta bort</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Admin