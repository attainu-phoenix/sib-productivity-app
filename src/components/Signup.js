import React from 'react';
import {connect} from 'react-redux'
import {stateMapper} from '../store/store.js'
import HeaderComponent from './Header.js';
import './signup.css'
 class SignupComponent extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			name: "",
			email: "",
			password: "",
			cpassword: "",
			formState: {
				isFormValid: true,
				isNameValid: true,
				isEmailValid: true,
				isPasswordValid: true,
				isCpasswordValid: true,
				isPassMatch: true
			}
		}
		this.onChange = this.onChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.validateForm = this.validateForm.bind(this);
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
		}
		else {

		  this.props.dispatch({
		  	type:"SIGNUP",
		  	formdata:this.state
		  })
		}


	}

	validateForm() {
		let newFormState = {
			isFormValid: true,
			isNameValid: true,
			isEmailValid: true,
			isPasswordValid: true,
			isCpasswordValid: true,
			isPassMatch: true
		}
		if (!this.state.name) {
			newFormState.isNameValid = false;
			newFormState.isFormValid = false;

		}
		if (!this.state.email) {
			newFormState.isEmailValid = false;
			newFormState.isFormValid = false;
		}

		if (!this.state.password) {
			newFormState.isPasswordValid = false;
			newFormState.isFormValid = false;
		}

		if (!this.state.cpassword) {
			newFormState.isCpasswordValid = false;
			newFormState.isFormValid = false;
		}
		if (this.state.password !== this.state.cpassword) {
			newFormState.isPassMatch = false;
			newFormState.isFormValid = true;
		}

		this.setState({
			formState: newFormState
		})

		return newFormState;

	}

    didsignup(){
    	if (this.props.objectId) {
            return "<h1>CREATED</h1>";
        } 


    }
	render() {
		/*if(this.props.newUser.objectId){
            return "<h1>Hello</h1>";
        }*/
		return (
			<div>

			 <HeaderComponent/>
			<div className="container">
				<div className="row justify-content-center">
				
					<div className="col-4">
                       {this.didsignup()}
                  
						<label for="show" class="title">sign up<i className="flag left"></i><i className="flag right"></i></label>
						<form onSubmit={this.handleSubmit} className="shadow p-3 mb-5 bg-white roundedshadow p-3 mb-5 bg-white rounded">
							{
								!this.state.formState.isFormValid &&
								<div className="alert alert-danger"> Please fill all Fields and try again .</div>
							}
							{
								!this.state.formState.isPassMatch &&
								<div className="alert alert-danger"> Confirm Password does not match .</div>
							}

							<div className="input-group mb-3">
								<div className="input-group-prepend">
									<span className="input-group-text">
										<i className="fas fa-user-tie"></i>
									</span>
								</div>
								<input className={`form-control ${
									!this.state.formState.isNameValid && "is-invalid"
									}`}
									name="name"
									type="text"
									onChange={this.onChange}
									placeholder="Full Name" />
							</div>

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

							<div className="input-group mb-3">
								<div className="input-group-prepend">
									<span className="input-group-text">
										<i className="fas fa-key"></i>
									</span>
								</div>
								<input className={`form-control ${
									!this.state.formState.isCpasswordValid && "is-invalid"
									}`}
									type="password"
									name="cpassword"
									onChange={this.onChange}
									placeholder="Confirm Password" />
							</div>

							<div className="text-center">
								<button type="submit" className="btn btn-info btn-block">Signup</button>
							</div>
						</form>

					</div>
				</div>
			</div>
			</div>
		);
	}

}

let Signup = connect(stateMapper)(SignupComponent)
export default Signup;