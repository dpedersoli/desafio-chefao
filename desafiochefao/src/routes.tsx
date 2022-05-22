import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PasswordRecovery from "./pages/PasswordRecovery";
import Goal1 from "./components/goal/goal1";
import Goal2 from "./components/goal/goal2";
import Goal3 from "./components/goal/goal3";
import { useContext } from 'react';
import { AuthContext } from './providers/AutheticationContext';
// import Cards from "./components/views/Cards";
// import Score from "./components/views/Score";
// import Planning from "./components/views/Planning";
// import Videos from "./components/views/Videos";


const AppRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/passwordrecovery" element={<PasswordRecovery />} />
        <Route path="/goal1" element={<Goal1 />} />
        <Route path="/goal2" element={<Goal2 />} />
        <Route path="/goal3" element={<Goal3 />} />
        {/* <Route path="/cards" element={<Cards />} /> */}
        {/* <Route path="/score" element={<Score />} /> */}
        {/* <Route path="/planning" element={<Planning />} /> */}
        {/* <Route path="/videos" element={<Videos />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;