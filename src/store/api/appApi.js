

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
    console.log(formData)

    events.push(formData)
    return events;
    // store.dispatch({
    //     type:"EVENT_ADDED",
    //     events:events
    // })

}

function Do_signup(store, action) {
    let url = "http://localhost:1337/parse/users";

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
            console.log("DATA CREATED", json);
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
    let url = `http://localhost:1337/parse/login?${params}`;
    fetch(url, {
        method: "get",
        headers: HEADERS,
    })
        .then(data => data.json())
        .then(json => {
            console.log("LOGIN", json.sessionToken);
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

    let url = "http://localhost:1337/parse/classes/todos";
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
            console.log("Added Todo", json);
            store.dispatch({
                type: "FETCH_TODOS_BY_CATEGORY_ID",
                payLoadData: category_id
            })
        })
        .catch(err => console.log(err));
}

function retriveTODO(store, action) {
    let catID;
    let params = encodeURI(`where={"category_id":"${catID}"}`);
    let url = `http://localhost:1337/parse/classes/todos?${params}`;
    fetch(url, {
        method: "get",
        headers: HEADERS
    })
        .then(data => data.json())
        .then(json => {
            store.dispatch({
                type: "FETCH_TODOS",
                todo: json
            })
        })
        .catch(err => console.log(err));
}


function updateTODO(store, action) {
    let todoId;
    let category_id;
    let todotext;
    let tododescription;
    let duedate;
    let status;
    let notes = [];
    let url = `http://localhost:1337/parse/classes/todos/${todoId}`;
    fetch(url, {
        method: "put",
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
            store.dispatch({
                type: "TODO_UPDATED",
                todo: json
            })
        })
        .catch(err => console.log(err));
}



function deleteTODO(store, action) {
    let todoID = action.payLoadData.todoID;
    let category_id = action.payLoadData.categoryID;
    console.log("API DELETE >> ", todoID, category_id);
    let url = `http://localhost:1337/parse/classes/todos/${todoID}`;
    console.log("DELETE URL", url);
    fetch(url, {
        method: "delete",
        header: HEADERS
    })
        .then(data => data.json())
        .then(json => {
            store.dispatch({
                type: "FETCH_TODOS_BY_CATEGORY_ID",
                payLoadData: category_id
            })
        })
        .catch(err => console.log(err));
}



function fetchTodoByCategoryId(store, action) {
    let category_id = action.payLoadData;

    let params = encodeURI(`where={"category_id": "${category_id}"}`);
    let url = `http://localhost:1337/parse/classes/todos/?${params}`;
    console.log("URL=>", url);
    fetch(url, {

        method: "get",
        headers: HEADERS,

    })
        .then(function (data) {
            return data.json()
        })
        .then(function (data) {
            console.log(data);
            store.dispatch({
                type: "TODOS_LOADED",
                toDos: data.results
            })
        })
        .catch(function (error) {
            console.log(error)
        })
}



export { addEvent, fetchEvent, Do_signup, Do_login, Add_TODO, retriveTODO, updateTODO, deleteTODO, fetchTodoByCategoryId }

