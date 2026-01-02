import { Outlet, Navigate } from "react-router-dom"
import {useAuth} from "../hooks/useAuth"

const ProtectedRoutes = () => {
   const {user} = useAuth();

    return (
     user ? <Outlet/> : <Navigate to="/Login" replace />
  )
}

export default ProtectedRoutes


