
import DashBoardWithoutPatients from "@/pages/DashBoardWithoutPatients"
import LoginPage from "@/pages/LoginPage"
import RegisterPage from "@/pages/RegisterPage"
import { Route, Routes } from "react-router-dom"
import DashboardWithPatients from "@/pages/DashboardWithPatients"
import DashboardWithTotalPatients from "@/pages/DashboardWithTotalPatients"
import AddNewPatientPage from "@/pages/AddNewPatientPage"
import AddNewPatientManuallyPage from "@/pages/AddNewPatientManuallyPage"


const DoctorRoutes = () => { 
  return (
   <Routes>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/register" element={<RegisterPage/>}/>
    <Route path="/dashboard/nopatients" element={<DashBoardWithoutPatients/>}/>
    <Route path="/dashboard/patientlist" element={<DashboardWithPatients/>}/>
    <Route path="/dashboard/totalpatients" element={<DashboardWithTotalPatients/>}/>
    <Route path="/newpatient" element={<AddNewPatientPage/>}/>
    <Route path="/newpatient/mannual" element={<AddNewPatientManuallyPage/>}/>
   </Routes>
  )
}

export default DoctorRoutes