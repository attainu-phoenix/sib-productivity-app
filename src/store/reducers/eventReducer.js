
function eventReducer(events = [], action) {

  

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

        let eventState = events.slice();
        eventState.push(formData);
        return eventState;
    }

    if(action.type === 'EDIT_EVENT_CHECKBOX'){
        
        let eventStatus ={
            id:action.payLoadData.id,
            isDone:action.payLoadData.isDone
        }
        
        let index = events.findIndex((event)=>{
            return event.id === eventStatus.id;
        })
        
        let event = Object.assign({},events[index]);
        event.isDone = eventStatus.isDone
        let newEventsArray = Object.assign([],events);
        newEventsArray[index] = event;
        return newEventsArray;
    }

    if(action.type === 'EDIT_EVENT'){
        let eventData ={
            id:action.payLoadData.id,
            title:action.payLoadData.title,
            description:action.payLoadData.description,
            
        }
        console.log(eventData)
        let index = events.findIndex((event)=>{
            return event.id === eventData.id;
        }) 
        let event = Object.assign({},events[index]);
        event.eventTitle = eventData.title;
        event.description = eventData.description;
        let newEventsArray = Object.assign([],events);
        newEventsArray[index] = event;
        return newEventsArray;
        
    }

    if (action.type === 'DELETE_EVENT'){
       
        console.log("Delete Index ",action.index)
        let eventState = events.slice();
        eventState.splice(action.index,1);
        return eventState;
    }
    return events;
}

export default eventReducer