import { Link } from 'react-router'
import heroImage from '../assets/images/HomePageIcon.png'
import '../assets/styles/Home.css'

function Home() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-overlay">
        <h1>Sommarens roligaste leksaker!</h1>
        <Link to="/products">
          <button className="hero-btn">Produkter</button>
        </Link>
      </div>
    </div>
  )
}

export default Home