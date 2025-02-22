import Header from "@/components/Header";
import NoPatientsList from "@/components/NoPatientsList";

import Sidebar from "@/components/Sidebar";
import { initialSideBarData } from "@/constants/SidebarData";

const DashBoardWithoutPatients = () => {
  return (
    <div className="bg-blue-50 w-full min-h-screen">
      <Header showSearch={true} />
      <div className="flex gap-x-36">
        <Sidebar sideBarData={initialSideBarData} />
        <NoPatientsList />
      </div>
    </div>
  );
};

export default DashBoardWithoutPatients;
