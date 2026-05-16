import { useState } from 'react'
import { useNavigate } from 'react-router'
import '../assets/styles/login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const ADMIN_EMAIL = 'admin@admin.com'

  function handleLogin(e) {
    e.preventDefault()

    if (email !== ADMIN_EMAIL) {
      setError('Endast admin@admin.com får logga in här')
      return
    }

    if (password !== 'password') {
      setError('Fel e-post eller lösenord')
      return
    }

    localStorage.setItem('isAdmin', 'true')
    navigate('/admin')
  }

  return (
    <div className="login">
      <div className="login-box">
        <h2>Admin-inloggning</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>E-post</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@admin.com"
            />
          </div>
          <div>
            <label>Lösenord</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <div className="login-actions">
            <button type="submit" className="btn btn-primary btn-lg btn-pill">Logga in</button>
            <button type="button" className="btn btn-secondary btn-lg btn-pill" onClick={() => navigate('/products')}>Till shopen</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login