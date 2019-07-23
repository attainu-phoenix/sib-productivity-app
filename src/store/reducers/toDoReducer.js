import { Add_TODO, fetchTodoByCategoryId, deleteTODO ,updateTODO,updateToDoStatus} from '../api/appApi.js';
import { fetchtododata } from '../api/fetchCurrentTodo.js';
import { store } from '../store.js'
function toDoReducer(toDos = [], action) {


    if (action.type === 'ADD_TODO') {
        Add_TODO(store, action);
        return toDos;
    }

    if (action.type === 'FETCH_TODO') {
        //console.log("FETCH");                             
        return action.toDos;
    }
    if (action.type === 'FETCH_TODOS_BY_CATEGORY_ID') {
        fetchTodoByCategoryId(store, action);
        return toDos;
    }
    if (action.type === 'TODOS_LOADED') {
        return action.toDos;
    }
    if (action.type === 'FETCH_TODO_DATA') {
        fetchtododata(store, action);
        return toDos;
    }

    if(action.type === 'UPDATE_TODO'){
        updateTODO(store,action)
    }
    if(action.type === 'UPDATE_TODO_STATUS'){
        updateToDoStatus(store,action);
    }
    if (action.type === 'DELETE_TODO') {
        // console.log("Delete Index ", action.index)
        deleteTODO(store, action);
        return toDos;
    }
  
    return toDos;

}

export default toDoReducer;