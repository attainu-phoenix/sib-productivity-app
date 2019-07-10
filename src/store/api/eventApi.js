

const HEADERS = {
    "X-Parse-Application-Id": "checklist",
    "Content-Type": "application/json"
};


function fetchEventsByEmail(store, action) {

    let email = action.email;
    let params = encodeURI(`where={"email": "${email}"}`);
    let url = `http://localhost:1337/parse/classes/events?${params}`;
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
            console.log(error)
        })
}

function addEvent(store, action) {

    let url = "http://localhost:1337/parse/classes/events";

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

        })
        .catch(error => console.log(error))
}

function editEvent(store, action) {
    let objectId = action.payLoadData.objectId;

    let eventData = {
        // id: action.payLoadData.id,
        eventTitle: action.payLoadData.title,
        description: action.payLoadData.description
    }
    let data = JSON.stringify(eventData);
    let url = `http://localhost:1337/parse/classes/events/${objectId}`;
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
                email: "shivam@gmail.com"

            })
        })
        .catch(function (error) {
            console.log(error);
        })

}


function editCheckBox(store, action) {
    let objectId = action.payLoadData.id;

    let eventStatus = {

        isDone: action.payLoadData.isDone
    }
    let data = JSON.stringify(eventStatus);
    let url = `http://localhost:1337/parse/classes/events/${objectId}`;
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
                email: "shivam@gmail.com"

            })
        })
        .catch(function (error) {
            console.log(error);
        })
}

function deleteEvent(store, action) {

    let objectId = action.objectId
    let url = `http://localhost:1337/parse/classes/events/${objectId}`;

    fetch(url, {
        method: "delete",
        headers: HEADERS
    })
        .then(function (data) {
            return data.json();
        })
        .then(function (json) {
            console.log(json)
            store.dispatch({
                type: "FETCH_EVENTS",
                email: "shivam@gmail.com"

            })
        })
        .catch(function (error) {
            console.log(error)
        })

}


export { addEvent, fetchEventsByEmail, editEvent, editCheckBox, deleteEvent }