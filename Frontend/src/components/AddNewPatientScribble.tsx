import AddNewPatientHeader from "./sub/AddNewPatientHeader";
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
import { cn } from "@/lib/utils";
import { useState } from "react";
import ChatIcon from "./personalAssistant/ChatIcon";

const AddNewPatientScribble = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  return (
    <div className="flex flex-col w-[600px] px-5 gap-y-5 h-screen mx-auto">
      <AddNewPatientHeader scribble={true} />
      <div className="flex flex-col">
        <span className="uppercase font-semibold text-sm">
          Keywords will help you organise the patient information
        </span>
        <span className="text-sm text-blue-400">
          This must include patient details, medical profile & contact details
        </span>
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
          <SelectTrigger className="text-gray-600 bg-white">
            <SelectValue placeholder="Gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="bg-white h-80 shadow-lg rounded-md"></div>

      <div className="flex gap-x-2 justify-end ">
        <Button className="bg-cyan-200 text-cyan-600">Cancel</Button>
        <Button className="bg-cyan-600 text-white">Organise</Button>
      </div>
      <ChatIcon />
    </div>
  );
};

export default AddNewPatientScribble;
