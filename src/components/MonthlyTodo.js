import React from 'react'
import { stateMapper} from '../store/store.js'
import { connect } from 'react-redux'

class MonthlyTodoComponent extends React.Component{
    render(){
        return(
            <h1>MonthlyTodo</h1>
        )
    }
}
let MonthlyTodo = connect(stateMapper)(MonthlyTodoComponent)
export default MonthlyTodo;