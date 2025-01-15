import React from 'react'

const ViewProfile = (props) => {
    const {consultant,editConsultant}=props;

  return (
    <div>
      <div className="container ">
      <div className="col-md-8 col-lg-6 mx-auto">
        <div className=" p-4 border rounded shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-center mb-4">Consultant View your Profile</h2>
            <hr />
            <div className="mb-3">
              <strong className="text-muted">Name:</strong> 
              <span className="d-block view" >{consultant.name}</span>
            </div>
            <div className="mb-3">
              <strong className="text-muted">Email:</strong> 
              <span className="d-block view">{consultant.email}</span>
            </div>
            <div className="mb-3">
              <strong className="text-muted">Company:</strong> 
              <span className="d-block view">{consultant.company}</span>
            </div>
            <div className="mb-3">
              <strong className="text-muted">Role:</strong> 
              <span className="d-block view" >{consultant.role}</span>
            </div>
            <div className="d-grid mt-4">
              <button
                type="button"
                className="btn btn-dark btn-lg"
                onClick={() => editConsultant(consultant)}
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ViewProfile