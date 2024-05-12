import React from 'react'
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
    const { user = {} } = useSelector(({ auth }) => auth);
    if (user?.access_token) return children;
    return <Navigate to="/sign-in" />
}

export default ProtectedRoute