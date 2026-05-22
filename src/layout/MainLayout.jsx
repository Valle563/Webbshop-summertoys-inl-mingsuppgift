import { Outlet } from 'react-router-dom'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import '../assets/styles/layout.css'

function MainLayout() {
  return (
    <>
      <NavBar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default MainLayout