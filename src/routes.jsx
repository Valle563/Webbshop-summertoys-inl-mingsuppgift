import { createHashRouter, Navigate } from 'react-router'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Admin from './pages/Admin'

function ProtectedRoute({ children }) {
  const isAdmin = localStorage.getItem('isAdmin')
  if (!isAdmin) return <Navigate to="/login" />
  return children
}

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
  {
    path: '/admin',
    element: (
      <ProtectedRoute>
        <Admin />
      </ProtectedRoute>
    )
  },
])

export default router