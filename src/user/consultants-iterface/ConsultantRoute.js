import React, { useState } from 'react';
import ConsultantState from './context/api/ConsultantState';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Alert from './navbar/Alert';
import Login from './authentication/Login';
import Register from './authentication/Register';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import AddConsultant from './pages/AddConsultant';
import Navbar1 from './navbar/Navbar1';
import { Meeting } from './session-page/Meeting';
import { Room } from './session-page/Room';
import Schedule from './session-page/Schedule';
import Home from "./pages/Home";

function Layout() {
  const [alert, setAlert] = useState(null);
  const location = useLocation();  // Hook to get current location

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const hideNavbarRoutes = ["/consultants/room"]; // Hide navbar for these routes
  const shouldShowNavbar = !hideNavbarRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      {shouldShowNavbar && <Navbar1 />}
      <Alert alert={alert} />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login showAlert={showAlert} />} />
        <Route path="register" element={<Register showAlert={showAlert} />} />
        <Route path="dashboard" element={<Dashboard showAlert={showAlert} />} />
        <Route path="profile" element={<Profile showAlert={showAlert} />} />
        <Route path="consultant-add" element={<AddConsultant showAlert={showAlert} />} />
        <Route path="meeting" element={<Meeting showAlert={showAlert} />} />
        <Route path="room/:roomId" element={<Room showAlert={showAlert} />} />
        <Route path="schedule" element={<Schedule />} />
      </Routes>
    </>
  );
}

function ConsultantRoutes() {
  return (
    <ConsultantState>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ConsultantState>
  );
}

export default ConsultantRoutes;
