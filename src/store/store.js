import {createStore,combineReducers} from 'redux';
import userReducer from './reducers/userReducer.js';
import eventReducer from './reducers/eventReducer.js';
import isEventLoadingReducer from './reducers/isEventsLoadingReducer.js'


let reducer = combineReducers({

    userReducer : userReducer,
    events:eventReducer,
    isEventLoading:isEventLoadingReducer


})

let store = createStore(reducer);

store.subscribe(function () {
    console.log(store.getState());
})

function stateMapper(state){
    return state;
}

export {store,stateMapper};