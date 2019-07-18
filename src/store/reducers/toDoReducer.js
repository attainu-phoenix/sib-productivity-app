import {Add_TODO,fetchTodoByCategoryId,deleteTODO} from '../api/appApi.js';
import {store} from '../store.js'
function toDoReducer(toDos = [], action) {


    if (action.type === 'ADD_TODO') {
        Add_TODO(store,action);
        return toDos;
    }

    if(action.type === 'FETCH_TODO'){
            return action.toDos;
                                     }
    if(action.type === 'FETCH_TODOS_BY_CATEGORY_ID'){
            fetchTodoByCategoryId(store,action);
            return toDos;                                            
                                      }
    if(action.type === 'TODOS_LOADED'){
             return action.toDos;                          
                                       }                                  


    if (action.type === 'DELETE_TODO') {
        // console.log("Delete Index ", action.index)
        deleteTODO(store,action);
        return toDos;
    }
    return toDos;

}

export default toDoReducer;