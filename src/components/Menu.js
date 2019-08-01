import React from 'react'
import { Link } from 'react-router-dom';
import MenuStyles from '../styles/MenuStyles.js'




class Menu extends React.Component {


    render() {
        return (

            <ul className="list-group">
                <li className="list-group-item">

                    <Link to="/app" style={MenuStyles.Link}>
                        <div className="row justify-content-around">
                            <div className="col">
                                <span className="oi oi-task" ></span>
                            </div>
                            <div className="col">
                                <span> Categories</span>
                            </div>

                        </div>

                    </Link>

                </li>
                <li className="list-group-item">

                    <Link to="/app/calendar" style={MenuStyles.Link}>
                        <div className="row jsutify-content-around">
                            <div className="col">
                                <span className="oi oi-calendar"> </span>
                            </div>
                            <div className="col">
                                <span> Calendar</span>
                            </div>
                        </div>
                    </Link>

                </li>

            </ul>


        )
    }
}

export default Menu;