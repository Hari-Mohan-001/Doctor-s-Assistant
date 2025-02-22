import { AudioLines, Paperclip, ArrowUp, CircleStop } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { useNavigate } from "react-router-dom";
import { personalAssistantSearchingRoute } from "@/constants/urls";

interface IconProps {
  iconName?: string; //
}

const SearchArea: React.FC<IconProps> = ({ iconName }) => {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <Textarea
        placeholder="Ask YPA anything about your patients"
        className="h-24 w-full resize-none rounded-b-3xl bg-white pr-12 pl-12"
      />

      <Paperclip
        className="absolute bottom-2 left-2  text-blue-500 cursor-pointer bg-blue-200 rounded-full p-2"
        size={35}
      />

      {iconName === "audioLines" && (
        <AudioLines
          className="absolute bottom-2 right-2 text-blue-500 cursor-pointer bg-blue-200 rounded-full p-2"
          size={35}
        />
      )}
      {iconName === "send" && (
        <ArrowUp
          onClick={() => navigate(personalAssistantSearchingRoute)}
          className="absolute bottom-2 right-2 bg-cyan-600 text-white rounded-full p-2"
          size={35}
        />
      )}
      {iconName === "stop" && (
        <CircleStop
          className="absolute bottom-2 right-2 bg-cyan-600 text-white rounded-full p-2"
          size={35}
        />
      )}
    </div>
  );
};

export default SearchArea;
