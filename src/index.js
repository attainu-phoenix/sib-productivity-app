import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import HomeComponent from './components/Home.js';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import LandingPage from './components/crome-extension/LandingPage'
import ExtensionApp from './components/crome-extension/ExtensionApp'

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';


class Home extends React.Component {

    doRedirect() {




        let loggedIn = localStorage.getItem("user");

        if (loggedIn) {

            return <Redirect to="/app" />

        } else {

            return <Redirect to="/" />
        }
    }


    render() {


        return (
            <Provider store={store}>
                <Router>

                    <Route>
                        <Route path="/" exact={true} component={HomeComponent} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/app" component={App} />
                        <Route path="/login" component={Login} />
                        <Route path="/login/:status" component={Login} />

                        {this.doRedirect()}
                    </Route>
                </Router>

            </Provider>
        )
    }
}


ReactDOM.render(<ExtensionApp />, document.getElementById('root'));