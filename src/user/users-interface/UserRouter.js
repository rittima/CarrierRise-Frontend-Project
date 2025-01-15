import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
      <BrowserRouter>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default UserRouter
