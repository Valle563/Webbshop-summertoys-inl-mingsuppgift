import { Link } from 'react-router'

function Navbar() {
  return (
    <nav>
      <Link to="/"> SummerToys </Link>  
      <Link to="/products"> Produkter </Link>  
      <Link to="/cart"> Kundvagn </Link>  
    </nav>
  )
}

export default Navbar