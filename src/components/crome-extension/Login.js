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

    

    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid" style={style.container}>
                    <div className="card">
                        <div className="card-body">
                            <form>
                                <div className="from-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" required className="form-control" placeholder="Email" />
                                </div>
                                <div className="from-group">
                                    <label for="exampleInputEmail1">Password</label>
                                    <input type="password" required className="form-control" placeholder="password" />
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