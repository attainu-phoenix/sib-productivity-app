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
        this.delete = this.delete.bind(this);
        this.keyCount = 0;
        this.getKey = this.getKey.bind(this);
        this.onChangeTodo =this.onChangeTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.state = {
            toDo: "",
            description: "",
            date: moment().toDate(),
            notes:""
         }   
    }


    getKey() {
        return this.keyCount++;
    }

    delete(todoId, e) {
         console.log(todoId);
         let data = {
             todoID:todoId,
             categoryID:this.props.currentCategoryData.objectId
                     }
                     console.log("TODOS DELETE =>",data);
        store.dispatch({
            type: "DELETE_TODO",
           payLoadData : data

        })
    }

    onChangeTodo(event){
   /*   let name = event.target.name;
      let value = event.target.value;
        this.setState({
            [name]: value
        })

        console.log("FROM TODO.jS", this.state);*/

         let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]: value
        })
       console.log(name,value);

                   }
    updateTodo(){}
    onChangeDate(){}

    renderToDos() {
                       console.log("TODOS COMP =>",this.props.toDos);
        return this.props.toDos.map((t) => {

            return (
                <div key={this.getKey()} className="row justify-content-start align-items-center border  bg-light" style={style.categoryContainer}>
                    {/* <h4>Dummy Element</h4> */}
                    <div className="col-md-1">
                        <input type="checkbox" aria-label="Checkbox for following text input"
                            name="isCheck" 
                        />
                    </div>
                    <div className="col-md-8">
                        <Link to={`/app/toDo/${t.objectId}`} style={style.link}>{t.todotext}</Link>
                    </div>
            
                    <div className="col-md-1 offset-md-2">
                     <div className="row justify-content-around">
                       <a href="#/" style={style.link} data-target={"#" + t.objectId} data-toggle="modal">  <span className="oi oi-pencil "></span></a>
                        <span className="oi oi-trash" name={t.objectId} onClick={this.delete.bind(this, t.objectId)} defaultValue={t.objectId}></span>
                     </div>
                        
                    </div>
                     <div  className="modal fade" id={t.objectId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header" style={CalendarStyles.modalHeadeBackgroundColor}>
                                    <h5 className="modal-title" id="exampleModalCenterTitle">Update Todo</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    
                                    <div className="input-group mb-3">
                        <input type="text" name="toDo" className="form-control" onChange={this.onChangeTodo} defaultValue={t.todotext}  />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" onChange={this.onChangeTodo} name="description" defaultValue={t.tododescription} />

                    </div>

                    <div className="input-group mb-3">
                        <DatePicker
                            className="form-control"
                            selected={moment(t.duedate).toDate()}
                            onChange={this.onChangeDate}
                            // onSelect={this.props.onSelectDay}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            dateFormat="MMMM d, yyyy h:mm aa"
                            timeCaption="time"

                        />
                    </div>
                    <div className="form-group">
  
    <textarea className="form-control" onChange={this.onChangeTodo} defaultValue={t.notes} name="notes" rows="3"></textarea>
  </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" onClick={this.updateTodo.bind(this, t)} className="btn btn-light border">Save</button>
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