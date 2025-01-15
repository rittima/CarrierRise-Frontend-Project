import React, { useState } from 'react'
import ConsultantContext from "./ConsultantContext";

const ConsultantState = (props) => {
    const datas=[];
    const [consultants,setConsultant] = useState(datas)

    //GET Consultant
    const getConsultant = async() =>{
      try{
      const response = await fetch(`http://localhost:5000/api/consultant/getConsultant`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setConsultant(json);
      }catch (error) {
        console.error("Failed to fetch consultants:", error);
      }
    };

    //ADD Consultant
    const addConsultant = async (name,email,company,role) =>{
      //api call
      const response = await fetch(`http://localhost:5000/api/consultant/addConsultant`, {
        method: "POST",
        body: JSON.stringify({ name,email,company,role }),
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },
      });
      console.log("ADD");
      
      const json = await response.json();    
      setConsultant(consultants.concat(json));
    };

    //Delete note
    const deleteConsultant = async (id) => {
      //api call
      const response = await fetch(
        `http://localhost:5000/api/consultant/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token":localStorage.getItem('token')
          },
        }
      );

      const json = await response.json();
      console.log(json);
      const newCons = consultants.filter((consultant) => { return consultant._id !== id })
      setConsultant(newCons);
    }

    //Edit note
    const updateConsultant = async (id,name,email,company,role) => {
      
      if (!id) {
        console.error("Consultant ID is undefined");
        return; 
      }
      //api call   
        const response = await fetch(
        `http://localhost:5000/api/consultant/updateconsultants/${id}`,
        {
          
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token":localStorage.getItem('token')
          },
          body: JSON.stringify({name, email,company,role }),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

    //   const json= await response.json();
    //   console.log(json);

      let newConsultant=JSON.parse( JSON.stringify(consultants))
      //logic to edit
      for (let index = 0; index < newConsultant.length; index++) {
        const element = consultants[index];
        if (element._id === id) {
          newConsultant[index].name = name;
          newConsultant[index].email = email;
          newConsultant[index].company = company;
          newConsultant[index].role = role; 
          break;
        }
      }
      setConsultant(newConsultant)
      
    }

  // //ADD slots
  // const addSlot = async (start, end, isSlotAvailable) => {
  //   //api call
  //   try{
  //     const response = await fetch(`http://localhost:5000/api/session/addSlots/6703abc4b745eba9c4e6d97f`, {
  //     method: "POST",
  //     body: JSON.stringify({ start, end, isSlotAvailable }),
  //     headers: {
  //       "Content-Type": "application/json",
  //       // "auth-token":localStorage.getItem('token')
  //       "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZmNTZkOGQ2OTM4MWRjNTk2MWUxYWRmIn0sImlhdCI6MTcyODI5MzAzM30._TUhpnzMtOYZBQ2UbYC3gjAlMdvCMncbe_muLnhnbQk"
  //     },
  //   });
  //   const data = await response.json();

  //   if (!response.ok) {
  //     throw new Error(data.message || 'Failed to add slot');
  //   }

  //   // Update state with the newly added slot
  //   setConsultant(prevConsultants => [...prevConsultants, data]);
  // } catch (error) {
  //   console.error('Error adding slot:', error);
  //   throw error; // Rethrow to handle it in your component
  // }
  // };


  return (
    <div>
      <ConsultantContext.Provider value={{consultants,getConsultant,addConsultant,deleteConsultant,updateConsultant}}>
        {props.children}
      </ConsultantContext.Provider>
    </div>
  )
}

export default ConsultantState
