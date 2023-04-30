import React from 'react'
import useAdminCheck from './../../hooks/useAdminCheck';
import { Navigate } from 'react-router-dom';

export default function AdminRoute({children}) {
    const isAdmin = useAdminCheck()
  return isAdmin ? children : <Navigate to={"/admin"}/>
}
