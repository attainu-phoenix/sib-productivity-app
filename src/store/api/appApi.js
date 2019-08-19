
import config from "../../config.js";
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

    let formData = {
        id: action.formData.id,
        isDone: action.formData.isDone,
        eventTitle: action.formData.eventTitle,
        description: action.formData.description
    }
    // console.log(formData)

    events.push(formData)
    return events;
    // store.dispatch({
    //     type:"EVENT_ADDED",
    //     events:events
    // })

}

function Do_signup(store, action) {
    let url = `${config.url}/users`

    fetch(url, {
        method: "post",
        headers: HEADERS,
        body: JSON.stringify({
            username: action.formdata.email,
            password: action.formdata.password,
            email: action.formdata.email,
            name: action.formdata.name
        })
    })
        .then(data => data.json())
        .then(json => {
            // console.log("DATA CREATED", json);
            store.dispatch({
                type: "USER_CREATED",
                newuser: json

            })
        })
        .catch(err => console.log(err));
}

function Do_login(store, action) {

    let username = action.formData.email;
    let password = action.formData.password;
    let params = encodeURI(`username=${username}&password=${password}`);
    let url = `${config.url}/login?${params}`;
    fetch(url, {
        method: "get",
        headers: HEADERS,
    })
        .then(data => data.json())
        .then(json => {
            // console.log("LOGIN", json.sessionToken);
            let user = json;
            localStorage.setItem("user", JSON.stringify(user));
            store.dispatch({
                type: "LOGIN_DONE",
                login: json

            })
        })
        .catch(err => console.log(err));
}

function Add_TODO(store, action) {
    let category_id = action.payLoadData.categoryID;
    let todotext = action.payLoadData.toDo;
    let tododescription = action.payLoadData.description;
    let duedate = action.payLoadData.date;
    let status = action.payLoadData.status;
    let notes = action.payLoadData.notes;

    let url = `${config.url}/classes/todos`;
    fetch(url, {
        method: "post",
        headers: HEADERS,
        body: JSON.stringify({
            category_id: category_id,
            todotext: todotext,
            tododescription: tododescription,
            duedate: duedate,
            status: status,
            notes: notes
        })
    })
        .then(data => data.json())
        .then(json => {
            // console.log("Added Todo", json);
            store.dispatch({
                type: "FETCH_TODOS_BY_CATEGORY_ID",
                payLoadData: category_id
            })
        })
        .catch(err => console.log(err));
}



function updateTODO(store, action) {
    let objectId = action.payLoadData.objectId;
    let categoryID = action.payLoadData.categoryID;
    let data = {
        todotext: action.payLoadData.updatedToDo,
        tododescription: action.payLoadData.updatedDescription,
        notes: action.payLoadData.updatedNotes
    }
    let url = `${config.url}/classes/todos/${objectId}`;

    fetch(url, {
        method: "put",
        headers: HEADERS,
        body: JSON.stringify(data)

    })
        .then(data => data.json())
        .then(json => {
            store.dispatch({
                type: "SHOW_TOAST_MESSAGE",
                payLoadData: {
                    toastTitle: "ToDo",
                    toastMessage: "ToDo Updated Successfully !",
                    isActive: true,
                    messageType: 'Success'
                }
            })
            store.dispatch({
                type: "FETCH_TODOS_BY_CATEGORY_ID",
                payLoadData: categoryID
            })
        
        })
        .catch(err => console.log(err));
}


function updateToDoStatus(store, action) {
    let categoryID = action.payLoadData.categoryID;
    let objectId = action.payLoadData.objectId;

    let toDoStatus = {
        status: action.payLoadData.status
    }
    let data = JSON.stringify(toDoStatus);
    let url = `${config.url}/classes/todos/${objectId}`;

    fetch(url, {
        method: "put",
        headers: HEADERS,
        body: data
    })
        .then(function (data) {
            return data.json()
        })
        .then(function (data) {
            store.dispatch({
                type: "SHOW_TOAST_MESSAGE",
                payLoadData: {
                    toastTitle: "ToDo",
                    toastMessage: "ToDo Updated Successfully !",
                    isActive: true,
                    messageType: 'Success'
                }
            })
            store.dispatch({
                type: "FETCH_TODOS_BY_CATEGORY_ID",
                payLoadData: categoryID
            })
        })
        .catch(function (error) {
            console.log(error);
            store.dispatch({
                type: "SHOW_TOAST_MESSAGE",
                payLoadData: {
                    toastTitle: "ToDo",
                    toastMessage: "Failed Updating Please Try Again !",
                    isActive: true,
                    messageType: 'Error'
                }
            })
        })
}

function deleteTODO(store, action) {
    let todoID = action.payLoadData.todoID;
    let category_id = action.payLoadData.categoryID;
    console.log("API DELETE >> ", todoID, category_id);
    let url = `${config.url}/classes/todos/${todoID}`;
    // console.log("DELETE URL", url);
    fetch(url, {
        method: "DELETE",
        headers: HEADERS
    })
        .then(data => data.json())
        .then(json => {
            // console.log(json);
            store.dispatch({
                type: "FETCH_TODOS_BY_CATEGORY_ID",
                payLoadData: category_id
            })
            store.dispatch({
                type: "SHOW_TOAST_MESSAGE",
                payLoadData: {
                    toastTitle: "ToDo",
                    toastMessage: "ToDo Deleted Successfully !",
                    isActive: true,
                    messageType: 'Success'
                }
            })
        })
        .catch(err => {
            store.dispatch({
                type: "SHOW_TOAST_MESSAGE",
                payLoadData: {
                    toastTitle: "ToDo",
                    toastMessage: "Failed Deleting Please Try Again !",
                    isActive: true,
                    messageType: 'Error'
                }
            })
        });
}



function fetchTodoByCategoryId(store, action) {
    let category_id = action.payLoadData;

    let params = encodeURI(`where={"category_id": "${category_id}"}`);
    let url = `${config.url}/classes/todos/?${params}`;
    // console.log("URL=>", url);
    fetch(url, {

        method: "get",
        headers: HEADERS,

    })
        .then(function (data) {
            return data.json()
        })
        .then(function (data) {
            // console.log(data);
            store.dispatch({
                type: "TODOS_LOADED",
                toDos: data.results
            })
        })
        .catch(function (error) {
            console.log(error)
        })
}
export { addEvent, fetchEvent, Do_signup, Do_login, Add_TODO, updateTODO, deleteTODO, fetchTodoByCategoryId, updateToDoStatus }

