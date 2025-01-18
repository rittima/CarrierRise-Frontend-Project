import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {ConsultantList} from './page/ConsultantList';
import MenteesStates from './context/api/MenteesStates';
import Navbar2 from './navbar/Navbar2';
import Home from "../consultants-iterface/pages/Home";

function UserRouter() {
     const [alert, setAlert] = useState(null);
     const showAlert = (message, type)=>{
        setAlert({
          msg:message,
          type:type
        });
        setTimeout(()=>{
          setAlert(null);
        },2000);
      }
  return (
    <div>
      <MenteesStates>
      <BrowserRouter>
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="consultant-list" element={<ConsultantList showAlert={showAlert} />} />
        {/* Add more routes as needed */}
      </Routes>
      </BrowserRouter>
    </MenteesStates>
    
    </div>
  )
}

export default UserRouter
