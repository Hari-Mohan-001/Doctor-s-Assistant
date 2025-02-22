import { ArrowLeft } from "lucide-react";
import { personalAssistantSuggestion } from "@/constants/personalAssistantSuggestion";
import { useNavigate } from "react-router-dom";
import SearchArea from "./SearchArea";
import {
  patientListRoute,
  personalAssistantTypingRoute,
} from "@/constants/urls";

const PersonalAssistant = () => {
  const naviagate = useNavigate();
  return (
    <div className="flex flex-col gap-y-8 w-[800px]">
      <div className="flex gap-x-2">
        <ArrowLeft className="text-cyan-600" onClick={() => naviagate(patientListRoute)} />
        <span className="font-semibold">YPA(Your personal Assistant)</span>
      </div>
      <div className="flex justify-center">
        <span className="text-2xl font-semibold">
          What can i help you with ?
        </span>
      </div>

      {/* Textarea */}
      <SearchArea iconName="audioLines" />
      {/* suggestions */}
      <div className="w-full flex flex-wrap justify-center gap-2">
        {personalAssistantSuggestion.map((data, index) => (
          <div
            onClick={() =>
              index === 0 ? naviagate(personalAssistantTypingRoute) : ""
            }
            key={index}
            className="bg-blue-100 text-blue-600 rounded-lg shadow-md p-1.5
             text-sm text-center w-[18%] min-w-[120px] h-12 cursor-pointer"
          >
            {data}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalAssistant;
