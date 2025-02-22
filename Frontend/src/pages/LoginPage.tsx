import LoginForm from "@/components/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex">
      <div className="w-1/2 h-screen">
        <img className="h-screen w-full" src="./loginImage.png" alt="" />
      </div>
      <div className="w-1/2 bg-blue-50">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
