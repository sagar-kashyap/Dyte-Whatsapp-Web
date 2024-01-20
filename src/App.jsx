import { useState } from 'react';
import { LeftPanel } from './components/leftpanel';
import { RightPanel } from './components/rightpanel';
import "./App.css"

function App() {
const [meetingObj,setMeetingObj]=useState()

  return (
    <div style={{display:"flex", flexDirection:"row"}}>
      <LeftPanel
      info={setMeetingObj} />
      <RightPanel
      info={meetingObj} />
    </div>
  );
}

export default App;