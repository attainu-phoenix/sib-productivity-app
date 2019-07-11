import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';


class Home extends React.Component {

    doRedirect() {



        let loggedIn = localStorage.getItem("user");

        if (loggedIn) {

            return <Redirect to="/app" />

        } else {

            return <Redirect to="/login" />
        }
    }


    render() {


        return (
            <Provider store={store}>
                <Router>
                    <Route>
                        <Route path="/signup" component={Signup} />
                        <Route path="/app" component={App} />
                        <Route path="/login" component={Login} />
                        {this.doRedirect()}
                    </Route>
                </Router>
            </Provider>
        )
    }
}


ReactDOM.render(<Home />, document.getElementById('root'));
