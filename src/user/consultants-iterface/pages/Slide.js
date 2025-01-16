import React from 'react'
import { Link } from 'react-router-dom'

const Slide = () => {

  return (
    <div className='container' style={{ paddingBottom: "10%" }}>
      <div className="col-sm-10 mx-auto">
        <div className="card shadow-lg border-0 rounded">
          <div className="card-body text-center">
            <h5 className="card-title fw-bold text-primary">View Your Sessions</h5>
            <p className="card-text text-muted mb-4">
              Please provide your available times for mentorship guidance to students. 
              Sessions should be less than or equal to 1 hour.
            </p>
            <Link to="/schedule" className="btn btn-dark btn-lg" style={{padding:'10px'}}>
              <b>Create your Schedule </b>
            </Link> 
          </div>
        </div>
      </div>
    </div>

  )
}

export default Slide