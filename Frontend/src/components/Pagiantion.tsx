import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagiantion = () => {
  return (
    <div className="mt-40 flex justify-between items-center">
      <span className="text-slate-500 text-xs">1-4 of 4</span>
      <div className="flex items-center justify-center h-12">
        <span className="text-slate-500 text-xs">Rows per page:10</span>
        <span className="border-gray-500 bg-gray-300 rounded-md text-slate-500  shadow-lg">
          <ChevronLeft />
        </span>
        <span className=" text-slate-500 text-xs">1/1</span>
        <span className="border-gray-500 bg-gray-300 rounded-md text-slate-500  shadow-lg">
          <ChevronRight />
        </span>
      </div>
    </div>
  );
};

export default Pagiantion;
