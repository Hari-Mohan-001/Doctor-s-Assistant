import { personalAssistantSideBarData } from "@/constants/personalAssistantSidebarData";

interface SidebarProps {
  customSearch1?: string; //  custom value for search1
}

const PersonalAssistantSidebar: React.FC<SidebarProps> = ({
  customSearch1,
}) => {
  return (
    <div className="bg-blue-100 w-60 h-screen ml-5 rounded-md shadow-md">
      <div className="flex flex-col p-2 gap-y-5">
        {personalAssistantSideBarData.map((data) => (
          <div key={data.id} className="flex flex-col gap-y-2">
            <span className="uppercase text-slate-500 font-semibold">
              {data.title}
            </span>
            <div className="flex flex-col pl-3 gap-y-1.5">
              <span
                className={`${
                  data.id === 1
                    ? "capitalize text-sm text-blue-600 bg-blue-200 p-2 rounded-md"
                    : "capitalize text-sm"
                }`}
              >
                {customSearch1 && data.id === 1 ? customSearch1 : data.search1}
              </span>
              <span className="capitalize text-sm">{data.search2}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalAssistantSidebar;
