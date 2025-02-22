import Header from "@/components/Header";
import PatientsList from "@/components/PatientsList";
import Sidebar from "@/components/Sidebar";
import { withPatientsSideBarData } from "@/constants/SidebarData";

const DashboardWithPatients = () => {
  return (
    <div className="bg-blue-50 w-full min-h-screen">
      <Header showSearch={true} />
      <div className="flex gap-x-10">
        <Sidebar sideBarData={withPatientsSideBarData} />
        <PatientsList />
      </div>
    </div>
  );
};

export default DashboardWithPatients;
