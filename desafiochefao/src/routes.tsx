import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Home from "./components/views/Home";
import Login from "./components/views/Login";
import Register from "./components/views/Register";
import PasswordRecovery from "./components/views/PasswordRecovery";
import Goal1 from "./components/views/Goal/goal1";
import Goal2 from "./components/views/Goal/goal2";
import Goal3 from "./components/views/Goal/goal3";
// import Cards from "./components/views/Cards";
// import Score from "./components/views/Score";
// import Planning from "./components/views/Planning";
// import Videos from "./components/views/Videos";


export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
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