import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import bgImg from '../../image/background.jpg'

const Login = ({showAlert}) => {
    const navigate = useNavigate();
    
    const [credential, setCredential] = useState({email:"",password:"",role:""})
    const handleClick = async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            body: JSON.stringify({ email:credential.email, password:credential.password ,role:credential.role}),
            headers: {
              "Content-Type": "application/json"
            },
          });
          const json = await response.json();  

          if (json.success) {
            showAlert("Successfully Login !","success");
            localStorage.setItem('token',json.authtoken);

            if (json.user && json.user.name) {
              localStorage.setItem('username', json.user.name);
          } else {
              showAlert("Username not found , Please provide the correct credentials ","danger");
          }

            navigate("/dashboard");
          }
          else{
            // showAlert("Invalid Credential","danger");
            alert("Invalid Credential")
          }
      } 

    const onChange = (e) =>{
      setCredential({...credential,[e.target.name]:e.target.value})
    }

    const buttonDisabled = credential.email === "" || 
    credential.password === "" || 
    credential.role === "";
      
    return (
      <div className='bg-body' style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImg})`,
        position:"absolute"
      }}>
      <div className="container my-3" style={{paddingTop:"5.5%"}}>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-6'>
              <div className='card home-body shadow-sm'>
                <div className='card-body '>
                  <h1 className='card-title text-center mb-4'>Login</h1><hr />
                  <form onSubmit={handleClick}>
                    <div className='mb-3'>
                      <label htmlFor="email" className="form-label">Email address</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={onChange}
                        value={credential.email}
                        id="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div className='mb-3'>
                      <label htmlFor="password" className="form-label">Password</label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        onChange={onChange}
                        value={credential.password}
                        id="password"
                        placeholder="Enter your password"
                        required
                      />
                    </div>

                    <div className='mb-3'>
                      <label htmlFor="role" className="form-label">Role</label>
                      <select
                        className="form-select"
                        id="role"
                        name="role"
                        onChange={onChange}
                        required
                      >
                        <option value="">Choose...</option>
                        <option value="1">Consultant</option>
                        <option value="2">User</option>
                      </select>
                    </div>

                    <div className='d-grid'>
                      <button disabled={buttonDisabled} type="submit" className="btn btn-dark">Sign In</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
    }

export default Login