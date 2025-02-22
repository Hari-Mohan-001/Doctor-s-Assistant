import DashBoardWithoutPatients from "@/pages/DashBoardWithoutPatients";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import { Route, Routes } from "react-router-dom";
import DashboardWithPatients from "@/pages/DashboardWithPatients";
import DashboardWithTotalPatients from "@/pages/DashboardWithTotalPatients";
import AddNewPatientPage from "@/pages/AddNewPatientPage";
import AddNewPatientManuallyPage from "@/pages/AddNewPatientManuallyPage";
import PersonalAssistantPage from "@/pages/PersonalAssistantPage";
import PersonalAssistantTypingPage from "@/pages/PersonalAssistantTypingPage";
import PersonalAssistantSearchingPage from "@/pages/PersonalAssistantSearchingPage";
import NotFoundPage from "@/pages/NotFoundPage";
import PrivateRoute from "./PrivateRoute";

const DoctorRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Private Routes*/}
      <Route element={<PrivateRoute />}>

        {/* Dashboard Routes */}
        <Route
          path="/dashboard/no-patients"
          element={<DashBoardWithoutPatients />}
        />
        <Route
          path="/dashboard/patient-list"
          element={<DashboardWithPatients />}
        />
        <Route
          path="/dashboard/total-patients"
          element={<DashboardWithTotalPatients />}
        />
        {/* new-Patient Route */}

        <Route path="/new-patient" element={<AddNewPatientPage />} />
        <Route
          path="/new-patient/mannual"
          element={<AddNewPatientManuallyPage />}
        />
        
        {/* Personal Assistant Route */}
        <Route path="/personal-assistant" element={<PersonalAssistantPage />} />
        <Route
          path="/personal-assistant/typing"
          element={<PersonalAssistantTypingPage />}
        />
        <Route
          path="/personal-assistant/searching"
          element={<PersonalAssistantSearchingPage />}
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default DoctorRoutes;
