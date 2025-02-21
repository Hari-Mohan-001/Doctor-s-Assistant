import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import TotalPatientsList from "@/components/TotalPatientsList"


const DashboardWithTotalPatients = () => {
  return (
    <div className="bg-blue-50 w-full min-h-screen">
    <Header showSearch={true} />
    <div className="flex gap-x-10">
      <Sidebar />
      <TotalPatientsList />
    </div>
  </div>
  )
}

export default DashboardWithTotalPatients