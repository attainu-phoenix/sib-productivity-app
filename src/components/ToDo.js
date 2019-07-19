import React from 'react';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux'
import { stateMapper, store } from '../store/store.js'
import moment from 'moment'

const style = {
    card: {
        border: '0px',

    },
    link: {
        color: 'black',
        textDecoration: 'none',
    },
    categoryContainer: {
        height: '55px'
    }

}
class ToDoComponent extends React.Component {

    constructor(props){
        super(props)
        this.state={
                
        }
    }

    componentDidMount() {
        // console.log("FETCH_TODOS called in componentDidMount in Addtodos")

        let TODOID = this.props.match.params.todoID;
        
        store.dispatch({
            type: "FETCH_TODO_DATA",
            payLoadData: TODOID
        })

       
    }


    render() {
                

        return (
            <div>
                <h4>To Do</h4><br />
                <form onSubmit={this.handleFormSubmit}>
                    <div className="input-group mb-3">
                        <input type="text" name="toDo" className="form-control" onChange={this.onChange}  />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" onChange={this.onChange} name="description" />

                    </div>
                    <div className="input-group mb-3">
                        <DatePicker
                            className="form-control"
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                            // onSelect={this.props.onSelectDay}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            dateFormat="MMMM d, yyyy h:mm aa"
                            timeCaption="time"

                        />
                    </div>
                    <div className="row justify-content-center">
                        <button type="submit" className="btn btn-danger">Save</button>
                    </div>

                </form>

                

            </div>
        )
    }
}
let ToDo = connect(stateMapper)(ToDoComponent)
export default ToDo;