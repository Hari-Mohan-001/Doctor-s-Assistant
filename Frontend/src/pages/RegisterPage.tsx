import RegisterForm from "@/components/RegisterForm"


const RegisterPage = () => {
  return (
    <div className="flex">
        <div className="w-1/2 h-screen">
            <img className="h-screen w-full" src="./loginImage.png" alt="" />
        </div>
        <div className="w-1/2 bg-blue-50">
            <RegisterForm/>
        </div>
    </div>
  )
}

export default RegisterPage