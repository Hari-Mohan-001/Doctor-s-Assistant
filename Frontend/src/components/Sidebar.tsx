interface SidebarItem {
  title: string;
  numbers: number | string;
  icon: React.ReactNode; // This ensures icons render properly
}

interface SidebarProps {
  sideBarData: SidebarItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ sideBarData }) => {
  return (
    <div className="flex flex-col px-7 gap-y-7">
      {sideBarData.map((data, index) => (
        <div
          key={index}
          className="flex w-60 items-center bg-white py-5 shadow-lg rounded-md justify-between px-3"
        >
          <div className="flex flex-col ">
            <span>{data.title}</span>
            <span className="text-6xl font-semibold ">{data.numbers}</span>
          </div>
          <div>
            <div>{data.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
