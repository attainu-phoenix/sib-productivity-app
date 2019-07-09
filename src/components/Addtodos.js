import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header.js'
import Menu from './Menu.js';
import AddCategoryComponent from './AddCategory.js';

const style = {

    container: {
        marginTop: '10%'
    }
}

class AddTodoComponent extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <div className="col-md-9">
                    
                            <h6>Category Name</h6>
                            
                                <input type="text" className="form-cntrol"></input>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                       </input>
                                        <label class="form-check-label" for="exampleCheck1">Todo 1</label>
                                </div>
                               


                                <Link to="/app/addToDo" className="btn btn-danger" role="button">Add Todo</Link>&nbsp;
                            <Link to="/app/addToDo" className="btn btn-danger" role="button">View Todo</Link>&nbsp;
                            <Link to="/app/addToDo" className="btn btn-danger" role="button">Delete Todo</Link>&nbsp;
        
                            
    
                        </div>
                </div>
                );
            }
        }
export default AddTodoComponent;