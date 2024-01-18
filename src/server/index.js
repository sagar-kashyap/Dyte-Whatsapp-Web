// import { Buffer } from 'buffer/';

// const DYTE_API_KEY = "1fcae9ea653a95167418"
// const DYTE_ORG_ID = "cdfe1371-4ccc-45f6-b592-5604f3657281"

// const basic_token = Buffer.from(
//   `${DYTE_ORG_ID}:${DYTE_API_KEY}`,
//   'utf-8'
// ).toString('base64');

export function createMeeting(){

const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Basic Y2RmZTEzNzEtNGNjYy00NWY2LWI1OTItNTYwNGYzNjU3MjgxOjFmY2FlOWVhNjUzYTk1MTY3NDE4'
    },
    body: '{"title":"chatApp"}'
  };
  return new Promise((resolve,reject)=>{

    fetch('https://api.dyte.io/v2/meetings', options)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      resolve(response)
    })
    .catch(err => {
      console.error(err) 
      reject(err)
    });
  })
}

export function addParticipants(name,meeting_id,preset_name){
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic Y2RmZTEzNzEtNGNjYy00NWY2LWI1OTItNTYwNGYzNjU3MjgxOjFmY2FlOWVhNjUzYTk1MTY3NDE4'
        },
        body: `{"name":"${name}","preset_name":"${preset_name}","custom_participant_id":"${name + Math.floor(Math.random() * 1000)}"}`
      };
      
      return new Promise((resolve,reject)=>{

        fetch(`https://api.dyte.io/v2/meetings/${meeting_id}/participants`, options)
        .then(response => response.json())
        .then(response => {
          console.log(response)
          resolve(response)
        })
        .catch(err => {
          console.error(err) 
          reject(err)
        });
      })
}