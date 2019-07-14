import React from 'react';
import Header from '../components/Header.js'
import Menu from './Menu.js'
import { Route } from 'react-router-dom'
import Calendar from '../components/Calendar.js'
import AddToDo from '../components/AddToDo.js'
import { Provider } from 'react-redux'
import { store } from '../store/store.js'
import Toast from '../components/Toast.js'

const style = {

    container: {
        marginTop: '10%'
    }
}

class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <div>
                    <Header />
                   
                    <div className="container" style={style.container}>
                    <Toast/>
                
                        <div className="row">
                            <div className="col-md-3">
                                <Menu />
                            </div>
                            <div className="col-md-9">
                                <div className="card">
                                    <div className="card-body">
                                        <Route path="/app/addToDo" component={AddToDo} />
                                        <Route path="/app/calendar" component={Calendar} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Provider>

        )
    }
}

export default App;