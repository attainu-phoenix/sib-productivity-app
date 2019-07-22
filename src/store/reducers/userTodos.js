import {fetchAllTodoOfUser} from '../api/userTodosApi';
import {store} from '../store'
function userTodoReducer(toDos = [], action) {
    if (action.type === 'FETCH_All_TODOS_OF_USER') {
        fetchAllTodoOfUser(store, action);
    }
}

export default userTodoReducer;
