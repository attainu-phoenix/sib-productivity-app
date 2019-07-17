import React from 'react'
import Header from './Header'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from '../crome-extension/Login'
import ToDoList from '../crome-extension/ToDoList'
import LandingPage from '../crome-extension/LandingPage'

const style = {
    container: {
        marginTop: '15%'
    },
    link: {
        textDecoration: 'none',
        color: 'black',
        marginTop: '5px'
    }
}


class ExtensionApp extends React.Component {

    doRedirect() {

        let loggedIn = localStorage.getItem("user");
       
        if (loggedIn) {
            console.log("came in /app/toDoList")
            return <Redirect to="/app/toDoList" />


        } else {
            console.log("came in /")

            return <Redirect to="/" />
        }
    }

    render() {
        return (
            <Router>
                <Route>
                    <Route path="/app/toDoList" component={ToDoList} />
                    <Route path="/" exact={true} component={LandingPage} />
                    <Route path="/app/login" exact={true} component={Login} />
                    {this.doRedirect()}
                </Route>
            </Router>

        )
    }
}

export default ExtensionApp;