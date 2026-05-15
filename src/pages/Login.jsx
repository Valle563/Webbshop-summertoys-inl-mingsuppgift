import { useState } from 'react'
import { useNavigate } from 'react-router'
import '../assets/styles/login.css'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('isAdmin', 'true')
      navigate('/admin')
    } else {
      setError('Fel användarnamn eller lösenord')
    }
  }

  return (
    <div className="login">
      <h2>Admin-inloggning</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Användarnamn</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <button type="submit">Logga in</button>
      </form>
    </div>
  )
}

export default Login