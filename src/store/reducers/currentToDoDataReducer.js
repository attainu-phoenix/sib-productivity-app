
function currentToDoDataReducer (toDoData ={},action){

    if(action.type === 'FETCH_TODO_DATA'){
        return toDoData;
    }
    return toDoData;
}

export default currentToDoDataReducer;