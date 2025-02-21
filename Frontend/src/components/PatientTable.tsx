import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Checkbox } from "./ui/checkbox";
  import { ChevronsUpDown } from "lucide-react";
import { patientData } from "@/constants/patientsData";


const PatientTable = () => {
  return (
    <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-10">
                  <Checkbox />
                </TableHead>
                <TableHead className="w-10">
                  <div className="flex items-center">
                    <span>#</span>
                    <ChevronsUpDown className="ml-1 w-3 h-3" />
                  </div>
                </TableHead>

                <TableHead className="w-[105px]">
                  <div className="flex items-center">
                    <span>Name</span>
                    <ChevronsUpDown className="ml-1 w-3 h-3" />
                  </div>
                </TableHead>
                <TableHead>CONDITIONS</TableHead>
                <TableHead>MEDICATIONS</TableHead>
                <TableHead>STATUS</TableHead>
                <TableHead>Action</TableHead>

              </TableRow>
            </TableHeader>
            <TableBody>
              {patientData?.map((data,index)=>(
                <TableRow key={index}>
                  <TableCell><Checkbox /></TableCell>
                  <TableCell>{index+1}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span>{data.name}</span>
                      <span className="text-slate-500 text-xs">{data.age}, <span>{data.gender}</span></span>
                    </div>
                  </TableCell>
                  <TableCell><span className="text-xs text-slate-500">{data.condition}</span></TableCell>
                  <TableCell className="text-xs text-slate-500">{data.medications}</TableCell>
                  <TableCell><span className={`${data.status==="open" ?
                     'text-orange-500 bg-orange-200 rounded-md px-3 py-0.5 flex items-center':
                     'text-green-600  bg-green-200 rounded-md px-3 py-0.5 flex items-center'}`}>{data.status}</span></TableCell>
              </TableRow>
              ))}
              
            </TableBody>
            <TableCaption>No more Patients</TableCaption>
          </Table>
  )
}

export default PatientTable