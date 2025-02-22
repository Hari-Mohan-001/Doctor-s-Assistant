import RegisterForm from "@/components/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/2">
        <img className="h-full w-full object-cover" src="./loginImage.png" alt="" />
      </div>
      <div className="w-1/2 bg-blue-50">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
