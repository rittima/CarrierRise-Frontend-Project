import React, { useState } from 'react';
import ConsultantState from './context/api/ConsultantState';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Alert from './navbar/Alert';
import Login from './authentication/Login';
import Register from './authentication/Register';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import AddConsultant from './pages/AddConsultant';
import Home from './pages/Home';
import Navbar1 from './navbar/Navbar1';
import{ Meeting } from './session-page/Meeting';
import { Room } from './session-page/Room';
import Schedule from './session-page/Schedule';

function ConsultantRoutes() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const Layout = () => {
    const location = useLocation();
    const hideNavbarRoutes = ['/room']; // Define routes where Navbar should be hidden

    const shouldShowNavbar = !hideNavbarRoutes.some((route) =>
      location.pathname.startsWith(route)
    );

    return (
      <>
        {shouldShowNavbar && <Navbar1 />}
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/login" element={<Login showAlert={showAlert} />} />
          <Route exact path="/register" element={<Register showAlert={showAlert} />} />
          <Route exact path="/profile" element={<Profile showAlert={showAlert} />} />
          <Route exact path="/dashboard" element={<Dashboard showAlert={showAlert} />} />
          <Route exact path="/consultant-add" element={<AddConsultant showAlert={showAlert} />} />
          <Route exact path="/" element={<Home showAlert={showAlert} />} />
          <Route path="/meeting" element={<Meeting showAlert={showAlert} />} />
          <Route path="/room/:roomId" element={<Room showAlert={showAlert} />} />
          <Route path="/schedule" element={<Schedule  />}  />
        </Routes>
      </>
    );
  };

  return (
    <ConsultantState>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ConsultantState>
  );
}

export default ConsultantRoutes;
