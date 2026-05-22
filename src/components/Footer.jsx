import { Link } from 'react-router-dom'
import logoIcon from '../assets/images/Logo-icon.png'

function Footer() {
  return (
    <footer className="footer">
      <div>
        <p>Redegatan 1H</p>
        <p>426 77</p>
        <p>Västra Frölunda</p>
      </div>
      <div>
        <img src={logoIcon} alt="Logga" />
      </div>
      <div>
        <p>031-704 67 00</p>
        <p>Öppet: 9-16</p>
        <Link to="/login">Admin</Link>
      </div>
    </footer>
  )
}

export default Footer