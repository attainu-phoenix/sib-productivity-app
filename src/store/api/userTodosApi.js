const HEADERS = {
    "X-Parse-Application-Id": "checklist",
    "Content-Type": "application/json"
}
function fetchAllTodoOfUser(store, action) {
    let userId = action.userId;
    let params = encodeURI(`where={"userId": "${userId}"}`);

    let url = `http://localhost:1337/parse/classes/todos/?${params}`;

    fetch(url, {

        method: "get",
        headers: HEADERS,

    })
        .then(function (data) {
            return data.json()
        })
        .then(function (data) {
            console.log(data);
          
        })
        .catch(function (error) {
            console.log(error)
        })
}

export {fetchAllTodoOfUser}