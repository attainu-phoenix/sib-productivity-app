import React from 'react';
import Header from '../components/Header.js'
import Menu from './Menu.js';
import {Route } from 'react-router-dom';
import AddtodoComponent from './Addtodos.js';

import AddCategoryComponent from './AddCategory.js';
import CategoryListComponent from './CategoryList.js';
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
                            {/* <AddCategoryComponent /> */}
                            <Route path="/app/todos" component={AddtodoComponent} />  
                             <Route path="/app/categories" component={AddCategoryComponent} />
                             <Route path="/app/listofcat" component={CategoryListComponent} />     
                                </div>
                            </div>
                        </div>
                    </div>
        );
    }
}

export default App;