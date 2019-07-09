import React from 'react';

import ListCategory from './ListCategory.js';
import { Link } from 'react-router-dom';
import Header from '../components/Header.js'
import Menu from './Menu.js';
import AddCategoryComponent from './AddCategory.js';



const style = {

    container: {
        marginTop: '10%'
    }
}

class CategoryListComponent extends React.Component {

   
    
    render() {
        return (
            <div>

                <Header />

                <div className="col-md-9">
                    <h6> Categories:</h6>
                    {
                         <ListCategory />

                    }
                    <Link to="/app/addToDo" className="btn btn-danger" role="button">Add Todo</Link>&nbsp;
                            <Link to="/app/addToDo" className="btn btn-danger" role="button">View Todo</Link>&nbsp;
                            <Link to="/app/addToDo" className="btn btn-danger" role="button">Delete Todo</Link>&nbsp;
                            </div>
            </div>

        );
    }
}
export default CategoryListComponent;