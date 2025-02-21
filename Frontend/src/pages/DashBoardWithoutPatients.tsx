import Header from "@/components/Header"
import NoPatientsList from "@/components/NoPatientsList"

import Sidebar from "@/components/Sidebar"

const DashBoardWithoutPatients = () => {
  return (
    <div className="bg-blue-50 w-full min-h-screen">
    <Header showSearch={true}/>
    <div className="flex gap-x-36">
    <Sidebar/>
    <NoPatientsList/>
    </div>
</div>
  )
}

export default DashBoardWithoutPatients