import {createStore,combineReducers} from 'redux';
import userReducer from './reducers/userReducer.js';
import eventReducer from './reducers/eventReducer.js';

import isEventLoadingReducer from './reducers/isEventsLoadingReducer.js'
import isCategoryLoadingReducer from './reducers/isCategoryLoadingReducer.js';

import categoryReduer  from './reducers/categoryReducer.js';
import toDoReducer from './reducers/toDoReducer.js';
import currentToDoDataReducer from './reducers/currentToDoDataReducer'


let reducer = combineReducers({

    userReducer : userReducer,
    events:eventReducer,
    isEventLoading:isEventLoadingReducer,
    toDos:toDoReducer,
    currentToDoData:currentToDoDataReducer,

    categories : categoryReduer,
    isCategoryLoading: isCategoryLoadingReducer
})

let store = createStore(reducer);

store.subscribe(function () {
    console.log(store.getState());
})

function stateMapper(state){
    return state;
}

export {store,stateMapper};