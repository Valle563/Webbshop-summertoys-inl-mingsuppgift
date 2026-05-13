import { createHashRouter } from 'react-router'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Admin from './pages/Admin'

const router = createHashRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: '/cart', element: <Cart /> },
    ]
  },
  { path: '/login', element: <Login /> },
  { path: '/admin', element: <Admin /> },
])

export default router