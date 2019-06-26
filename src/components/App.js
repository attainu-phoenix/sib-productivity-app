import React from 'react';
import Header from '../components/Header.js'
import Menu from './Menu.js'

const style = {

    container:{
        marginTop:'10%'
    }
}

class App extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <div className="container" style={style.container}>
                    <div className="row">
                        <div className="col-md-3">
                            <Menu/>
                        </div>
                        <div className="col-md-9">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Component Will Come Here.</h1>
                                    <h1>Component Will Come Here.</h1>
                                    <h1>Component Will Come Here.</h1>
                                    <h1>Component Will Come Here.</h1>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        )
    }
}

export default App;