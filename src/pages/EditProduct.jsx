import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'
import productSchema from '../validation/ProductSchema'
import '../assets/styles/admin.css'

function EditProduct() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadProduct() {
      const productDoc = await getDoc(doc(db, 'products', id))
      if (productDoc.exists()) {
        const data = productDoc.data()
        setName(data.name || '')
        setPrice(data.price || '')
      }
      setLoading(false)
    }

    loadProduct()
  }, [id])

  async function handleSubmit(e) {
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

    await updateDoc(doc(db, 'products', id), {
      name,
      price: Number(price)
    })

    navigate('/admin')
  }

  if (loading) return <p>Laddar produkt...</p>

  return (
    <div className="admin">
      <div className="admin-header">
        <h2>Redigera produkt</h2>
        <div className="admin-header-actions">
          <button type="button" className="btn btn-secondary btn-md btn-pill" onClick={() => navigate('/admin')}>Tillbaka</button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
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

        <button type="submit" className="btn btn-primary btn-md btn-pill">Spara ändringar</button>
      </form>
    </div>
  )
}

export default EditProduct
