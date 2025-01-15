import React, {  useState }  from 'react'
import { useNavigate } from 'react-router-dom';
import bgImg from '../../image/background.jpg'

export default function Register(props) { 
  const [credential, setCredential] = useState({name:"" ,email:"",password:"" , cpassword:"",role:""})
  const navigate=useNavigate()

  const handleClick = async(e)=>{
    e.preventDefault();
    const{name,email,password,cpassword,role}=credential;

    if (password !== cpassword) {
      // props.showAlert("Passwords do not match", "danger");
      alert("Passwords do not match")
      return;
    }
    
    const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ name,email,password,role}),
        headers: {
          "Content-Type": "application/json"
        },
      });
      const json = await response.json(); 

      if (json.success) {
        props.showAlert("Successfully Registered !","success");
        localStorage.setItem('username',name);
        navigate("/login");
      }
      else{
        props.showAlert("Invalid Credential","danger");
      }
  } 
 
  const onChange = (e) =>{
    setCredential({...credential,[e.target.name]:e.target.value})
  }


  
  const buttonDisabled = () => {
    const { name, password, cpassword, role } = credential;
  
    if (
      (name === "" || name.length < 5) ||         
      (password === "" || password.length < 5) || 
      cpassword === "" ||                         
      password !== cpassword ||                   
      role === ""                                 
    ) {
      return true
    }
    else{
      props.showAlert("Please provide valid credencials", "danger");
    }
  }

  return (
    <div className='bg-body' style={{ 
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImg})`,
      height:'105%',position:"absolute"
    }}>
    <div className="container" style={{paddingTop:"5%"}}>
    <div className='container' >
        <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='card home-body'>
            <div className='card-body'>
              <h1 className='card-title text-center mb-4'>Register</h1><hr />
              <form onSubmit={handleClick}>
                <div className='mb-3'>
                  <label htmlFor="name" className="form-label" style={{fontWeight:"bold"}}>Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={credential.name}
                    onChange={onChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor="email" className="form-label" style={{fontWeight:"bold"}}>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={credential.email}
                    onChange={onChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor="password" className="form-label" style={{fontWeight:"bold"}}>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={credential.password}
                    onChange={onChange}
                    placeholder="Enter your password"
                    minLength={3}
                    required
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor="cpassword" className="form-label" style={{fontWeight:"bold"}}>Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="cpassword"
                    name="cpassword"
                    value={credential.cpassword}
                    onChange={onChange}
                    placeholder="Confirm your password"
                    minLength={3}
                    required
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor="role" className="form-label" style={{fontWeight:"bold"}}>Role</label>
                  <select
                    className="form-select"
                    id="role"
                    name="role"
                    value={credential.role}
                    onChange={onChange}
                    required
                  >
                    <option value="">Choose...</option>
                    <option value="1">Consultant</option>
                    <option value="2">User</option>
                  </select>
                </div>

                <div className='d-grid'>
                  <button disabled={buttonDisabled} type="submit" className="btn btn-dark" >Sign Up</button>
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

