import {Do_signup} from '../api/appApi.js';
import {store} from '../store.js'
function userReducer(newUser={},action){
	if(action.type === "SIGNUP"){
		Do_signup(store,action);
		console.log("SIGNUP WORKS");
		return newUser;
	}

	if(action.type === "USER_CREATED"){
		//console.log(action);
		return action.newuser;
	}

	if(action.type === "LOGIN"){
		//console.log(action);
		console.log("LOGIN WORKS");
	}
  return newUser;

  console.log("Newuser =>",newUser);

}

export default userReducer;