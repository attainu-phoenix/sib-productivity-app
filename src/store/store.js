import {createStore,combineReducers} from 'redux';
import userReducer from './reducers/userReducer.js';
let reducer = combineReducers({
    userReducer : userReducer

})

let store = createStore(reducer);



function stateMapper(state){
    return state;
}

export {store,stateMapper};