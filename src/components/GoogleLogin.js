import React from 'react'
import './login.css';
import {GoogleLogin} from 'react-google-login';

class GoogleLoginComponent extends React.Component {

    constructor(props){
        super(props)

        this.responseGoogle = this.responseGoogle.bind(this);
    }

    responseGoogle(response){
        if(!response || !response.accessToken){
           alert("Sorry,try again later.");
            return;
        }
        let user ={
            token:response.accessToken,
            name:response.profileObj.name
        }
        localStorage.setItem("user",JSON.stringify(user));
        console.log("Google Login works");
    }

    render() {
        return (
            <div >
                        <GoogleLogin
                            clientId="874126481649-clshnaitlj3snksfe290mpk84tff3gdk.apps.googleusercontent.com"
                            buttonText="Login With Google"
                             render={renderProps => (
      <button class="btn btn-lg btn-google  btn-block text-uppercase" onClick={renderProps.onClick} disabled={renderProps.disabled}><i class="fab fa-google mr-2"></i>Login with Google</button>
    )}
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                        />
                    </div>
               
        )
    }
}

export default GoogleLoginComponent;