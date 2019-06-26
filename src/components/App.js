import React from 'react';
import Menu from './Menu.js'



class App extends React.Component {

    render() {
        return (
            <div>
                <h1>Header Will Come Here</h1>

                <div className="container">
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