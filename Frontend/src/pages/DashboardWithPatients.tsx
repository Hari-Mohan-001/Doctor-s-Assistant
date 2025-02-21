import Header from "@/components/Header";
import PatientsList from "@/components/PatientsList";
import Sidebar from "@/components/Sidebar";

const DashboardWithPatients = () => {
  return (
    <div className="bg-blue-50 w-full min-h-screen">
      <Header showSearch={true} />
      <div className="flex gap-x-10">
        <Sidebar />
        <PatientsList />
      </div>
    </div>
  );
};

export default DashboardWithPatients;
