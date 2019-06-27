import React from 'react';
import './login.css'

export default class LoginComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            formState: {
                isFormValid: true,
                isEmailValid: true,
                isPasswordValid: true,
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
        } else {

            alert("LOGIN SUCCESS");
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


    render() {
        return (
            <div className="container">
				<div className="row justify-content-center">
					<div className="col-4">
						 <div class="shadow-lg p-3 mb-5 bg-white roundedshadow down">
          
            <h5 class="card-title text-center myfont">Sign In</h5>
            <form class="form-signin" onSubmit={this.handleSubmit}>
                {
                    !this.state.formState.isFormValid &&
                    <div className="alert alert-danger"> Please fill all Fields and try again .</div>
                }
              <div class="form-label-group">
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
  							       placeholder="Email address"/>
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
  							       placeholder="Password"/>
						</div>
              <button class="btn btn-lg btn-primary btn-block  btn-circle text-uppercase" type="submit">Sign in</button>
              <hr class="my-4"/>
              <button class="btn btn-lg btn-google  btn-block text-uppercase" type="submit"><i class="fab fa-google mr-2"></i> Sign in with Google</button>
   
           </div>
            </form>
          
        </div>
					</div>
				</div>		
			</div>

        );
    }

}