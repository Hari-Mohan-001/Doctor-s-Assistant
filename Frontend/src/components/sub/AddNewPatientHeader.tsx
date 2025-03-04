import {
  newPatientMannualRoute,
  newPatientRoute,
  totalPatientsRoute,
} from "@/constants/urls";
import { ArrowLeft, Signature, Keyboard } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AddNewPatientHeader = ({ scribble }: { scribble: boolean }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-x-2">
        <ArrowLeft className="text-cyan-600" onClick={() => navigate(totalPatientsRoute)} />
        <span className="font-semibold text-xl">New Patient(1st)</span>
      </div>
      <div className="flex gap-1">
        <div
          className={`${
            scribble === true
              ? "bg-cyan-600 text-white p-1.5 px-3 rounded-l-full"
              : "bg-cyan-200 text-cyan-600 p-1.5 px-3 rounded-l-full"
          }`}
        >
          <Signature
            onClick={() => navigate(newPatientRoute)}
            className=" cursor-pointer"
          />
        </div>
        <div
          className={`${
            scribble === true
              ? "bg-cyan-200 text-cyan-600 p-1.5 px-3 rounded-r-full"
              : "bg-cyan-600 text-white p-1.5 px-3 rounded-r-full"
          }`}
        >
          <Keyboard
            onClick={() => navigate(newPatientMannualRoute)}
            className=" cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AddNewPatientHeader;
