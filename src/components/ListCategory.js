import React from 'react';
import AddCategoryComponent from './AddCategory.js';
import './list.css';
import { Link } from 'react-router-dom';


class ListComponent extends React.Component {

    render() {
        return (
            <div>
                <li className="list-group-item"> {this.props.name}
                     {/* {this.props.id} */}
                   


                    <button className="btn btn-secondary right" onClick={this.props.delete}
                        type="button"><span className="oi oi-delete right"></span></button>
            
                        </li>
            </div>
        );
    }

}

export default ListComponent;                      