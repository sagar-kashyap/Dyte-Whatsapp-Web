import { useEffect } from 'react';
import { useDyteClient } from '@dytesdk/react-web-core';
import {
  DyteChat,
  DyteUiProvider,
  provideDyteDesignSystem,
} from '@dytesdk/react-ui-kit';
import "./rightpanel.css";

export function RightPanel({token}){
  
    const [meeting, initMeeting] = useDyteClient();
    useEffect(() => {
      provideDyteDesignSystem(document.body, {
        theme: 'dark',
      });     
      
      if(token){
          console.log(token)
          let authToken=token.authToken
       
        initMeeting({
          authToken,
          defaults: {
              video: false,
              audio: false,
            },
        }).then((m) => {
            // NOTE: for debuggingconst 
            Object.assign(window, { meeting: m });
        });
        }
    }, [token]);
  
    if (!meeting) return(
        <div className='container'>
         <div className='dialogue-box'>
            <p>"Click on a contact to start chatting"</p>
            </div>
            </div>
         )
    return(
    <div style={{width:"80%"}}>
      <p className='contact-name'>{token.name}</p>
     <DyteUiProvider meeting={meeting} >
       <DyteChat 
       style={{ height: '93vh', backgroundColor: '#000' }} />
     </DyteUiProvider>
    
    </div>
    )
}