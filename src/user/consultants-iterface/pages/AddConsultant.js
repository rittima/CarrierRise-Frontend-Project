import React, { useContext, useEffect, useState } from 'react'
import consultantContext from "../../consultants-iterface/context/api/ConsultantContext";
import { useNavigate } from 'react-router-dom';

const AddConsultant = (props) => {
  const {addConsultant,consultants} = useContext(consultantContext) ;
  const [consultant, setConsultant] = useState({name:"",email:"",company:"",role:""})
  const navigate = useNavigate();
  
  useEffect(()=>{
    const jwtToken=localStorage.getItem('token');
    if (!jwtToken) {
      navigate("/login",{replace:false});
    }
     
  },[navigate]) 
  
  const handleClick=(e)=>{
    e.preventDefault();
    if (!consultant.name || !consultant.email || !consultant.company || !consultant.role) {
      alert("All fields are required!","warning")
      return;
    }
    // Check if consultant already exists
    const exists = consultants.some(existingConsultant => 
      existingConsultant.name === consultant.name || existingConsultant.email === consultant.email ||
      existingConsultant.role === consultant.role|| existingConsultant.company === consultant.company
    );

    if (exists) {
      alert("Consultant with this email and company already exists! You can only edit now","info");
      return;
    }
    addConsultant(consultant.name, consultant.email, consultant.company, consultant.role);
    setConsultant({name:"",email:"",company:"",role:""})
    navigate("/profile")
  }
  const onChange=(e)=>{
    setConsultant({...consultant,[e.target.name]:e.target.value})
  }
  return (
    <div className="container my-3" style={{paddingTop:"6%"}}>
     
  <form className="p-4 border rounded shadow-lg" onSubmit={handleClick}>
  <h1>Add Your Profile</h1><hr />
    {/* First and Last Name */}
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Full Name</label>
      <div className="input-group">
        <input type="text" aria-label="Full name" className="form-control" id='name' name='name' placeholder="Full Name" value={consultant.name} onChange={onChange}/>
      </div>
    </div>

    {/* Recipient's Username */}
    <div className="mb-3">
      <label htmlFor="username" className="form-label">Username / Email</label>
      <div className="input-group">
        <input type="text" className="form-control" placeholder="eg:- abc@gmail.com" id='email' name='email' aria-label="Recipient's username" value={consultant.email} onChange={onChange}/>
        <span className="input-group-text">@gmail.com</span>
      </div>
    </div>

    {/* Company Username */}
    <div className="mb-3">
      <label htmlFor="company" className="form-label">Company Username</label>
      <div className="input-group flex-nowrap">
        <span className="input-group-text">@Company</span>
        <input type="text" className="form-control" placeholder="Enter your Company name" id='company' name='company' aria-label="Company name" value={consultant.company} onChange={onChange} />
      </div>
    </div>

    {/* Role */}
    <div className="mb-3">
      <label htmlFor="role" className="form-label">What is Your Role?</label>
      <div className="input-group">
        <textarea className="form-control" placeholder="Describe your role" id='role' name='role' aria-label="With textarea" value={consultant.role} onChange={onChange}></textarea>
      </div>
    </div>

    {/* Submit Button */}
    <div className="d-grid gap-2">
      <button type="submit" className="btn btn-dark btn-block">Add Your Details</button>
    </div>
  </form>
</div>
  )
}

export default AddConsultant