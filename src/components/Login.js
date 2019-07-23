import React from 'react';
import './login.css'
import { connect } from 'react-redux'
import { stateMapper } from '../store/store.js'

import { Redirect } from 'react-router-dom';
import HeaderComponent from './Header.js';
import { USER_DATA } from '../store/api/user_helper.js';
import SweetAlert from 'react-bootstrap-sweetalert';
class LoginComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            redirectToLogin: false,
            formState: {
                isFormValid: true,
                isEmailValid: true,
                isPasswordValid: true,
            }
        }
        this.onCancel = this.onCancel.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.onConfirm = this.onConfirm.bind(this)
    }

    onChange(event) {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        })

    }
    handleSubmit(event) {
        event.preventDefault();
        if (!this.validateForm()) {
            return;
        } else {

            this.props.dispatch({
                type: "LOGIN",
                formData: this.state

            })
        }


    }

    validateForm() {
        let newFormState = {
            isFormValid: true,
            isEmailValid: true,
            isPasswordValid: true,
        }
        if (!this.state.email) {
            newFormState.isEmailValid = false;
            newFormState.isFormValid = false;
        }

        if (!this.state.password) {
            newFormState.isPasswordValid = false;
            newFormState.isFormValid = false;
        }

        this.setState({
            formState: newFormState
        })

        return newFormState.isFormValid;

    }
    rendermessgae() {

        if (this.props.match.params.status) {
            return (
                <div className="alert alert-success" role="alert">
                    This is a success alert—check it out!
                </div>
            )
        }
    }
    onConfirm() {
        console.log("do nothing")
        localStorage.removeItem("user")
        this.setState({
            redirectToLogin: true
        })

    }
    onCancel() {
        console.log("on cancel")
    }

    doRedirect() {

        let User = USER_DATA();
        if (User === null) {

            return (

                <Redirect to="/login" />
            )
        }
        else if (User.email) {

            return (
                <Redirect to="/app" />
            )
        } else if (this.props.userReducer.code) {
            return <SweetAlert error title="Error" onConfirm={this.onConfirm} >Email or Password is Wrong !</SweetAlert>
        }


    }


    render() {
        if (this.state.redirectToLogin) {
            return (
                <Redirect to="/" />
            )

        }

        return (
            <div>
                {this.doRedirect()}
                <HeaderComponent />

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <div className="shadow-lg p-3 mb-5 bg-white roundedshadow down">

                                <h5 className="card-title text-center myfont">{this.props.match.params.status}</h5>
                                {this.rendermessgae()}
                                <form className="form-signin" onSubmit={this.handleSubmit}>
                                    {
                                        !this.state.formState.isFormValid &&
                                        <div className="alert alert-danger"> Please fill all Fields and try again .</div>
                                    }
                                    <div className="form-label-group">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fas fa-envelope-square"></i>
                                                </span>
                                            </div>
                                            <input className={`form-control ${
                                                !this.state.formState.isEmailValid && "is-invalid"
                                                }`}
                                                type="text"
                                                name="email"
                                                onChange={this.onChange}
                                                placeholder="Email address" />
                                        </div>

                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fas fa-key"></i>
                                                </span>
                                            </div>
                                            <input className={`form-control ${
                                                !this.state.formState.isPasswordValid && "is-invalid"
                                                }`}
                                                type="password"
                                                name="password"
                                                onChange={this.onChange}
                                                placeholder="Password" />
                                        </div>
                                        <button className="btn btn-lg btn-primary btn-block  btn-circle text-uppercase" type="submit">Sign in</button>
                                        <hr className="my-4" />
                                        {/* <GoogleLoginComponent /> */}


                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

let Login = connect(stateMapper)(LoginComponent)
export default Login;