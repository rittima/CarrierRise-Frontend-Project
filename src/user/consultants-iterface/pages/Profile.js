import React, { useContext, useEffect, useRef, useState } from 'react'
import consultantContext from "../../consultants-iterface/context/api/ConsultantContext";
import { useNavigate } from 'react-router-dom';
import ViewProfile from './ViewProfile';


const Profile = (props) => {
  const {consultants,getConsultant,updateConsultant} = useContext(consultantContext) ;
  const ref = useRef(null)
  const navigate=useNavigate();
  const refClose = useRef(null)
  const [consultant, setConsultant] = useState({id:"",Ename:"",Eemail:"",Ecompany:"",Erole:""})

  useEffect(()=>{
    const jwtToken=localStorage.getItem('token');
    if (!jwtToken) {
      navigate("/login",{replace:false});
    }
    else{     
      getConsultant();
    }    
  },[getConsultant,navigate])

  const editConsultant = (currentConsultant)=>{
    ref.current.click()
    setConsultant({id : currentConsultant._id, Ename : currentConsultant.name, Eemail:currentConsultant.email , Ecompany:currentConsultant.company, Erole:currentConsultant.role})
  }

  const handleClick=(e)=>{
    refClose.current.click();
    updateConsultant(consultant.id,consultant.Ename, consultant.Eemail, consultant.Ecompany, consultant.Erole);
    navigate("/profile")
    alert("You are succesfully updated your details ! ","success");
  }

  const onChange=(e)=>{
    setConsultant({...consultant,[e.target.name]:e.target.value})
  }

  return (
    <div className="container my-3" style={{paddingTop:"6%"}}>
      
    <div className='container' >
        <button ref={ref}  type="button "  className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
          edit
        </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Update the Your details </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={refClose}></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="Ename" className="col-form-label">Update the Name of the Consultant:</label>
                  <input type="text" className="form-control edit" id="Ename" name='Ename' value={consultant.Ename} onChange={onChange}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="Eemail" className="col-form-label">Update the Email of the Consultant:</label>
                  <input type="email" className="form-control edit" id="Eemail" name='Eemail' value={consultant.Eemail} onChange={onChange}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="Ecompany" className="col-form-label">Update the Company Name</label>
                  <input type="text" className="form-control edit" id="Ecompany" name='Ecompany' value={consultant.Ecompany} onChange={onChange}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="Erole" className="col-form-label">Update its Role in the company</label>
                  <input type="text" className="form-control edit" id="Erole" name='Erole' value={consultant.Erole} onChange={onChange}/>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-dark" onClick={handleClick}>Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='container'>
      <div>
      {consultants.length > 0 ? (
        consultants.map((consultant) => {
        return <ViewProfile key={consultant._id} consultant={consultant} editConsultant={editConsultant} />
      })
      ):(
        <div className="alert alert-warning text-center" role="alert">
        No consultants available.
      </div>
      )
      }
      </div>
    </div>
    </div>
  )
}

export default Profile