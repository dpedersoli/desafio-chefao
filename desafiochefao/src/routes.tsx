import { useContext } from 'react';
import { AuthContext } from './providers/AutheticationContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PasswordRecovery from "./pages/PasswordRecovery";
import Welcome from "./pages/Welcome";
// import Cards from "./components/views/Cards";
// import Score from "./components/views/Score";
// import Planning from "./components/views/Planning";
// import Videos from "./components/views/Videos";


const AppRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={isAuthenticated ? <Home /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/passwordrecovery" element={<PasswordRecovery />} />
        {/* <Route path="/cards" element={<Cards />} /> */}
        {/* <Route path="/score" element={<Score />} /> */}
        {/* <Route path="/planning" element={<Planning />} /> */}
        {/* <Route path="/videos" element={<Videos />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;