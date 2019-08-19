import {USER_DATA} from './user_helper'
import config from "../../config.js";

const HEADERS = {
    "X-Parse-Application-Id": "checklist",
    "Content-Type": "application/json"
};


function fetchEventsByEmail(store, action) {

    let email = action.email;
    let params = encodeURI(`where={"email": "${email}"}`);
    let url = `${config.url}/classes/events?${params}`;
    fetch(url, {
        method: "GET",
        headers: HEADERS
    })
        .then(function (data) {
            return data.json()
        })
        .then(function (data) {
            //   console.log(data)
            store.dispatch({
                type: "EVENTS_LOADED",
                events: data.results
            })
        })
        .catch(function (error) {
            // console.log(error)
        })
}

function addEvent(store, action) {

    let url = `${config.url}/classes/events`;

    let eventData = {
        id: action.formData.id,
        email: action.formData.email,
        isDone: action.formData.isDone,
        eventTitle: action.formData.eventTitle,
        description: action.formData.description,
        date: action.formData.date
    }

    let data = JSON.stringify(eventData)


    fetch(url, {
        method: "POST",
        headers: HEADERS,
        body: data
    })
        .then(function (data) {
            return data.json()
        })
        .then(function (data) {
            store.dispatch({
                type: "FETCH_EVENTS",
                email: action.formData.email
            })
            store.dispatch({
                type: "SHOW_TOAST_MESSAGE",
                payLoadData: {
                    toastTitle: "Event",
                    toastMessage: "Event Added Successfully !",
                    isActive: true,
                    messageType: 'Success'
                }

            })

        })
        .catch(function (error) {
            store.dispatch({
                type: "SHOW_TOAST_MESSAGE",
                payLoadData: {
                    toastTitle: "Event",
                    toastMessage: "Failed Please Try Again !",
                    isActive: true,
                    messageType: 'Error'
                }

            })
        })
}

function editEvent(store, action) {
    let objectId = action.payLoadData.objectId;

    let eventData = {
        // id: action.payLoadData.id,
        eventTitle: action.payLoadData.title,
        description: action.payLoadData.description,
        date: action.payLoadData.date
    }
    let data = JSON.stringify(eventData);

    let url = `${config.url}/classes/events/${objectId}`;
    fetch(url, {
        method: "put",
        headers: HEADERS,
        body: data
    })
        .then(function (data) {

            return data.json();
        })
        .then(function (data) {
         
            store.dispatch({
                type: "FETCH_EVENTS",
                email: USER_DATA().email

            })
            store.dispatch({
                type: "SHOW_TOAST_MESSAGE",
                payLoadData: {
                    toastTitle: "Event",
                    toastMessage: "Event Updated Successfully !",
                    isActive: true,
                    messageType: 'Success'
                }

            })
        })
        .catch(function (error) {
            // console.log(error);
            store.dispatch({
                type: "SHOW_TOAST_MESSAGE",
                payLoadData: {
                    toastTitle: "Event",
                    toastMessage: "Error Updating Event Please Try Again !",
                    isActive: true,
                    messageType: 'Error'
                }

            })
        })

}


function editCheckBox(store, action) {
    let objectId = action.payLoadData.id;

    let eventStatus = {

        isDone: action.payLoadData.isDone
    }
    let data = JSON.stringify(eventStatus);
    let url = `${config.url}/classes/events/${objectId}`;
    fetch(url, {
        method: "put",
        headers: HEADERS,
        body: data
    })
        .then(function (data) {

            return data.json();
        })
        .then(function (data) {

            store.dispatch({
                type: "FETCH_EVENTS",
                email: USER_DATA().email

            })

            store.dispatch({
                type: "SHOW_TOAST_MESSAGE",
                payLoadData: {
                    toastTitle: "Event",
                    toastMessage: "Event Status Updated Successfully !",
                    isActive: true,
                    messageType: 'Success'
                }

            })
        })
        .catch(function (error) {
           
            store.dispatch({
                type: "SHOW_TOAST_MESSAGE",
                payLoadData: {
                    toastTitle: "Event",
                    toastMessage: "Error Updating Event Please Try Again !",
                    isActive: true,
                    messageType: 'Error'
                }

            })
        })
}

function deleteEvent(store, action) {

    let objectId = action.objectId
    let url = `${config.url}/classes/events/${objectId}`;

    fetch(url, {
        method: "delete",
        headers: HEADERS
    })
        .then(function (data) {
            return data.json();
        })
        .then(function (json) {
           
            store.dispatch({
                type: "FETCH_EVENTS",
                email: USER_DATA().email

            })
        })
        .catch(function (error) {
            console.log(error)
        })

}


export { addEvent, fetchEventsByEmail, editEvent, editCheckBox, deleteEvent }