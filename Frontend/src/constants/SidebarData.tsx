import {Check, ShieldAlert, User} from 'lucide-react'

const checkIcon = ()=>{
    return(
        <div className='flex items-center bg-teal-600 justify-center rounded-full'>
              <Check className='text-white w-12 h-12'/>
        </div>
    )
}
const shieldIcon = ()=>{
    return(
        <div className='flex items-center bg-yellow-400 justify-center '>
              <ShieldAlert className='text-white w-12 h-12'/>
        </div>
    )
}
const UserIcon = ()=>{
    return(
        <div className='flex items-center bg-cyan-600 justify-center rounded-full'>
              <User className='text-white w-12 h-12'/>
        </div>
    )
}

export const sideBarData =[
    {
        title:"Total Patients",
        numbers:0,
        icon: UserIcon()
    },
    {
        title:"Open Applications",
        numbers:0,
        icon:shieldIcon()
    },
    {
        title:"Closed Applications",
        numbers:0,
        icon:checkIcon()
    }
]