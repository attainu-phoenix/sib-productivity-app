import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import HomeComponent from './components/Home.js';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';


class Home extends React.Component {

    doRedirect() {


        let user = JSON.parse(localStorage.getItem("user"));
    
        if(!user){
            return <Redirect to="/" />
        }else{
            return <Redirect to="/app"/>
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


ReactDOM.render(<Home />, document.getElementById('root'));
