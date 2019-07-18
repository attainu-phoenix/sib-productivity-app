const HEADERS = {
    "X-Parse-Application-Id": "checklist",
    "Content-Type": "application/json"
};

function createCategories(store, action) {
    
    let url = "http://localhost:1337/parse/classes/categories";
            
            let data ={
                categoryName:action.categoryName,
                userId:'dcghkj564'
            }
            console.log(data)
            let categoryName = JSON.stringify(data);


    fetch(url, {
        method: "post",
        headers: HEADERS,
        body:categoryName
    })
    .then(function(categoryName){
        return categoryName.json();
    })
    .then(function(categoryName){
        console.log("Success ",categoryName);
        store.dispatch({
            type: "FETCH_CATEGORES",
            userId:'dcghkj564'
        })
    })

    .catch(function(error){
        console.log(error);
    })
}

// let dummyData = {
//     name: "todo",
//     userId: "",
//     formState: {
//         isFormValid: true,
//         isNameValid: true
//     }
// };
//createCategories(dummyData);

function deleteCategory(store, action) {
    
            let objectId = action.objectId;
            console.log(objectId);

            
            let url = `http://localhost:1337/parse/classes/categories/${objectId}`;
    console.log("this is the url ====>", url);
    fetch(url, {
        method: "delete",
        headers: HEADERS
    })
    .then(data => data.json())
    .then(json => {
        
        store.dispatch({
            type: "FETCH_CATEGORES",
            userId: "dcghkj564"
        })
    })
    .catch(err => console.log(err));
}


function retrieveCategory(store,action) {
    let  userId= action.userId;
    let params = encodeURI(`where={"userId":"${userId}"}`);

    let url = `http://localhost:1337/parse/classes/categories/?${params}`;

    fetch(url, {
        method: "get",
        headers: HEADERS
    })
    .then(data => data.json())
    .then(json => {
       
        
        store.dispatch({
            type:"CATERGORIES_LOADED",
            categories:json.results
        })
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

export {createCategories, deleteCategory,retrieveCategory, editCategory};