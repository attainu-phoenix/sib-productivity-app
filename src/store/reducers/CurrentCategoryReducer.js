 import {store} from '../store.js';
 import {fetchcategorydata} from '../api/CurrentCategoryAPI.js';
function CurrentCategoryReducer(currentCategoryData = {}, action){
 if(action.type === 'FETCH_CATEGORY_DATA'){
 	 console.log("CAT ID from Reducer", action.payLoadData);
        fetchcategorydata(store,action);
      return currentCategoryData;

 }

 if(action.type === 'CATEGORY_DATA_LOADED'){

 	return action.currentCategoryData;

 }

 return currentCategoryData;
 }

 export default CurrentCategoryReducer;