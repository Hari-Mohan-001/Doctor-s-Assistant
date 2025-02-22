import { Button } from "@/components/ui/button";
import { totalPatientsRoute } from "@/constants/urls";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div>
        <img className="h-[400px]" src="../pageNotFound.jpg" alt="" />
      </div>
      <Button onClick={() => navigate(totalPatientsRoute)} variant={"primary"}>
        Go Back
      </Button>
    </div>
  );
};

export default NotFoundPage;
