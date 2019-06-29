import React from 'react'
import { Link } from 'react-router-dom';
import MenuStyles from '../styles/MenuStyles.js'



class Menu extends React.Component {



    render() {
        return (
            <ul className="list-group">
                <li className="list-group-item">

                    <Link to="/app" style={MenuStyles.Link}>
                        <span className="oi oi-task" >
                            Add Categories
                        </span>
                    </Link>

                </li>
                <li className="list-group-item ">

                    <Link to="/app/addToDo" style={MenuStyles.Link}>
                        <span className="oi oi-task">
                            Add Todo
                        </span>
                    </Link>

                </li>
                <li className="list-group-item">

                    <Link to="/app/calendar" style={MenuStyles.Link}>
                        <span className="oi oi-calendar">
                            Calendar
                        </span>
                    </Link>

                </li>

            </ul>
        )
    }
}

export default Menu;