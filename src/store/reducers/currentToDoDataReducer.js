import {fetchtododata} from '../api/fetchCurrentTodo.js';
import {store} from '../store.js'
function currentToDoDataReducer (toDoData ={},action){
    if(action.type === 'FETCH_TODO_DATA'){
            fetchtododata(store,action);
            return toDoData;                              
                                          } 
    if(action.type === 'DISPLAY_TODO_DATA'){
        return action.toDoData;
    }
    return toDoData;
}

export default currentToDoDataReducer;