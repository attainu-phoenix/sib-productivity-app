const HEADERS = {
    "X-Parse-Application-Id": "checklist",
    "Content-Type": "application/json"
};

function createCategories(data) {
    let url = "http://localhost:1337/parse/classes/categories";
    data = JSON.stringify(data);

    fetch(url, {
        method: "post",
        headers: HEADERS,
        body: data
    })
    .then(data => data.json())
    .then(json => {
        console.log("CAME HEREERERER")
        console.log(json);
    })
    .catch(err => console.log(err));
}

let dummyData = {
    name: "todo",
    userId: "",
    formState: {
        isFormValid: true,
        isNameValid: true
    }
};
createCategories(dummyData);

function deleteCategory() {
    let objectId = "fOITuv49QE";


    let url = `http://localhost:1337/parse/classes/charts/${objectId}`;

    fetch(url, {
        method: "delete",
        headers: HEADERS
    })
    .then(data => data.json())
    .then(json => {
        console.log("deleted")
        console.log(json);
    })
    .catch(err => console.log(err));
}


function retrieveCategory() {
    let  userId= " ";


    let url = `http://localhost:1337/parse/classes/charts/${userId}`;

    fetch(url, {
        method: "get",
        headers: HEADERS
    })
    .then(data => data.json())
    .then(json => {
        console.log("retrieving the data from parse dashboard");
        console.log(json);
    })
    .catch(err => console.log(err));
}


function editCategory() {
    let objectId = "";
    let url = `http://localhost:1337/parse/classes/charts/${objectId}`;

    fetch(url, {
        method: "put",
        headers: HEADERS,
       
    })
    .then(data => data.json())
    .then(json => {
        console.log(json);
    })
    .catch(err => console.log(err));
}