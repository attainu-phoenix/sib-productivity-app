import React from 'react';
import Header from './Header'
import { store, stateMapper } from '../../store/store'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

const style = {
    container: {
        marginTop: '50%'
    },
    link: {
        textDecoration: 'none',
        color: 'black',
        marginTop: '5px'
    }
}

class LoginComponent extends React.Component {


    constructor(props) {
        super(props);


        this.state = {
            email: "",
            password: "",
            formState: {
                isEmailValid: true,
                isPasswordValid: true,
                isFormValid: true
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        })


    }

    handleSubmit(event) {
        event.preventDefault()

        store.dispatch({
            type: "LOGIN",
            formData: this.state

        })

    }



    doRedirect() {
        console.log("doRedirect called ...")
        let loggedIn = localStorage.getItem("user");
        console.log(loggedIn)
        if (loggedIn) {
            return (
                <Redirect to="/app/toDoList" />
            )
        } else {
            return (
                <Redirect to="/app/login" />
            )
        }

    }

    showLoginForm() {
        let context = this;
        return (
            <div>

                <Header />
                <div className="container-fluid" style={style.container}>
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={context.handleSubmit}>
                                <div className="from-group">
                                    <label htmlFor="exampleInputEmail1" >Email</label>
                                    <input type="email" name="email" onChange={context.handleChange} required className="form-control" placeholder="Email" />
                                </div>
                                <div className="from-group">
                                    <label htmlFor="exampleInputEmail1" >Password</label>
                                    <input type="password" name="password" onChange={context.handleChange} required className="form-control" placeholder="password" />
                                </div><p></p>
                                <div className="row justify-content-center">
                                    <button type="submit" className="btn btn-danger">Login</button>
                                </div>

                            </form>
                        </div>

                    </div>


                </div>

            </div>
        )
    }


    render() {

        let show;
        let user = JSON.parse(localStorage.getItem("user"));
        // Checking  whether loggedIn user information is not null, that means user information 
        // is stored in localStorage 
        if (user !== null) {
            // checking email from userReducer to localStorage user email
            // This condition becomes true when user is logged in first time
            // After clicking on Login Button user is redirected to toDoList component or page.
            if (this.props.userReducer.email === user.email) {
                return <Redirect to="/app/toDoList" />
            }

        }
        show = this.showLoginForm();
        return (
            <div>
                {show}
            </div>

        )
    }
}
let Login = connect(stateMapper)(LoginComponent)
export default Login 