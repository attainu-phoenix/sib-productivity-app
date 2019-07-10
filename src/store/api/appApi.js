'use strict'
let events;
const HEADERS = {
      "X-Parse-Application-Id": "checklist",
      "Content-Type": "application/json"           
                 }

function fetchEvent(store, action) {
    events = [
        { id: 'hsdf7493qhdsfa73', isDone: false, eventTitle: "Standup", description: "Standup with mentees for project", date: "Thu Jul 04 2019 18:15:00 GMT+0530 (India Standard Time)" },
        { id: 'adsh7899993ldsfl', isDone: true, eventTitle: "Code Review", description: "Code Review For Project", date: "Wed Jul 03 2019 18:00:00 GMT+0530 (India Standard Time)" },
        { id: 'asdfl7849320308j', isDone: false, eventTitle: "Mentor Sync-up", description: "Arkesh Jaiswal is inviting you to a scheduled Zoom meeting.", date: "Tue Jul 02 2019 00:26:26 GMT+0530 (India Standard Time)" }
    ]
}


function addEvent(store, action) {

    let formData ={
        id:action.formData.id,
        isDone:action.formData.isDone,
        eventTitle:action.formData.eventTitle,
        description:action.formData.description
    }
    console.log(formData)

    events.push(formData)
    return events;
    // store.dispatch({
    //     type:"EVENT_ADDED",
    //     events:events
    // })
    
}

function Do_signup(store,action){
     let url = "http://localhost:1337/parse/users";                             

      fetch(url,{
          method: "post",
          headers:HEADERS,
          body: JSON.stringify({
                   username: action.formdata.email,
                   password:action.formdata.password,
                   email: action.formdata.email,
                   name:action.formdata.name
                                })       
                 })
      .then(data => data.json())
      .then(json =>{
                      console.log("DATA CREATED",json);
       store.dispatch({
                type:"USER_CREATED",
                newuser:json

            })
                    })
       .catch(err => console.log(err));                                                               
}


export { addEvent ,fetchEvent, Do_signup}