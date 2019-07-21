const HEADERS = {
    "X-Parse-Application-Id": "checklist",
    "Content-Type": "application/json"
}

function fetchcategorydata(store, action) {
    let categoryId = action.payLoadData;
  
    let params = encodeURI(`where={"objectId": "${categoryId}"}`);
    let url = `http://localhost:1337/parse/classes/categories/?${params}`;
  
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
                type: "CATEGORY_DATA_LOADED",
                currentCategoryData: data.results[0]
            })
        })
        .catch(function (error) {
            console.log(error)
        })
}

export { fetchcategorydata };