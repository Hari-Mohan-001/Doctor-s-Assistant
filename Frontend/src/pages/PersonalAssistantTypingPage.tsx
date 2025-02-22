import Header from "@/components/Header";
import PersonalAssistantSidebar from "@/components/personalAssistant/PersonalAssistantSidebar";
import PersonalAssistantTyping from "@/components/personalAssistant/PersonalAssistantTyping";

const PersonalAssistantTypingPage = () => {
  return (
    <div className="bg-blue-50 w-full min-h-screen">
      <Header showSearch={false} />
      <div className="flex gap-x-32">
        <PersonalAssistantSidebar customSearch1="Show patient history" />
        <PersonalAssistantTyping />
      </div>
    </div>
  );
};

export default PersonalAssistantTypingPage;
