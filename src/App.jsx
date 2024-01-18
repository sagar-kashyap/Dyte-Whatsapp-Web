import { useState } from 'react';
import { LeftPanel } from './components/leftpanel';
import { RightPanel } from './components/rightpanel';
import "./App.css"

function App() {
const [meetingId,setMeetingId]=useState()

  return (
    <div style={{display:"flex", flexDirection:"row"}}>
      <LeftPanel
      token={setMeetingId} />
      <RightPanel
      token={meetingId} />
    </div>
  );
}

export default App;