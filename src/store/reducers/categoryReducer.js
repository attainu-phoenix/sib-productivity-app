import {deleteCategory, createCategories,retrieveCategory, updateCategory} from '../api/categoryApi';

 import {store} from '../store.js';
function categoryReduer(categories = [], action) {

    if (action.type === "FETCH_CATEGORES") {
        retrieveCategory(store,action)
        return categories;
    }

    if(action.type ==='CATERGORIES_LOADED'){
        return action.categories;
    }

    if (action.type === "ADD_CATEGORIES") {
        // let category = action.categoryName

        // categories.push(category)
        // return categories;

        createCategories(store, action);
        return categories;
    }

    if(action.type === "UPDATE_CATEGORY") {
        updateCategory(store, action)
        return categories;
    }

    if (action.type === "DELETE_CATEGORY") {
        // let index = categories.findIndex((c) => {
        //     return c === action.categoryName
        // })
        // console.log(index);
        // let newCatergories = categories.slice();
        // newCatergories.splice(index, 1);
        // return newCatergories;
       deleteCategory(store, action);
       return categories;
    }
    return categories;
}

export default categoryReduer;