import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
class Home extends React.Component {

    doRedirect() {
        return (
            <Redirect to="/app" />
        )

    }

    render() {
        return (
            <Route>
                <Route path="/app" component={App} />
                {this.doRedirect()}
            </Route>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));