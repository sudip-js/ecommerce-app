import React from 'react'
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const PublicRoute = ({ children }) => {
    const { user = {} } = useSelector(({ auth }) => auth);
    if (user?.access_token) return <Navigate to="/dashboard" />
    return children;
}

export default PublicRoute