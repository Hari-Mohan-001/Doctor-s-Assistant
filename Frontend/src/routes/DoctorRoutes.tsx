import LoginPage from "@/pages/LoginPage"
import { Route, Routes } from "react-router-dom"


const DoctorRoutes = () => {
  return (
   <Routes>
    <Route path="/login" element={<LoginPage/>}/>
   </Routes>
  )
}

export default DoctorRoutes