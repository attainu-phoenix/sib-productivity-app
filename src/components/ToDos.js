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
        this.id = "";
        this.modal = React.createRef();
        this.toDoTextInput = React.createRef();
        this.toDoId = React.createRef();
        this.delete = this.delete.bind(this);
        this.keyCount = 0;
        this.getKey = this.getKey.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChange = this.onChange.bind(this);
        this.toggle = this.toggle.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            modal: false,
            selectedDate: moment().toDate(),
            selectedTodoId: "",
            toDo: "",
            toDoDescription: "",
            toDoNote: "",
            objectId: "",
            toDoDueDate: "",
            isNewDateSelected: false,
            isSomeFieldChanged: false
        }
    }


    getKey() {
        return this.keyCount++;
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    getModalId() {
        return this.id;
    }

    openModal(toDo, e) {
        this.id = toDo.objectId;
        let $ = window.$;
        let modal = this.modal.current;
        $(modal).modal("show");
        this.setState({
            objectId: toDo.objectId,
            toDo: toDo.todotext,
            toDoDescription: toDo.tododescription,
            toDoNote: toDo.notes,
            toDoDueDate: toDo.duedate
        })
        $(modal).on('shown.bs.modal', function (e) {
        })


    }
    closeModal() {

        let $ = window.$;
        let modal = this.modal.current;
        let context = this;
        $(modal).modal('hide')
        $(modal).on('hidden.bs.modal', function (e) {
            context.setState({
                toDo: "",
                objectId: "",
                toDoDescription: "",
                toDoNote: "",
                toDoDueDate: ""


            })
        })
    }

    delete(todoId, e) {
        let data = {
            todoID: todoId,
            categoryID: this.props.currentCategoryData.objectId
        }
        store.dispatch({
            type: "DELETE_TODO",
            payLoadData: data

        })
    }

    onChange(event) {
      
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value,
            isSomeFieldChanged: true
        })
    }


    updateTodo(objectId) {

        let data = {
            categoryID: this.props.currentCategoryData.objectId,
            objectId: objectId,
            updatedToDo: this.state.toDo,
            updatedDescription: this.state.toDoDescription,
            updatedNotes: this.state.toDoNote,
            updateDate: this.state.selectedDate.toString()

        }
        let $ = window.$;
        let modal = this.modal.current;
        $(modal).modal("hide");
        $('.modal-backdrop').remove();

        if (!this.state.isSomeFieldChanged && !this.state.isNewDateSelected) {
            return;
        }
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
        store.dispatch({
            type: 'UPDATE_TODO_STATUS',
            payLoadData: toDoStatus
        })
    }
    onChangeDate(date) {
        this.setState({
            selectedDate: moment(date).toDate(),
            isNewDateSelected: true
        })
    }

    renderToDos() {


        return this.props.toDos.map((t) => {

            return (
                <div key={this.getKey()} className="row justify-content-start align-items-center border  bg-light" style={style.categoryContainer}>

                    <div className="col-md-1">
                        <input type="checkbox" aria-label="Checkbox for following text input" checked={t.status} value={t.status}
                            onChange={this.onChangeCheckBox.bind(this, t.objectId)} name="isCheck"
                        />
                    </div>
                    <div className="col-md-8">
                        <Link to="#" style={style.link}>{t.todotext}</Link>
                    </div>

                    <div className="col-md-1 offset-md-2">
                        <div className="row justify-content-around">
                            <a href="#/" style={style.link} data-target={"#" + t.objectId} onClick={this.openModal.bind(this, t)} data-toggle="modal">  <span className="oi oi-pencil "></span></a>
                            <a href="#/" style={style.link}><span className="oi oi-trash" name={t.objectId} onClick={this.delete.bind(this, t.objectId)} defaultValue={t.objectId}></span></a>
                        </div>
                    </div>

                </div>
            )
        })
    }
    render() {
        console.log(this.state.toDo);

        return (

            <div className="card" style={style.card}>
                <div className="card-body">

                    {this.renderToDos()}
                    <div ref={this.modal} className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header" style={CalendarStyles.modalHeadeBackgroundColor}>
                                    <h5 className="modal-title" id="exampleModalCenterTitle">Update ToDo</h5>
                                    <a href="#/" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </a>
                                </div>
                                <div className="modal-body">
                                    <input className="form-control" type="text" value={this.state.toDo} name="toDo" onChange={this.onChange} /><br></br>
                                    <input className="form-control" type="text" value={this.state.toDoDescription} name="toDoDescription" onChange={this.onChange} /><br></br>
                                    <input className="form-control" type="text" value={this.state.toDoNote} name="toDoNote" onChange={this.onChange} /><br></br>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon3">{moment(this.state.toDoDueDate).format(' MMMM Do YYYY, h:mm:ss a')}</span>
                                        </div>
                                        <DatePicker
                                            className="form-control"
                                            selected={this.state.selectedDate}
                                            onChange={this.onChangeDate}
                                            showTimeSelect={true}
                                            timeFormat="HH:mm"
                                            timeIntervals={15}
                                            dateFormat="MMMM d, yyyy h:mm aa"
                                            timeCaption="time"
                                            placeholderText="Update Date"
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.closeModal}>Close</button>
                                    <button type="button" className="btn btn-light border" onClick={this.updateTodo.bind(this, this.state.objectId)}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
let ToDos = connect(stateMapper)(ToDosComponent);
export default ToDos;