import { Plus, SearchIcon, Upload, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import PatientTable from "./PatientTable";
import Pagiantion from "./Pagiantion";
import { useNavigate } from "react-router-dom";

const TotalPatientsList = () => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col w-[800px] px-5 gap-y-5 h-screen">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-2">
          <ArrowLeft onClick={()=>navigate('/dashboard/patientlist') } />
          <span className="font-semibold text-xl">Total Patients(4)</span>
        </div>

        <div className="flex gap-x-2">
          <div className="relative flex ">
            <Upload
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-600 "
              size={20}
            />
            <Button
              className="pl-10 text-cyan-600 bg-blue-200"
              variant={"primary"}
            >
              Bulk Upload
            </Button>
          </div>

          <div className="relative flex ">
            <Plus
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white "
              size={20}
            />
            <Button className="pl-10 bg-cyan-600" variant={"primary"} onClick={()=> navigate('/newpatient')}>
              Add New
            </Button>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <Button className=" bg-cyan-600 rounded-3xl" variant={"primary"}>
          All
        </Button>
        <Button
          className=" text-cyan-600 bg-blue-200 rounded-3xl"
          variant={"primary"}
        >
          {" "}
          Closed{" "}
        </Button>
        <Button
          className=" text-cyan-600 bg-blue-200 rounded-3xl"
          variant={"primary"}
        >
          {" "}
          Open{" "}
        </Button>
      </div>

      <div className="w-full bg-white rounded-md shadow-lg flex flex-col p-5  h-full">
        <div className="relative ">
          <SearchIcon
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500"
            size={20}
          />
          <Input
            type="text"
            placeholder="Search"
            className="pl-10 rounded-full w-[300px] bg-white py-4"
            name="email"
          />
        </div>
        <div className="mt-3">
          <PatientTable />
        </div>
        <Pagiantion />
      </div>
    </div>
  );
};

export default TotalPatientsList;
