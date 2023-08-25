import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const useAuth = () => {
    return false
}

const ProtectedRoute = () => {

  const isAuth = useAuth()
  return isAuth ? <Outlet /> : <Navigate to="/login" /> 
}


export default ProtectedRoute