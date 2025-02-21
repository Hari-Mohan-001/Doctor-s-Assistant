import { MoveLeft } from "lucide-react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "./ui/checkbox";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate()
  const [date, setDate] = useState<Date | undefined>(undefined);
  return (
    <div className="w-full h-full flex justify-center items-center my-auto">
      <div className="w-lg h-auto bg-white rounded-b-md shadow-2xl flex flex-col gap-y-7 py-5">
        <div className="flex gap-y-1 justify-between items-center mt-3 px-5">
          <MoveLeft className="text-blue-500 cursor-pointer" onClick={()=> navigate('/login')}/>
          <span className="text-blue-500 text-2xl text-center flex-1">
            SignUp
          </span>
        </div>
        {/* //form area */}
        <form className="flex flex-col  px-5 gap-y-5">
          <div className="flex flex-col gap-y-2">
            <span className="text-sm">Personal Details</span>
            <div className="flex gap-2">
              <Input type="text" placeholder="First name" />
              <Input type="text" placeholder="Last name" />
            </div>
            <div className="flex gap-2 ">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground text-gray-500"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Date of birth"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(date: Date | undefined) => setDate(date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <Select>
                <SelectTrigger className="text-gray-600">
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Male</SelectItem>
                  <SelectItem value="dark">Female</SelectItem>
                  <SelectItem value="system">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <span className="text-sm">Professional Details</span>
            <div className="flex gap-2">
              <Input type="text" placeholder="Medical Lisence Number" />
              <Input type="text" placeholder="Specialisation" />
            </div>
            <div className="flex gap-2">
              <Input type="text" placeholder="Years of experience" />
              <Input type="text" placeholder="Hospital affiliation" />
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <span className="text-sm">Contact Details</span>
            <div className="flex gap-2">
              <Input type="text" placeholder="Email" />
              <Input type="text" placeholder="Phone Number" />
            </div> 
          </div>

          <div className="flex gap-x-1 items-center">
           <Checkbox/>
           <span className="text-xs">By signing up,you agree on having consent to 
             <span className="text-blue-600 underline"> data privacy</span>
              & <span className="text-blue-600 underline">HIPPA Compliance</span>
              </span>
          </div>

         <Button variant={"primary"}>Sign Up</Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
