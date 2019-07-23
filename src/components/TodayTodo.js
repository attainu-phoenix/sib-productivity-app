import React from 'react';
import { stateMapper, store } from '../store/store.js'
import { connect } from 'react-redux'


class TodayTodoComponent extends React.Component {

    constructor(props) {
        super(props);
        this.keyCount = 0;
        this.getKey = this.getKey.bind(this);
        this.onChangeCheckBox = this.onChangeCheckBox.bind(this);
    }

    getKey() {
        return this.keyCount++;
    }
    componentDidMount() {
        console.log("TodayTodo Component Mounted ..")
        store.dispatch({
            type: 'FETCH_All_TODOS_OF_USER',
            userId: 'MDXxlbAHcn'
        })
    }
    onChangeCheckBox(toDo) {

    }

    render() {
        return (
          <h2>Today Todo</h2>
        )
    }
}
let TodayTodo = connect(stateMapper)(TodayTodoComponent);
export default TodayTodo;