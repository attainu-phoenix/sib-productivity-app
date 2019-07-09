import {createStore,combineReducers} from 'redux';
import userReducer from './reducers/userReducer.js';
import eventReducer from './reducers/eventReducer.js';
import categoryReduer  from './reducers/categoryReducer.js';
import toDoReducer from './reducers/toDoReducer.js';
import currentToDoDataReducer from './reducers/currentToDoDataReducer'

let reducer = combineReducers({
    userReducer : userReducer,
    events:eventReducer,
    categories:categoryReduer,
    toDos:toDoReducer,
    currentToDoData:currentToDoDataReducer
})

let store = createStore(reducer);

store.subscribe(function () {
    console.log(store.getState());
})

function stateMapper(state){
    return state;
}

export {store,stateMapper};