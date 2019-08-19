import {USER_DATA} from './user_helper';
import config from "../../config.js";

const HEADERS = {
    "X-Parse-Application-Id": "checklist",
    "Content-Type": "application/json"
};

function createCategories(store, action) {

    let url = `${config.url}/classes/categories`;

    let data = {
        categoryName: action.categoryName,
        userId: action.userId
    }
    console.log(data)
    let categoryName = JSON.stringify(data);


    fetch(url, {
        method: "post",
        headers: HEADERS,
        body: categoryName
    })
        .then(function (categoryName) {
            return categoryName.json();
        })
        .then(function (categoryName) {

            store.dispatch({
                type: "FETCH_CATEGORES",
                userId: USER_DATA().user
            })
            store.dispatch({
                type: "SHOW_TOAST_MESSAGE",
                payLoadData: {
                    toastTitle: "Category",
                    toastMessage: "Category Added Successfully !",
                    isActive: true,
                    messageType: 'Success'
                }
            })
        })

        .catch(function (error) {
            store.dispatch({
                type: "SHOW_TOAST_MESSAGE",
                payLoadData: {
                    toastTitle: "Category",
                    toastMessage: "Failed Adding Category Please Try Again ",
                    isActive: true,
                    messageType: 'Error'
                }
            })
        })
}

function deleteCategory(store, action) {

    let objectId = action.objectId;
    console.log(objectId);


    let url = `${config.url}/classes/categories/${objectId}`;
    console.log("this is the url ====>", url);
    fetch(url, {
        method: "delete",
        headers: HEADERS
    })
        .then(data => data.json())
        .then(json => {

            store.dispatch({
                type: "FETCH_CATEGORES",
                userId: USER_DATA().user
            })
            store.dispatch({
                type: "SHOW_TOAST_MESSAGE",
                payLoadData: {
                    toastTitle: "Category",
                    toastMessage: "Category Deleted Successfully !",
                    isActive: true,
                    messageType: 'Success'
                }
            })
        })
        .catch(err => {
            store.dispatch({
                type: "SHOW_TOAST_MESSAGE",
                payLoadData: {
                    toastTitle: "Category",
                    toastMessage: "Failed Deleting Category Please Try Again ",
                    isActive: true,
                    messageType: 'Error'
                }
            })
        });
}


function retrieveCategory(store, action) {
    let userId = action.userId;
    let params = encodeURI(`where={"userId":"${userId}"}`);

    let url = `${config.url}/classes/categories/?${params}`;

    fetch(url, {
        method: "get",
        headers: HEADERS
    })
        .then(data => data.json())
        .then(json => {


            store.dispatch({
                type: "CATERGORIES_LOADED",
                categories: json.results
            })
        })
        .catch(err => console.log(err));
}


function updateCategory(store, action) {
    let objectId = action.updatedCategory.objectId;
    let url = `${config.url}/classes/categories/${objectId}`;
    let data = {
        objectId: objectId,
        categoryName: action.updatedCategory.categoryName
    };

    fetch(url, {
        method: "put",
        headers: HEADERS,
        body: JSON.stringify(data)

    })
        .then(data => data.json())
        .then(json => {
            console.log(json);
            store.dispatch({
                type: "FETCH_CATEGORES",
                userId: USER_DATA().user
            })
            store.dispatch({
                type: "SHOW_TOAST_MESSAGE",
                payLoadData: {
                    toastTitle: "Category",
                    toastMessage: "Category Updated Successfully !",
                    isActive: true,
                    messageType: 'Success'
                }
            })

        })
        .catch(err => {
            store.dispatch({
                type: "SHOW_TOAST_MESSAGE",
                payLoadData: {
                    toastTitle: "Category",
                    toastMessage: "Failed Updating Category Please Try Again !",
                    isActive: true,
                    messageType: 'Error'
                }
            })
        });
}

export { createCategories, deleteCategory, retrieveCategory, updateCategory };