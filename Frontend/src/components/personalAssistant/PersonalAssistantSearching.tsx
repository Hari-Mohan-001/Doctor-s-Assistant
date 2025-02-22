import { ArrowLeft, MessageCircleMore } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import SearchArea from "./SearchArea";
import { personalAssistantTypingRoute } from "@/constants/urls";

const PersonalAssistantSearching = () => {
  const naviagate = useNavigate();
  return (
    <div className="flex flex-col gap-y-8 w-[800px]">
      <div className="flex gap-x-2">
        <ArrowLeft
          className="text-cyan-500"
          onClick={() => naviagate(personalAssistantTypingRoute)}
        />
        <span className="font-semibold">YPA(Your personal Assistant)</span>
      </div>
      <div className="flex justify-end">
        <Button className="bg-blue-200 text-cyan-600">
          Show Patient History
        </Button>
      </div>
      <div className="flex gap-2">
        <div>
          <MessageCircleMore
            className="bg-cyan-600 text-white rounded-full p-2"
            size={35}
          />
        </div>
        <div className="pt-2 flex flex-col gap-y-3">
          <div className="flex flex-col">
            <span className="text-sm text-cyan-700 font-medium">
              I would be happy to show you the patient history! To get started,
              could you provide a bit more context?
            </span>
            <span className="text-sm text-cyan-700 font-medium">
              Specifically:
            </span>
          </div>
          <span className="text-sm text-cyan-700 font-medium">
            1. What kind of patients are you looking with?(eg..name, age,
            medicalcondition etc)
          </span>
          <span className="text-sm text-cyan-700 font-medium">
            2. How much time has passed since you registered this patient.
          </span>
          <span className="text-sm text-cyan-700 font-medium">
            3. Also upload a patient related file if you have any.
          </span>
        </div>
      </div>
      <div className="flex justify-end">
        <Button className="bg-blue-200 text-cyan-600">
          33years old, 10 days past, chronic tuberculosis
        </Button>
      </div>

      {/* Textarea */}
      <div className="mt-40 p-5">
        <SearchArea iconName="stop" />
      </div>
    </div>
  );
};

export default PersonalAssistantSearching;
