import React from 'react'

class Menu extends React.Component {

    render() {
        return (
            <ul className="list-group">
                <li className="list-group-item "><span class="oi oi-plus">  Add Categories</span></li>
                <li className="list-group-item "><span class="oi oi-task">  Add Todos</span></li>
                <li className="list-group-item"><span class="oi oi-calendar">  Calender</span></li>
               
            </ul>
        )
    }
}

export default Menu;