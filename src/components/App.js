import React from 'react';
import Header from '../components/Header.js'
import Menu from './Menu.js'
import { Route } from 'react-router-dom'
import Calendar from '../components/Calendar.js'
import AddTodoComponent from '../components/Addtodos'

import AddCategoryComponent from './AddCategory.js';
import CategoryListComponent from './CategoryList.js';
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
                <div className="container" style={style.container}>
                    <div className="row">
                        <div className="col-md-3">
                            <Menu />
                        </div>
                        <div className="col-md-9">
                            <div className="card">
                                
                                    <Route path="/app/addToDo" component={AddTodoComponent} />
                                    <Route path="/app" exact={true} component={AddCategoryComponent} />
                                     <Route path="/app/listofcat" component={CategoryListComponent} /> 
                                    

                                    <Route path="/app/calendar" component={Calendar} />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;