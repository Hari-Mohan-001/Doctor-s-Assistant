import { Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { validateEmail } from "@/validation/loginValidate";
import { email, password } from "@/constants/data";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    loginError: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: "" });
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({ ...errors, loginError: "" });
    let newErrors = { email: "", password: "", loginError: "" };
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else {
      const emailError = validateEmail(formData.email);
      if (emailError) {
        newErrors.email = emailError;
      }
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (newErrors.email || newErrors.password) {
      setErrors(newErrors);
      return;
    }
    if (formData.email !== email || formData.password !== password) {
      newErrors.loginError = "Invalid Credentials";
      setErrors(newErrors);
      return;
    }
    console.log(formData);
  };

  const handleSignUpRedirect = () => {
    navigate("/register");
  };
  return (
    <div className="w-full h-full flex justify-center items-center my-auto">
      <div className="w-lg h-auto bg-white rounded-b-md shadow-2xl flex flex-col gap-y-7 py-5">
        <div className="flex flex-col gap-y-1 items-center mt-5">
          <img className="w-16 h-16" src="./logo.png" alt="" />
          <span className="text-blue-500 text-xs">
            AI Powered Smart Assistant
          </span>
        </div>

        <div className="flex flex-col gap-1 items-center">
          <span className="text-2xl text-blue-500 font-semibold">Welcome!</span>
          <span className="text-sm  text-blue-600">Login to your account</span>
        </div>

        <form className="flex flex-col gap-7 px-10" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <div className="relative w-full">
              <Mail
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500"
                size={20}
              />
              <Input
                value={formData.email}
                type="text"
                placeholder="Email"
                className="pl-10"
                name="email"
                onChange={handleChange}
              />
            </div>
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
            <div className="relative w-full">
              <Lock
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500"
                size={20}
              />
              <Input
                value={formData.password}
                type="password"
                placeholder="Password"
                className="pl-10"
                name="password"
                onChange={handleChange}
              />
            </div>
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password}</span>
            )}
          </div>
          <Button variant={"primary"}>Login</Button>
          {errors.loginError && (
            <span className="text-red-500 text-sm">{errors.loginError}</span>
          )}
        </form>

        <div className="flex justify-center">
          <span className="text-blue-600">
            New Here ?{" "}
            <span
              onClick={handleSignUpRedirect}
              className="underline text-blue-600 font-semibold"
            >
              SignUp
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
