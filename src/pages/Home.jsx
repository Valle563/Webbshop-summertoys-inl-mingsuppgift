
import { Link } from 'react-router'

function Home() {
  return (
    <div className="hero">
      <div className="hero-overlay">
        <h1>Sommarens roligaste leksaker!</h1>
        <Link to="/products">
          <button>Produkter</button>
        </Link>
      </div>
    </div>
  )
}

export default Home