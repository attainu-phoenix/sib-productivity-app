import React from 'react';
import Header from '../components/Header.js'
import Menu from './Menu.js'
import { Route } from 'react-router-dom'
import Calendar from '../components/Calendar.js'
import AddToDo from '../components/Addtodos'
import ToDo from '../components/ToDo'
import { Provider } from 'react-redux'
import { store } from '../store/store.js'
import Logout from './Logout.js';
import AddCategoryComponent from './AddCategory.js';
import CategoryListComponent from './CategoryList.js';
import Toast from './Toast'
const style = {

    container: {
        marginTop: '10%'
    }
}

class App extends React.Component {

    render() {
        return (
            <div>

                <Header />
                <Provider store={store}>
                    <div>
                        <Header />
                        <div className="container" style={style.container}>
                            <Toast />
                            <div className="row">
                                <div className="col-md-3">
                                    <Menu />
                                </div>
                                <div className="col-md-9">
                                    <div className="card">
                                        <div className="card-body">
                                            <Route path="/app" exact={true} component={AddCategoryComponent} />
                                            <Route path="/app/listofcat" component={CategoryListComponent} />
                                            <Route path="/app/toDo/:todoID" component={ToDo} />
                                            <Route path="/app/addToDo/:categoryID" component={AddToDo} />
                                            <Route path="/app/calendar" component={Calendar} />
                                            <Route path="/app/logout" component={Logout} />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Provider>
            </div>

        );




    }
}

export default App;