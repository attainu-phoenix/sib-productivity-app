
function categoryReduer(categories = [], action) {

    if (action.type === "FETCH_CATEGORES") {
        return categories = ['shopping', 'Excersise', 'study', 'Household Chores']
        
    }

    if (action.type === "ADD_CATEGORIES") {
        let category = action.categoryName
        let newCatergoryArray = Object.assign([],categories);
        newCatergoryArray.push(category);
 
        return newCatergoryArray;
    }

    if (action.type === "DELETE_CATEGORY") {
        let index = categories.findIndex((c) => {
            return c === action.categoryName
        })
        console.log(index);
        let newCatergories = categories.slice();
        newCatergories.splice(index, 1);
        return newCatergories;  
    }
    return categories;
}

export default categoryReduer;