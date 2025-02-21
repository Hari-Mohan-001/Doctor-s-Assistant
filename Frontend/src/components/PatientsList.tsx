import {
  Plus,
  SearchIcon,
  Upload,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import PatientTable from "./PatientTable";
import Pagiantion from "./Pagiantion";

const PatientsList = () => {
  return (
    <div className="flex flex-col w-[800px] px-5 gap-y-5 h-screen">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-xl">Recently Visited Patients</span>
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
            <Button className="pl-10 bg-cyan-600" variant={"primary"}>
              Add New
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full bg-white rounded-md shadow-lg flex flex-col p-5 h-full">
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
        <div>
          <PatientTable />
        </div>
        <Pagiantion />
      </div>
    </div>
  );
};

export default PatientsList;
