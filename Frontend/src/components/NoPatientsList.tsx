import { useNavigate } from "react-router-dom";
import ChatIcon from "./personalAssistant/ChatIcon";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { newPatientRoute } from "@/constants/urls";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";

const NoPatientsList = () => {
  const navigate = useNavigate();
  const{user} = useContext(UserContext)
  return (
    <div className="bg-white px-5 py-5 w-[500px] flex flex-col rounded-md shadow-lg max-h-80 items-center gap-y-5">
      <div className="flex flex-col justify-center items-center">
        <span className="text-2xl">{ user.userName ? `Hey ${user.userName}` : 'Hey Doctor'}</span>
        <span>
          managing your Patients just got
          <span className="font-semibold"> fatser</span> and{" "}
          <span className="font-semibold">easier</span>
        </span>
      </div>
      <div className="flex flex-col items-center">
        <img className="w-44 h-32" src="../doctorPatient.jpg" alt="" />
        <span>Add your first patient now</span>
      </div>
      <div className="relative flex ">
        <Plus
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white "
          size={20}
        />
        <Button
          onClick={() => navigate(newPatientRoute)}
          className="pl-10"
          variant={"primary"}
        >
          Add New
        </Button>
      </div>
      <ChatIcon />
    </div>
  );
};

export default NoPatientsList;
