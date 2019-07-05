import React from 'react';
import AddTodoComponent from './Addtodos.js';
import { BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';
class Menu extends React.Component {

    render() {
        return (
            
            <ul className="list-group">
              <Link to="/app/categories"> <li className="list-group-item list-group-item-action"><span className="oi oi-plus"> Categories</span></li></Link>
              <Link to="/app/listofcat"><li className="list-group-item list-group-item-action"><span className="oi oi-menu">  View Categories</span></li></Link>
              <Link to="/app/todos"><li className="list-group-item list-group-item-action"><span className="oi oi-task">  Todos</span></li></Link>
              <Link to=""><li className="list-group-item list-group-item-action"><span className="oi oi-calendar">  Calender</span></li></Link>
              
               
            </ul>
            
            
        )
    }
}

export default Menu;