function USER_DATA(){

	let user = localStorage.getItem("user");
	if(!user) {return null; }
	user = JSON.parse(user);

	if(!user) { return null; 
		.}

	let userdata = {user: user.objectId, email: user.email, name:user.name};
	return userdata;
} 

export {USER_DATA}