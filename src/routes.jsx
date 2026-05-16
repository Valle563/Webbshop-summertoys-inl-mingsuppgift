import { createHashRouter, Navigate } from 'react-router'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Admin from './pages/Admin'
import AddProduct from './pages/AddProduct'
import EditProduct from './pages/EditProduct'

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
      {
        path: '/admin',
        element: (
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        )
      },
      {
        path: '/admin/add',
        element: (
          <ProtectedRoute>
            <AddProduct />
          </ProtectedRoute>
        )
      },
      {
        path: '/admin/edit/:id',
        element: (
          <ProtectedRoute>
            <EditProduct />
          </ProtectedRoute>
        )
      },
    ]
  },
  { path: '/login', element: <Login /> },
])

export default router