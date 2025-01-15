import React, { useCallback, useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import consultantContext from "../../consultants-iterface/context/api/ConsultantContext"; // Import the consultant context

export const Meeting = () => {
  const { consultants,getConsultant } = useContext(consultantContext); // Get the list of consultants
  const [roomId, setRoomId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = localStorage.getItem('token');
    if (!jwtToken) {
      navigate("/login", { replace: false });
    }
    else{     
      getConsultant();
    }  
  }, [getConsultant,navigate]);

  // Function to generate a random room ID
  const generateRoomId = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  // Navigate to the meeting room with a generated ID
  const handleCreate = useCallback(() => {
    if (consultants.length === 0) {
      alert('Please add a consultant before creating a meeting.');
      return;
    }

    const newRoomId = generateRoomId();
    navigate(`/room/${newRoomId}`);
  }, [navigate, consultants]);

  // Navigate to the meeting room with the entered ID
  const handleJoin = useCallback(() => {
    if (roomId.trim() === '') {
      alert('Please enter a room ID to join.');
      return;
    }
    navigate(`/room/${roomId}`);
  }, [navigate, roomId]);

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-light"
      style={{
        height: '90vh', // Full viewport height
        overflow: 'auto', // Prevent scrolling
      }}
    >
      <div className="card shadow-lg p-4" style={{ width: '400px' }}>
        <h3 className="text-center mb-4">Join or Create a Meeting</h3><hr />
        <div className="mb-3">
          <label htmlFor="code" className="form-label">
            Enter Room ID
          </label>
          <input
            type="text"
            value={roomId}
            className="form-control "
            onChange={(e) => setRoomId(e.target.value)}
            id="code"
            placeholder="Enter code to join..."
            style={{
              border: "none",
              borderBottom: "2px solid #007bff", 
              borderRadius: "0",
              outline: "none", 
              padding: "8px 4px", 
              fontSize: "16px", 
              transition: "border-color 0.3s ease", // Smooth transition on focus
            }}
          />
        </div>
        <div className="d-flex justify-content-between">
          <button
            type="button"
            onClick={handleJoin}
            className="btn btn-success"
          >
            Join Meeting
          </button>
          <button
            type="button"
            onClick={handleCreate}
            className="btn btn-primary"
          >
            Create Meeting
          </button>
        </div>
        {consultants.length === 0 && (
          <div className="alert alert-warning text-center mt-3" role="alert">
            No consultants available. Please add a consultant to create a meeting.
          </div>
        )}
      </div>
    </div>
  );
};
