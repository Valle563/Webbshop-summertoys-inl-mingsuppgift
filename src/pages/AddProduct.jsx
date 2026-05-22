import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase'
import productSchema from '../validation/ProductSchema'
import '../assets/styles/admin.css'

function AddProduct() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

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

    setErrors({})
    await addDoc(collection(db, 'products'), {
      name,
      price: Number(price)
    })
    navigate('/admin')
  }

  return (
    <div className="admin">
      <div className="admin-header">
        <h2>Lägg till produkt</h2>
        <Link to="/admin">
          <button type="button" className="btn btn-secondary btn-md btn-pill">Tillbaka</button>
        </Link>
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

        <button type="submit" className="btn btn-primary btn-md btn-pill">Spara</button>
      </form>
    </div>
  )
}

export default AddProduct
