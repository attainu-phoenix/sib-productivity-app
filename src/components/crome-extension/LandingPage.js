import React from 'react';
import Header from './Header'

const style = {
    container: {
        marginTop: '70%'
    },
    link:{
        textDecoration:'none',
        color:'black',
        marginTop:'5px'
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
                                <button className="btn btn-lg btn-block btn-danger">Login</button>
                            </div>

                            <div className="row justify-content-center">
                                <a href="#/" style={style.link}>No account ? </a>
                            </div>
                            <div className="row justify-content-center">
                                <a href="#/" style={style.link}>Signup</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

export default LandingPage;