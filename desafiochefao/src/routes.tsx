import { useContext } from "react";
import { AuthContext } from "./providers/AutheticationContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import PasswordRecovery from "./pages/PasswordRecovery";
import Welcome from "./pages/Welcome";
import Goal from "./pages/Goal";
import IntroTutorial from "./pages/IntroTutorial";
import Tutorial from "./pages/Tutorial";
import Home from "./pages/NavFooter";
import Profile from "./pages/Profile";
import PasswordChange from "./pages/PasswordChange";
import TaskOne from "./pages/TaskOne";

const AppRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={isAuthenticated ? <Home /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password-recovery" element={<PasswordRecovery />} />
        <Route path="/password-change" element={<PasswordChange />} />
        <Route path="/goal" element={<Goal />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/intro-tutorial" element={<IntroTutorial />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/task-one" element={<TaskOne />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;