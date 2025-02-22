import { personalAssistantRoute } from "@/constants/urls";
import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ChatIcon = () => {
  const naviagte = useNavigate();
  return (
    <button
      onClick={() => naviagte(personalAssistantRoute)}
      className="fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default ChatIcon;
