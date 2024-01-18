import "./leftpanel.css";
import { useState,useEffect } from "react";
import { DyteLogo} from "@dytesdk/react-ui-kit";
import { createMeeting,addParticipants } from '../server';

const contactList=[
    {
        name:"Rahul"
    },
    {
        name:"Priyanka"
    },
    {
        name:"Satwik"
    },
    {
        name:"Pandey Pandey"
    },

]
var newContactList=[]

let foo = prompt('Join in as');

export function LeftPanel({token}){

    const [color,setColor]=useState(-1)
   
    useEffect(() => {
    
        contactList.map(async (e,i)=>{ 
            //  creating a meeting for each contact and adding them as a participant.
            //  This will run only once during the initial stage.
  
            await createMeeting().then(data=>{
                newContactList[i]={}
                newContactList[i].meetingId=data.data.id
                addParticipants(e.name,data.data.id,"group_call_host").then(data=>{
                    newContactList[i].name=data.data.name
                  })
              })
          })
    }, []);

    async function startChat(name,i){
        console.log(name,foo)
        setColor(i)

        //Check if the meeting between both user and contact already exist. If not then add the user as a participant to the respective contant.
        //For avoiding creation of meeting and participant on every contact click.

        if(!newContactList[i].authToken){

            await addParticipants(foo,newContactList[i].meetingId,"group_call_participant").then(data=>{
                console.log(data.data.token)
                newContactList[i].authToken=data.data.token
                token(newContactList[i])
            })
        }else{
            token(newContactList[i])
        }
        return
    }

    return(
        <div style={{width:"25%"}}>
            {/* <DyteLogo logoUrl="/logo/dark.svg" style={{ height: '36px' }} /> */}
            <p className="title">Dyte WhatsApp Web</p>
            {
                contactList.map((e,i)=>{
                    
                    return(
                        <div key={i} onClick={()=>startChat(e.name,i)} className={color===i?"contact-box selected":"contact-box"}>
                            <p>{e.name}</p>
                            </div>
                    )
                })
            }
        </div>
    )
}