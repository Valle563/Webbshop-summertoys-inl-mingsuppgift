import { Link } from 'react-router'

function Navbar() {
  return (
    <nav>
      <link to="/"> SummerToys </link>  
      <link to="/products"> Produkter </link>  
      <link to="/cart"> Kundvagn </link>  
    </nav>
  )
}

export default Navbar