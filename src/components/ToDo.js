import React from 'react'
import { stateMapper, store } from '../store/store.js'
import { connect } from 'react-redux'
import TodayTodo from './TodayTodo'
import MonthlyTodo from './MonthlyTodo'


class ToDoComponent extends React.Component {


   
    render() {
        return (
            <div>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Today</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Monthly</a>
                    </li>

                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><TodayTodo /></div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><MonthlyTodo /></div>

                </div>
            </div>
        )
    }
}
let ToDo = connect(stateMapper)(ToDoComponent);
export default ToDo;