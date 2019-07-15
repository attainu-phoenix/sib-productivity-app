import {createStore,combineReducers} from 'redux';
import userReducer from './reducers/userReducer.js';
import eventReducer from './reducers/eventReducer.js';


let reducer = combineReducers({
    newUser : userReducer,
    events:eventReducer

})

let store = createStore(reducer);

store.subscribe(function () {
    console.log(store.getState());
})

function stateMapper(state){
    return state;
}

export {store,stateMapper};