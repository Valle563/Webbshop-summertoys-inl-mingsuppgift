import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar">

      <Link to="/" className="navbar-logo">
        Sommarlek
      </Link>

      <div className="navbar-links">

        <Link to="/">Hem</Link>

        <Link to="/products">Produkter</Link>

        <Link to="/login">Admin</Link>

        <Link to="/cart" className="navbar-cart">
          Kundvagn
        </Link>

      </div>
    </nav>
  )
}

export default NavBar