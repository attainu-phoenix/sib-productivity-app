import React from 'react';
import Header from './Header'


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

class Login extends React.Component {


    constructor(props){
        super(props);

       
        this.state={
            email:"",
            password:"",
            formState:{
                isEmailValid:true,
                isPasswordValid:true,
                isFormValid:true
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        let name= event.target.name;
        let value = event.target.value;

        this.setState({
            [name]:value
        })

        console.log("email :"+this.state.email+" password :"+this.state.password)
    }

    handleSubmit(event){
        event.preventDefault()
        console.log("handleSubmit called ..")
    }


    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid" style={style.container}>
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="from-group">
                                    <label htmlFor="exampleInputEmail1" >Email</label>
                                    <input type="email" name="email" onChange={this.handleChange} required className="form-control" placeholder="Email" />
                                </div>
                                <div className="from-group">
                                    <label htmlFor="exampleInputEmail1" >Password</label>
                                    <input type="password" name="password"  onChange={this.handleChange} required className="form-control" placeholder="password" />
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
}

export default Login 