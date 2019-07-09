
function toDoReducer(toDos = [], action) {


    if (action.type === 'ADD_TODO') {
        let toDoData = {
            toDo: action.payLoadData.toDo,
            categoryName: action.payLoadData.categoryName
        }
        toDos.push(toDoData);
        return toDos;
    }

    if (action.type === 'FETCH_TODOS_OF_CATEGORY') {
        console.log("PayloadData in toDoReducer while fetching todos =>"+action.payLoadData)
        let categoryName = action.payLoadData;
        function filterByCategoryName(toDos,categoryName){
            return toDos.filter(function(item){
                return item.categoryName === categoryName;
            })
        }
        let newToDosArray = filterByCategoryName(toDos,categoryName);
        return newToDosArray;
    }

    if (action.type === 'DELETE_TODO') {
        // console.log("Delete Index ", action.index)
        let toDosState = toDos.slice();
        toDosState.splice(action.index, 1);
        return toDosState;
    }
    return toDos;

}

export default toDoReducer;