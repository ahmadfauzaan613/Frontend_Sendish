// App.js
import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import HomeUser from './Pages/Users/Home'
import LoadingPage from './Components/LoadingPage'
import PageTransition from './Components/PageTransition'
import Register from './Pages/Users/Register'
import Login from './Pages/Users/Login'
import 'antd/dist/reset.css'
import Keranjang from './Pages/Users/Keranjang'
// ADMIN
import LoginAdmin from './Pages/Admin/LoginAdmin'
import Dashboard from './Pages/Admin/Dashboard'

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
  const [loading, setLoading] = useState(false)
  const location = useLocation()

  // useEffect(() => {
  //   setLoading(true)
  //   const timer = setTimeout(() => {
  //     setLoading(false)
  //   }, 500)

  //   return () => clearTimeout(timer)
  // }, [location])

  return (
    <React.Fragment>
      {loading ? (
        <LoadingPage />
      ) : (
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
      )}
    </React.Fragment>
  )
}

export default App
