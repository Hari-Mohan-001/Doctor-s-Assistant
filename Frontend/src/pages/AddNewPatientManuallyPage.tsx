import AddNewPatientManually from "@/components/AddNewPatientManually"
import Header from "@/components/Header"

const AddNewPatientManuallyPage = () => {
  
    return (
        <div className="bg-blue-50 w-full min-h-screen">
        <Header showSearch={false}/>
        
        <AddNewPatientManually/>
        
    </div>
      )
}

export default AddNewPatientManuallyPage