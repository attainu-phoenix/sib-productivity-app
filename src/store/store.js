import {createStore,combineReducers} from 'redux';
import userReducer from './reducers/userReducer.js';
import categoryReducer from './reducers/categoryReducer.js';
let reducer = combineReducers({
    userReducer : userReducer,
    categories : categoryReducer
})

let store = createStore(reducer);

store.subscribe(function () {
    console.log(store.getState());
})

function stateMapper(state){
    return state;
}

export {store,stateMapper};