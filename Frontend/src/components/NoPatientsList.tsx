import { Button } from "./ui/button"
import { Plus } from "lucide-react";


const NoPatientsList = () => {
  return (
    <div className="bg-white px-5 py-5 w-[500px] flex flex-col rounded-md shadow-lg max-h-80 items-center gap-y-5">
          <div className="flex flex-col justify-center items-center">
              <span className="text-2xl">Hey Ajin</span>
              <span>managing your Patients just got 
                <span className="font-semibold"> fatser</span> and <span className="font-semibold">easier</span>
                </span>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-28 h-28" src="../doctorPatient.jpg" alt="" />
            <span>Add your first patient now</span>
          </div>
          <div className="relative flex ">
              <Plus
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white "
                size={20}
              />
          <Button className="pl-10" variant={"primary"}>Add New</Button>
         </div>
          
    </div>
  )
}

export default NoPatientsList