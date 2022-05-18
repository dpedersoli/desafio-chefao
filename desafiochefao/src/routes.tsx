import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Home from "./components/views/Home";
import Login from "./components/views/Login";

const Rotas: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;