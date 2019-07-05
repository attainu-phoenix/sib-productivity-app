
function eventReducer(events = [], action) {

    events = [
        { id: 'hsdf7493qhdsfa73', isDone: false, eventTitle: "Standup", description: "Standup with mentees for project", date: "Thu Jul 04 2019 18:15:00 GMT+0530 (India Standard Time)" },
        { id: 'adsh7899993ldsfl', isDone: true, eventTitle: "Code Review", description: "Code Review For Project", date: "Wed Jul 03 2019 18:00:00 GMT+0530 (India Standard Time)" },
        { id: 'asdfl7849320308j', isDone: false, eventTitle: "Mentor Sync-up", description: "Arkesh Jaiswal is inviting you to a scheduled Zoom meeting.", date: "Tue Jul 02 2019 00:26:26 GMT+0530 (India Standard Time)" }
    ]

    if (action.type === 'FETCH_EVENTS') {
        return events;
    }
    if (action.type === 'ADD_EVENT') {

        let formData = {
            id: action.formData.id,
            isDone: action.formData.isDone,
            eventTitle: action.formData.eventTitle,
            description: action.formData.description,
            date: action.formData.date
        }

        events.push(formData);
    }

    if (action.type === 'EDIT_EVENT_TITLE') {

        let newTitle = {
            id: action.payLoadData.id,
            title: action.payLoadData.title
        }

        let index = events.findIndex((event) => {
            return event.id === newTitle.id;
        })
        let event = Object.assign({}, events[index]);
        event.eventTitle = newTitle.title

        let newEventsArray = Object.assign([], events);
        newEventsArray[index] = event;

      
        return newEventsArray;

    }

    if(action.type === 'EDIT_EVENT_DESCRIPTION'){
        
        let newDescription ={
            id:action.payLoadData.id,
            description:action.payLoadData.description
        }
        // console.log(newDescription);
        let index = events.findIndex((event)=>{
            return event.id === newDescription.id;
        })
        let event = Object.assign({},events[index]);
        event.description = newDescription.description;

        let newEventsArray = Object.assign([],events);
        newEventsArray[index] = event;

        return newEventsArray;
    }

    if(action.type === 'EDIT_EVENT_CHECKBOX'){
        
        let eventStatus ={
            id:action.payLoadData.id,
            isDone:action.payLoadData.isDone
        }
        // console.log("Event Status ",eventStatus)
        let index = events.findIndex((event)=>{
            return event.id === eventStatus.id;
        })
        // console.log("Index ",index)
        let event = Object.assign({},events[index]);
        
        event.isDone = eventStatus.isDone
        // console.log("After Change ",event);

        let newEventsArray = Object.assign([],events);
        newEventsArray[index] = event;
        return newEventsArray;
    }

    return events;
}

export default eventReducer