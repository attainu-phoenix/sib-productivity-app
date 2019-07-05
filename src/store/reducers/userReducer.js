
function userReducer(newUser={},action){
	if(action.type === "SIGNUP"){
		console.log(action);
		console.log("SIGNUP WORKS");
	}

	if(action.type === "LOGIN"){
		console.log(action);
		console.log("LOGIN WORKS");
	}
  return newUser;

}

export default userReducer;