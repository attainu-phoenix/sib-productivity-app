import { addEvent, fetchEventsByEmail, editEvent, editCheckBox } from '../api/eventApi'
import { store } from '../store.js'

function eventReducer(events = [], action) {



    if (action.type === 'FETCH_EVENTS') {
        fetchEventsByEmail(store, action)
        return events;
    }

    if (action.type === 'EVENTS_LOADED') {
        return action.events
    }
    if (action.type === 'ADD_EVENT') {
        addEvent(store, action)
        return events;
    }

    if (action.type === 'EDIT_EVENT_CHECKBOX') {

        editCheckBox(store, action)
        return events;
    }

    if (action.type === 'EDIT_EVENT') {
        editEvent(store, action)
        return events;

    }

    if (action.type === 'DELETE_EVENT') {

        console.log("Delete Index ", action.index)
        let eventState = events.slice();
        eventState.splice(action.index, 1);
        return eventState;
    }
    return events;
}

export default eventReducer