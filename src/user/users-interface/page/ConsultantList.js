import React, { useContext, useEffect } from 'react';
import MenteesContext from '../context/api/MenteesContext';
import { useNavigate } from 'react-router-dom';

export const ConsultantList = () => {
  const { mentees, getConsultant } = useContext(MenteesContext);
  const navigate=useNavigate();

 useEffect(()=>{
     const jwtToken=localStorage.getItem('token');
     if (!jwtToken) {
       navigate("/login",{replace:false});
     }
     else{     
       getConsultant();
     }    
   },[getConsultant,navigate])

  return (
    <div className='container my-5'>
      <h2 className="mb-4">Consultant List</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            {/* <th scope="col">Email</th> */}
            <th scope="col">Role</th>
            <th scope="col">Company</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {mentees.length > 0 ? (
            mentees.map((mentee, index) => (
              <tr key={mentee._id}>
                <th scope="row">{index + 1}</th>
                <td>{mentee.name}</td>
                {/* <td>{mentee.email}</td> */}
                <td>{mentee.role}</td>
                <td>{mentee.company}</td>
                <td>
                  <button type='button' className="btn btn-dark">Book</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No consultants found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
