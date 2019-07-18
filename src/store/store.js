import {createStore,combineReducers} from 'redux';
import userReducer from './reducers/userReducer.js';
import eventReducer from './reducers/eventReducer.js';
import categoryReducer from './reducers/categoryReducer.js';
import isEventLoadingReducer from './reducers/isEventsLoadingReducer.js'
import isCategoryLoadingReducer from './reducers/isCategoryLoadingReducer.js';

let reducer = combineReducers({

    userReducer : userReducer,
    events:eventReducer,
    isEventLoading:isEventLoadingReducer,
    categories : categoryReducer,
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