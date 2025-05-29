import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage.jsx';
import LoginPage from './components/login/LoginPage.jsx';
import RegisterPage from './components/register/RegisterPage.jsx';
import SensorsView from './components/sensorView/SensorsView.jsx';
import Overview from "./components/overview/Overview.jsx";
import ProtectRoutes from "./ProtectRoutes.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<ProtectRoutes />}>
            <Route path="/sensor" element={<SensorsView />} />
          </Route>
          <Route element={<ProtectRoutes />}>
            <Route path="/overview" element={<Overview />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
