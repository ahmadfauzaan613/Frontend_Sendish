// App.js
import React, { lazy, Suspense } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import HomeUser from './Pages/Users/Home'
import PageTransition from './Components/PageTransition'
import 'antd/dist/reset.css'

const Register = lazy(() => import('./Pages/Users/Register'))
const Login = lazy(() => import('./Pages/Users/Login'))
const Keranjang = lazy(() => import('./Pages/Users/Keranjang'))
const LoginAdmin = lazy(() => import('./Pages/Admin/LoginAdmin'))
const Dashboard = lazy(() => import('./Pages/Admin/Dashboard'))

const PrivateRoute = ({ element, requiredRole, ...rest }) => {
  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role')
  if (!token) {
    return <Navigate to="/v1/adminGlory" />
  }
  if (requiredRole && role !== requiredRole) {
    return <Navigate to="/" />
  }
  return element
}

function App() {
  const location = useLocation()

  return (
    <Suspense fallback={<div className="route-loading" role="status">Memuat halaman…</div>}>
      <PageTransition location={location}>
        <Routes>
          <Route path="/" element={<HomeUser />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/keranjang" element={<Keranjang />} />
          <Route path="/v1/adminGlory" element={<LoginAdmin />} />
          <Route path="/v1/adminGlory/dashboard" element={<PrivateRoute element={<Dashboard />} requiredRole="Admin" />} />
        </Routes>
      </PageTransition>
    </Suspense>
  )
}

export default App
