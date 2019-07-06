import React from 'react';

import Header from '../components/Header.js'

// const style = {

//     container: {
//         marginTop: '10%'
//     }
// }

class AddTodoComponent extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <div className="col-md-9">
                    <div className="card">
                        <div className="card-body">
                            <h6>Category Name</h6>
                            

                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                       </input>
                                        <label class="form-check-label" for="exampleCheck1">Todo 1</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                       </input>
                                        <label class="form-check-label" for="exampleCheck1">Todo 2</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                       </input>
                                        <label class="form-check-label" for="exampleCheck1">Todo 3</label>
                                </div>
                            
                            
                        



                                <a href="/app/todos" className="btn btn-secondary" role="button">Add Todo</a>&nbsp;
                            <a href="/app/todos" className="btn btn-secondary" role="button">View Todo</a>&nbsp;
                            <a href="/app/todos" className="btn btn-secondary" role="button">Go to Todo</a>&nbsp;
        
                            
    
                        </div>

                        </div>
                    </div>


                </div>
                );
            }
        }
export default AddTodoComponent;