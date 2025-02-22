import Header from "@/components/Header";
import PersonalAssistantSearching from "@/components/personalAssistant/PersonalAssistantSearching";
import PersonalAssistantSidebar from "@/components/personalAssistant/PersonalAssistantSidebar";

const PersonalAssistantSearchingPage = () => {
  return (
    <div className="bg-blue-50 w-full min-h-screen">
      <Header showSearch={false} />
      <div className="flex gap-x-32">
        <PersonalAssistantSidebar customSearch1="Show patient history" />
        <PersonalAssistantSearching />
      </div>
    </div>
  );
};

export default PersonalAssistantSearchingPage;
