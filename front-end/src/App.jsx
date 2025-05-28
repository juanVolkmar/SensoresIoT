import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage.jsx';
import LoginPage from './components/login/LoginPage.jsx';
import RegisterPage from './components/register/RegisterPage.jsx';
import SensorsView from './components/sensorView/SensorsView.jsx';

function App() {

    return (
        <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/sensor" element={<SensorsView />} />
      </Routes>
    </BrowserRouter>
        </>
    );
}

export default App;
