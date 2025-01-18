import React, { useCallback, useState } from 'react'
import MenteesContext from './MenteesContext';

const MenteesStates = (props) => {
    const datas=[];
    const [mentees,setMentees] = useState(datas)

    //GET Consultant
    const getConsultant = useCallback(async() =>{
      try{
      const response = await fetch(`http://localhost:5000/api/mentees/getConsultant`, {
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
      console.log('Consultants fetched:', json);
      setMentees(json);
      }catch (error) {
        console.error("Failed to fetch consultants:", error);
      }
    },[]);




  return (
    <div>
      <MenteesContext.Provider value={{mentees,getConsultant}}>
        {props.children}
      </MenteesContext.Provider>
    </div>
  )
}

export default MenteesStates


