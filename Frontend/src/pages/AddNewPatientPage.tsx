import AddNewPatientScribble from "@/components/AddNewPatientScribble"
import Header from "@/components/Header"


const AddNewPatientPage = () => {
  return (
    <div className="bg-blue-50 w-full min-h-screen">
    <Header showSearch={false}/>
    
    <AddNewPatientScribble/>
    
</div>
  )
}

export default AddNewPatientPage