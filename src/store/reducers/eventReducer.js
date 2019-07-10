import { addEvent, fetchEventsByEmail, editEvent, editCheckBox,deleteEvent } from '../api/eventApi'
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

        deleteEvent(store,action)
        return events;
    }
    return events;
}

export default eventReducer