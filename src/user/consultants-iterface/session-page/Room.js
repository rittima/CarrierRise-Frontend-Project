import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React from 'react'
import { useParams } from 'react-router-dom'

export const Room = () => {
    const {roomId} = useParams();
    const name = localStorage.getItem('username');

    const myMeeting = async (element) =>{
        const  appID = 1663688955;
        const  serverSecret = "0b5417863ae0f2da6425444507407f66";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
          appID,
          serverSecret,
          roomId,
          Date.now().toString(),
          name
        );
        const zc= ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container:element,
            sharedLinks:[
              {
                name:'Copy Link',
                url:`http://localhost:3000/room/${roomId}`
              }
            ],
            scenario:{
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton : false,
        })
    }

  return (
    <div>
        <div 
        ref={myMeeting} 
        style={{ width: '100vw', height: '100vh' }}
        />
    </div>
  )
}

