import React, { useState } from 'react'
import SlotContext from "./SlotContext";

const SlotsState = (props) => {
    const slotsInitial = [];
    const [slots, setSlots] = useState(slotsInitial);

     //GET Consultant
     const getSlots = async() =>{
      try{
      const response = await fetch(`http://localhost:5000/api/session/getSlots`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
          // "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcyYjg2YTVlZjJlOTRkZTc1YzlkOGM3In0sImlhdCI6MTczMDkxMTA2OX0.-XcOwpsOCXcC89eNloWtaPKR08mV0NldROTxVqCuBXM"
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setSlots(json);
      }catch (error) {
        console.warn("Failed to fetch Slots:", error);
      }
    };

  //ADD Slots
  const addSlot = async (start, end, slotAvailable) =>{
    //api call
    const response = await fetch(`http://localhost:5000/api/session/addSlot`, {
      // _id:Date.now().toString(),
      method: "POST",
      body: JSON.stringify({ start, end, slotAvailable }),
      headers: {
        "Content-Type": "application/json",
        // "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcyYjg2YTVlZjJlOTRkZTc1YzlkOGM3In0sImlhdCI6MTczMDkxMTA2OX0.-XcOwpsOCXcC89eNloWtaPKR08mV0NldROTxVqCuBXM"
        "auth-token":localStorage.getItem('token')
      },
    });
    
    const json = await response.json();
    console.log(json);
        
    setSlots(slots.concat(json));
  };

  //Delete note
  const deleteSlot = async (id) => {
    //api call
    const response = await fetch(
      `http://localhost:5000/api/session/delete/${id}`,
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
    const newSlot = slots.filter((slot) => { return slot._id !== id })
    setSlots(newSlot);
  }

  return (
    <SlotContext.Provider value={{slots,getSlots,addSlot,deleteSlot}}>
        {props.children}
    </SlotContext.Provider>
  )
}

export default SlotsState