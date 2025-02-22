import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import TotalPatientsList from "@/components/TotalPatientsList";
import { withPatientsSideBarData } from "@/constants/SidebarData";

const DashboardWithTotalPatients = () => {
  return (
    <div className="bg-blue-50 w-full min-h-screen">
      <Header showSearch={true} />
      <div className="flex gap-x-10">
        <Sidebar sideBarData={withPatientsSideBarData} />
        <TotalPatientsList />
      </div>
    </div>
  );
};

export default DashboardWithTotalPatients;
