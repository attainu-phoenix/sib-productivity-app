import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import CalendarStyles from '../styles/CalendarStyles';
import DatePicker from 'react-datepicker';

import { stateMapper, store } from '../store/store.js'
import moment from 'moment';

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

class ToDosComponent extends React.Component {

    constructor(props) {
        super(props)
        this.modal = React.createRef();
        this.delete = this.delete.bind(this);
        this.keyCount = 0;
        this.getKey = this.getKey.bind(this);
        // this.onChangeTodo = this.onChangeTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            updatedToDo: "Samsung Mobile updated",
            updatedDescription: "Samsung Mobile updated",
            date: moment().toDate(),
            updatedNotes: "Samsung Galaxy Note updated"
        }
    }


    getKey() {
        return this.keyCount++;
    }

    delete(todoId, e) {
        console.log(todoId);
        let data = {
            todoID: todoId,
            categoryID: this.props.currentCategoryData.objectId
        }
        console.log("TODOS DELETE =>", data);
        store.dispatch({
            type: "DELETE_TODO",
            payLoadData: data

        })
    }

    onChange(event) {
        console.log("came inside onChange..")
        let name = event.target.name;
        let value = event.target.value;
        // let $ = window.$;
        // let modal = this.modal.current;
        // let modalId = `#${modal.id}`


        console.log("Name :", name + " Value :", value);

    }


    updateTodo() {

        let data = {
            categoryID: this.props.currentCategoryData.objectId,
            objectId: 'ff4kOMwhRk',
            updatedToDo: this.state.updatedToDo,
            updatedDescription: this.state.updatedDescription,
            updatedNotes: this.state.updatedNotes
        }
        let $ = window.$;
        let modal = this.modal.current;
        $(modal).modal("hide");
        $('.modal-backdrop').remove();



        store.dispatch({
            type: "UPDATE_TODO",
            payLoadData: data
        })
    }

    onChangeCheckBox(id, e) {
        let toDoStatus = {
            categoryID: this.props.currentCategoryData.objectId,
            objectId: id,
            status: e.target.checked
        }

        console.log(toDoStatus)
        store.dispatch({
            type: 'UPDATE_TODO_STATUS',
            payLoadData: toDoStatus
        })
    }
    onChangeDate(date) {
        console.log("onChangeDate is called ...")
    }

    renderToDos() {
        let context = this;

        return this.props.toDos.map((t) => {

            return (
                <div key={this.getKey()} className="row justify-content-start align-items-center border  bg-light" style={style.categoryContainer}>
                    {/* <h4>Dummy Element</h4> */}
                    <div className="col-md-1">
                        <input type="checkbox" aria-label="Checkbox for following text input" checked={t.status} value={t.status}
                            onChange={this.onChangeCheckBox.bind(this, t.objectId)} name="isCheck"
                        />
                    </div>
                    <div className="col-md-8">
                        <Link to={`/app/toDo/${t.objectId}`} style={style.link}>{t.todotext}</Link>
                    </div>

                    <div className="col-md-1 offset-md-2">
                        <div className="row justify-content-around">
                            <a href="#/" style={style.link} data-target={"#" + t.objectId} data-toggle="modal" data-backdrop="static" data-keyboard="false">  <span className="oi oi-pencil "></span></a>
                            <span className="oi oi-trash" name={t.objectId} onClick={this.delete.bind(this, t.objectId)} defaultValue={t.objectId}></span>
                        </div>
                    </div>
                    <div ref={this.modal} className="modal fade " id={t.objectId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header" style={CalendarStyles.modalHeadeBackgroundColor}>
                                    <h5 className="modal-title" id="exampleModalCenterTitle">Update ToDo</h5>
                                    <a href="#/" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </a>
                                </div>
                                <div className="modal-body">
                                    <input className="form-control" type="text" name="updatedToDo" onChange={context.onChange} value={t.todotext} />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-light border" onClick={context.updateTodo}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )
        })
    }
    render() {
        return (

            <div className="card" style={style.card}>
                <div className="card-body">

                    {this.renderToDos()}
                </div>
            </div>
        )
    }
}
let ToDos = connect(stateMapper)(ToDosComponent);
export default ToDos;