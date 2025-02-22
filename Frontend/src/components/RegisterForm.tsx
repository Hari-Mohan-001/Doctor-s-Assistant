import { MoveLeft } from "lucide-react";
import { Input } from "./ui/input";
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
import { FormEvent, useContext, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "./ui/checkbox";
import { useNavigate } from "react-router-dom";
import { loginRoute, noPatientsRoute } from "@/constants/urls";
import { UserContext } from "@/context/UserContext";
import { validateEmail } from "@/validation/loginValidate";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { user, saveUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: undefined as Date | undefined,
    gender: "",
    licenseNumber: "",
    specialization: "",
    experience: "",
    hospitalAffiliation: "",
    email: "",
    phoneNumber: "",
    agreedToTerms: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (user) {
      navigate(noPatientsRoute);
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, gender: value });
    setErrors({ ...errors, gender: "" });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let validationErrors: { [key: string]: string } = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key as keyof typeof formData]) {
        validationErrors[key] = `${key.replace(/([A-Z])/g, " $1")} is required`;
      }
    });

    const emailError = validateEmail(formData.email);
    if (emailError) {
      validationErrors.email = emailError;
    }

    if (!formData.agreedToTerms) {
      validationErrors.agreedToTerms = "You must agree to the terms";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const userData = { userName: formData.firstName };
    saveUser(userData);
    navigate(noPatientsRoute);
  };
  return (
    <div className="w-full h-full flex justify-center items-center my-auto">
      <div className="w-lg h-auto bg-white rounded-b-md shadow-2xl flex flex-col gap-y-7 py-5">
        <div className="flex gap-y-1 justify-between items-center mt-3 px-5">
          <MoveLeft
            className="text-blue-500 cursor-pointer"
            onClick={() => navigate(loginRoute)}
          />
          <span className="text-blue-500 text-2xl text-center flex-1">
            SignUp
          </span>
        </div>
        {/* form area */}
        <form className="flex flex-col  px-5 gap-y-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-2">
            <span className="text-sm">Personal Details</span>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="First name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <Input
                type="text"
                placeholder="Last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-2">
              {errors.firstName && (
                <p className="text-red-500 text-xs">{errors.firstName}</p>
              )}
              {errors.lastName && (
                <p className="text-red-500 text-xs">{errors.lastName}</p>
              )}
            </div>

            <div className="flex gap-2 ">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !formData.dob && "text-muted-foreground text-gray-500"
                    )}
                    onClick={() => setErrors({ ...errors, dob: "" })}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.dob
                      ? format(formData.dob, "PPP")
                      : "Date of birth"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={formData.dob}
                    onSelect={(date) => setFormData({ ...formData, dob: date })}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="text-gray-600">
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Male</SelectItem>
                  <SelectItem value="dark">Female</SelectItem>
                  <SelectItem value="system">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-4">
              {errors.dob && (
                <p className="text-red-500 text-xs">{errors.dob}</p>
              )}
              {errors.gender && (
                <p className="text-red-500 text-xs">{errors.gender}</p>
              )}
            </div>
          </div>
          {/* proffessionaldetails */}
          <div className="flex flex-col gap-y-2">
            <span className="text-sm">Professional Details</span>
            <div className="flex gap-2">
              <Input
                type="text"
                name="licenseNumber"
                placeholder="Medical Lisence Number"
                value={formData.licenseNumber}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="specialization"
                placeholder="Specialisation"
                value={formData.specialization}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-4">
              {errors.licenseNumber && (
                <p className="text-red-500 text-xs">{errors.licenseNumber}</p>
              )}
              {errors.Specialisation && (
                <p className="text-red-500 text-xs">{errors.Specialisation}</p>
              )}
            </div>

            <div className="flex gap-2">
              <Input
                type="text"
                name="experience"
                placeholder="Years of experience"
                value={formData.experience}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="hospitalAffiliation"
                placeholder="Hospital affiliation"
                value={formData.hospitalAffiliation}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-4">
              {errors.experience && (
                <p className="text-red-500 text-xs">{errors.experience}</p>
              )}
              {errors.hospitalAffiliation && (
                <p className="text-red-500 text-xs">
                  {errors.hospitalAffiliation}
                </p>
              )}
            </div>
          </div>

          {/* contact details */}
          <div className="flex flex-col gap-y-2">
            <span className="text-sm">Contact Details</span>
            <div className="flex gap-2">
              <Input
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-4">
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs">{errors.phoneNumber}</p>
              )}
            </div>
          </div>
          {/* agreedToTerms area */}

          <div className="flex gap-x-1 items-center">
            <Checkbox
              checked={formData.agreedToTerms}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, agreedToTerms: checked as boolean })
              }
            />
            <span className="text-xs">
              By signing up,you agree on having consent to
              <span className="text-blue-600 underline">
                {" "}
                data privacy
              </span>&{" "}
              <span className="text-blue-600 underline">HIPPA Compliance</span>
            </span>
          </div>
          {errors.agreedToTerms && (
            <p className="text-red-500 text-xs">{errors.agreedToTerms}</p>
          )}
          <Button variant={"primary"}>Sign Up</Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
