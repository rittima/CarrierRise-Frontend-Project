import { BrowserRouter, Route, Routes } from "react-router-dom";
import ConsultantRoute from "./user/consultants-iterface/ConsultantRoute";
import UserRouter from "./user/users-interface/UserRouter";
// import Home from "./user/consultants-iterface/pages/Home";

function App() {
  return (    
  //   <BrowserRouter>
  //   <Routes>    
  //     {/* Consultant Routes */}
  //     <Route path="/consultants/*" element={<ConsultantRoute />} />
  //     {/* User Routes */}
  //     <Route path="/users/*" element={<UserRouter />} />
  //   </Routes>
  // </BrowserRouter>
  
  
  <div>
  <ConsultantRoute></ConsultantRoute>
  <UserRouter></UserRouter>
  </div>
  )
}

export default App;

     