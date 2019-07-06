import React from 'react';
import Header from '../components/Header.js'

// const style = {

//     container: {
//         marginTop: '10%'
//     }
// }

class CategoryListComponent extends React.Component {

    render() {
        return (
            <div>

                <Header />

                <div className="col-md-9">
                    <div className="card">
                        <div className="card-body">
                            <form>
                            <h6> Categories:</h6>
                            <a href="/app/todos" className="btn btn-secondary" role="button">Add Todo</a>&nbsp;
                            <a href="/app/todos" className="btn btn-secondary" role="button">View Todo</a>&nbsp;
                            <a href="/app/todos" className="btn btn-secondary" role="button">Go to Todo</a>&nbsp;
    
                        </form>

                        </div>

                    </div>
                </div>
            </div>

        );
    }
}
export default CategoryListComponent;