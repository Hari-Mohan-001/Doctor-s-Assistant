import { sideBarData } from "@/constants/SidebarData"




const Sidebar = () => {
  return (
    <div className="flex flex-col px-7 gap-y-7">

        {sideBarData.map((data)=>(
            <div className="flex w-60 items-center bg-white py-5 shadow-lg rounded-md justify-between px-3">
                <div className="flex flex-col ">
                    <span>{data.title}</span>
                    <span className="text-6xl font-semibold ">{data.numbers}</span>
                </div>
                <div>
                   <span>{data.icon}</span>
                </div>

            </div>
        ))}

    </div>
  )
}

export default Sidebar