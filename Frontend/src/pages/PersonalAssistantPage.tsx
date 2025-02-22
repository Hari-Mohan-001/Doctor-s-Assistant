import Header from "@/components/Header";
import PersonalAssistant from "@/components/personalAssistant/PersonalAssistant";
import PersonalAssistantSidebar from "@/components/personalAssistant/PersonalAssistantSidebar";

const PersonalAssistantPage = () => {
  return (
    <div className="bg-blue-50 w-full min-h-screen">
      <Header showSearch={false} />
      <div className="flex gap-x-32">
        <PersonalAssistantSidebar />
        <PersonalAssistant />
      </div>
    </div>
  );
};

export default PersonalAssistantPage;
