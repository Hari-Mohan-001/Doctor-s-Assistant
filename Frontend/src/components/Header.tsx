import { useNavigate } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Home, LogOut, ChevronDown, SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { loginRoute } from "@/constants/urls";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";

const Header = ({ showSearch }: { showSearch?: boolean }) => {
  const navigate = useNavigate();
  const{logoutUser} = useContext(UserContext)

  const handleLogout = ()=>{
      logoutUser()
      navigate(loginRoute)
  }
  return (
    <div className="flex justify-between items-center px-5 py-5">
      <div className="flex flex-col justify-between items-center">
        <img className="w-10 h-10" src="../logo.png" alt="" />
        <span className="text-xs text-blue-500">AI Powered</span>
        <span className="text-xs text-blue-500">Smart Assistant</span>
      </div>

      <div>
        {showSearch && (
          <div className="relative ">
            <SearchIcon
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500"
              size={20}
            />
            <Input
              type="text"
              placeholder="Search anything by patient name ,id ,helathissue, medicine etc"
              className="pl-10 rounded-full w-[500px] bg-white py-4"
              name="email"
            />
          </div>
        )}
      </div>

      <div className="flex items-center gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger className="decoration-0 flex items-center">
            <div
              className=" flex bg-amber-50 w-10 h-10 border-red-400 border-1
             rounded-full items-center justify-center"
            >
              <span className="text-lg text-blue-600">A</span>
            </div>
            <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Home />
              <span> Profile</span>
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={handleLogout}
              className="text-red-600"
            >
              <LogOut className="mr-2 h-5 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
