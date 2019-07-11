const HEADERS = {
    "X-Parse-Application-Id": "checklist",
    "Content-Type": "application/json"
};

function createCategories(data) {
    let url = "http://localhost:1337/parse/classes/categories";

    let category = {
        id: "1",
        name: "todos",
        formState: {
            isFormValid: true,
            isNameValid: true
        }
    }
    let data = JSON.stringify(category);

    fetch(url, {
        method: "post",
        headers: HEADERS,
        body: data
    })
    .then(data => data.json())
    .then(json => {
        console.log(json);
    })
    .catch(err => console.log(err));
}
createCategories(data);