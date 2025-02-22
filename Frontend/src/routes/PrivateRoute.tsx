import { loginRoute } from "@/constants/urls"
import { UserContext } from "@/context/UserContext"
import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"


const PrivateRoute = () => {
  
    const {user,loading} = useContext(UserContext)
    if (loading) {
      return <div>Loading...</div>; // Prevents premature redirecting
    }
  return user ? <Outlet /> : <Navigate to={loginRoute} replace />;
}

export default PrivateRoute