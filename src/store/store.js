import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer.js';
import eventReducer from './reducers/eventReducer.js';

import isEventLoadingReducer from './reducers/isEventsLoadingReducer.js'
import showToastReducer from './reducers/toastMessageReducer';
import isCategoryLoadingReducer from './reducers/isCategoryLoadingReducer.js';
import CurrentCategoryReducer from './reducers/CurrentCategoryReducer.js';
import categoryReduer from './reducers/categoryReducer.js';
import toDoReducer from './reducers/toDoReducer.js';
import currentToDoDataReducer from './reducers/currentToDoDataReducer'
import isToDoLoadingReducer from './reducers/isToDoLoadingReducer'


let reducer = combineReducers({

    userReducer: userReducer,
    events: eventReducer,
    isEventLoading: isEventLoadingReducer,
    showToast: showToastReducer,
    toDos: toDoReducer,
    currentToDoData: currentToDoDataReducer,
    currentCategoryData: CurrentCategoryReducer,
    categories: categoryReduer,
    isCategoryLoading: isCategoryLoadingReducer,
    isToDoLoading:isToDoLoadingReducer
})

let store = createStore(reducer);

// store.subscribe(function () {
//     console.log(store.getState());
// })

function stateMapper(state) {
    return state;
}

export { store, stateMapper };