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
import { Input } from "./ui/input";

const AddNewPatientManually = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  return (
    <div className="flex flex-col w-[600px] px-5 gap-y-5 min-h-screen mx-auto">
      <AddNewPatientHeader scribble={false} />

      <div className="bg-white p-5 rounded-md shadow-lg flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-2">
          <span className="text-sm uppercase">Personal Details</span>
          <div className="flex gap-2 ">
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
        </div>
        <div className="flex flex-col gap-y-2">
             <span className="uppercase text-sm">Medical profile</span>
             <div className="flex flex-col gap-y-3">
                <div>
                <span className="text-xs capitalize">current condition</span>
                <Input className="h-16" placeholder="start typing here"/>
                </div>
                <div>
                <span className="text-xs capitalize">Ongoing medication(if any)</span>
                <Input className="h-16" placeholder="start typing here"/>
                </div>
                <div>
                <span className="text-xs capitalize">goal</span>
                <Input className="h-16" placeholder="start typing here"/>
                </div>
             </div>  
        </div>
        <div className="flex flex-col gap-y-2">
        <span className="uppercase text-sm">Contact details</span>
        <div className="flex gap-x-2">
        <Input type="text" placeholder="Email" />
        <Input type="text" placeholder="Phone Number" />   
        </div>
        <Input className="w-1/2" type="text" placeholder="Emergency contact Number" />
        </div>

        <div className="flex gap-x-2 justify-end ">
          <Button className="bg-cyan-200 text-cyan-600">Cancel</Button>
          <Button className="bg-cyan-600 text-white">Save</Button>
        </div>
      </div>
    </div>
  );
};

export default AddNewPatientManually;
