import { Link } from 'react-router-dom'
import heroImage from '../assets/images/HomePageIcon.png'
import '../assets/styles/home.css'

function Home() {
  return (
    <section className="hero">
      <img src={heroImage} alt="Sommarlek" className="hero-img" />

      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Sommarens roligaste leksaker!</h1>
          <Link to="/products">
            <button className="btn btn-green btn-lg btn-pill">Produkter</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home