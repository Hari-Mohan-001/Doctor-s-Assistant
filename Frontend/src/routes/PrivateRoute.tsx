import { loginRoute } from "@/constants/urls"
import { UserContext } from "@/context/UserContext"
import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"


const PrivateRoute = () => {
  
    const {user} = useContext(UserContext)
  return user ? <Outlet /> : <Navigate to={loginRoute} replace />;
}

export default PrivateRoute