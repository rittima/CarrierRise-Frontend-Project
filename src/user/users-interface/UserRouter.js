import React, { useState } from 'react'
import MenteesState from './context/api/MenteesStates';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ConsultantList } from './page/ConsultantList';
import MenteesStates from './context/api/MenteesStates';

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
        <Routes>
          <Route path='consultant-list' element={<ConsultantList/>}/>
        </Routes>
      </BrowserRouter>
      </MenteesStates>
    </div>
  )
}

export default UserRouter
