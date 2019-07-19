import React from 'react'
import {Redirect} from 'react-router-dom';

class Logout extends React.Component {


    render() {

        localStorage.removeItem("user")

        return (
            <div>
                <h2>Logging out.</h2>
                <Redirect to="/"/>
            </div>
        )
    }
}

export default Logout;