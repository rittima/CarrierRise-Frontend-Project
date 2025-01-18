// import React, { useRef } from 'react';
// import { ScheduleComponent, Inject, Day, Week, WorkWeek, Month, Agenda, ViewDirective, ViewsDirective, TimelineViews, TimelineMonth } from '@syncfusion/ej2-react-schedule';
// import {registerLicense} from '@syncfusion/ej2-base'
// import '../consultant.css';
// import '@syncfusion/ej2-base/styles/material.css';
// import '@syncfusion/ej2-react-schedule/styles/material.css';
// import '@syncfusion/ej2-react-navigations/styles/material.css';
// import { TreeViewComponent  } from '@syncfusion/ej2-react-navigations';
// import axios from 'axios';
// registerLicense("Ngo9BigBOggjHTQxAR8/V1NMaF5cXmBCf0x0R3xbf1x1ZFRGal5WTnZaUiweQnxTdEBjWH5bcXRXQWBZU0dwWA==");

// const Schedule = () => {

//   const scheduleRef = useRef(null);
//   const localData = {
//     dataSource: [
//       {
//         Id: 1,
//         StartTime: new Date(2025, 0, 14, 4, 30),
//         EndTime: new Date(2025, 0, 14, 6, 30),
//         Subject: 'Aloke',
//       },
//       {
//         Id: 2,
//         StartTime: new Date(2025, 0, 15, 4, 30),
//         EndTime: new Date(2025, 0, 15, 6, 30),
//         Subject: 'Steve',
//       },
//     ],
//   };
//   const treeViewData = [
//     {Id:1, Name:'Peter'},
//     {Id:2, Name:'Marry'},
//     {Id:3, Name:'Aloke'},
//     {Id:4, Name:'Hanry'},
//     {Id:5, Name:'Steve'},
//   ]
//   const field={dataSource:treeViewData,id:'Id',text:'Name'}

//   const onTreeDragStop = (args) => {
//     if (scheduleRef.current) {
//       const cellData = scheduleRef.current.getCellDetails(args.target);
//       const eventData = {
//         Subject: args.draggedNodeData.text,
//         StartTime: cellData.startTime,
//         EndTime: cellData.endTime,
//         IsAllDay: cellData.isAllDay,
//       };
  
//       // Use the correct way to call the openEditor method
//       scheduleRef.current.openEditor(eventData, "Add", true);
//     }
//   };
  
//   const saveDataToDatabase = async () => {
//     try {
//       // Save schedule data
//       await axios.post('http://localhost:5000/api/schedules', localData.dataSource);
  
//       // Save tree view data
//       await axios.post('http://localhost:5000/api/treeview', treeViewData);
  
//       console.log('Data saved to MongoDB!');
//     } catch (error) {
//       console.error('Error saving data:', error);
//     }
//   };
  
//   // Call this function when needed
//   saveDataToDatabase();


//   return (
//     <div>
//       <div className='scheduler-title-container'>Consultant Appointment</div>
//         <div className='scheduler-component'>
//         <ScheduleComponent height='550px'
//           ref={scheduleRef}
//           className="my-4"
//           // selectedDate={new Date(2025,1,2)}
//           currentView="Week"
//           eventSettings={localData}
//         >
//           <ViewsDirective>
//             <ViewDirective option='Day' startHour='08:00' endHour='22:00'/>
//             <ViewDirective option='Week' />
//             <ViewDirective option='Month' showWeekNumber={true} showWeekend={false} />
//             <ViewDirective option='Agenda' />
//             <ViewDirective option='TimelineDay' />
//             <ViewDirective option='TimelineMonth' />
//           </ViewsDirective>
//           <Inject services={[Day, Week, WorkWeek, Month, Agenda,TimelineViews,TimelineMonth]} />
//         </ScheduleComponent>
//       </div>

//       <div>
//         <div className='treeview-title-container' >Student Name</div>
//         <div className='treeview-component' >
//           <TreeViewComponent fields={field} allowDragAndDrop={true} nodeDragStop={onTreeDragStop} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Schedule;





import React, { useEffect, useRef, useState } from 'react';
import { ScheduleComponent, Inject, Day, Week, WorkWeek, Month, Agenda, ViewDirective, ViewsDirective, TimelineViews, TimelineMonth } from '@syncfusion/ej2-react-schedule';
import {registerLicense} from '@syncfusion/ej2-base'
import '../consultant.css';
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-react-schedule/styles/material.css';
import '@syncfusion/ej2-react-navigations/styles/material.css';
import { TreeViewComponent  } from '@syncfusion/ej2-react-navigations';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
registerLicense("Ngo9BigBOggjHTQxAR8/V1NMaF5cXmBCf0x0R3xbf1x1ZFRGal5WTnZaUiweQnxTdEBjWH5bcXRXQWBZU0dwWA==");

const Schedule = () => {

  const scheduleRef = useRef(null);
  const [scheduleData, setScheduleData] = useState([]);
  const treeViewData = [
    {Id:1, Name:'Peter'},
    {Id:2, Name:'Marry'},
    {Id:3, Name:'Aloke'},
    {Id:4, Name:'Hanry'},
    {Id:5, Name:'Steve'},
  ]

  const navigate = useNavigate();
  useEffect(() => {
    const jwtToken=localStorage.getItem('token');
    if (!jwtToken) {
      navigate("/login",{replace:false});
    }
     
    const fetchData = async () => {
      try {
        // Fetch schedule data
        const scheduleResponse = await axios.get('http://localhost:5000/api/schedules/get');
        setScheduleData(scheduleResponse.data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [navigate]);

  const field={dataSource:treeViewData,id:'Id',text:'Name'}

  const onTreeDragStop = (args) => {
    if (scheduleRef.current) {
      const cellData = scheduleRef.current.getCellDetails(args.target);
      const eventData = {
        Subject: args.draggedNodeData.text,
        StartTime: cellData.startTime,
        EndTime: cellData.endTime,
        IsAllDay: cellData.isAllDay,
      };
  
      // Use the correct way to call the openEditor method
      scheduleRef.current.openEditor(eventData, "Add", true);
    }
  };
  
  const saveDataToDatabase = async () => {
    try {
      // Save schedule data
      await axios.post('http://localhost:5000/api/schedules/add', scheduleData);
      console.log('Data saved to MongoDB!');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  
  // Call this function when needed
  saveDataToDatabase();


  return (
    <div>
      <div className='scheduler-title-container'>Consultant Appointment</div>
        <div className='scheduler-component'>
        <ScheduleComponent height='550px'
          ref={scheduleRef}
          className="my-4"
          // selectedDate={new Date(2025,1,2)}
          currentView="Week"
          // eventSettings={localData}
          eventSettings={{ dataSource: scheduleData }}
        >
          <ViewsDirective>
            <ViewDirective option='Day' startHour='08:00' endHour='22:00'/>
            <ViewDirective option='Week' />
            <ViewDirective option='Month' showWeekNumber={true} showWeekend={false} />
            <ViewDirective option='Agenda' />
            <ViewDirective option='TimelineDay' />
            <ViewDirective option='TimelineMonth' />
          </ViewsDirective>
          <Inject services={[Day, Week, WorkWeek, Month, Agenda,TimelineViews,TimelineMonth]} />
        </ScheduleComponent>
      </div>

      <div>
        <div className='treeview-title-container' >Student Name</div>
        <div className='treeview-component' >
          <TreeViewComponent fields={field} allowDragAndDrop={true} nodeDragStop={onTreeDragStop} />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
