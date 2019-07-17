import React from 'react';
import Header from './Header'
import { Link } from 'react-router-dom';

const style = {
    container: {
        marginTop: '70%'
    },
    loginButton: {
        color: 'white',
        textDecoration: 'none'
    },
    link: {
        textDecoration: 'none',
        color: 'black',
        marginTop: '5px'
    }
}

class LandingPage extends React.Component {

    render() {
        return (
            <div>
                <Header />

                <div className="container-fluid" style={style.container}>
                    <div className="row justify-content-center">
                        <div className="col-7">
                            <div>
                                <button className="btn btn-lg btn-block btn-danger">
                                    <Link to="/app/login" style={style.loginButton}>Login</Link>
                                </button>
                            </div>

                            <div className="row justify-content-center">
                                
                                <span style={style.link}>No account ?</span>
                            </div>
                            <div className="row justify-content-center">
                                <Link to="#/" style={style.link}>Signup</Link>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

export default LandingPage;