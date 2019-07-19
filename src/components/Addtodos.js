import React from 'react';
import { connect } from 'react-redux'
import { stateMapper, store } from '../store/store.js'
import ToDos from './ToDos.js'
import DatePicker from 'react-datepicker';
import moment from 'moment'

// const style = {
//     buttonColor: {
//         color: 'white'
//     }
// }
class AddTodoComponent extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.state = {
            toDo: "",
            description: "",
            date: moment().toDate(),
            notes:"",
            formState: {
                isFormValid: true,
                isToDoValid: true,
                isDescriptionValid: true,
                isDateValid: true
            }
        }
    }

    componentDidMount() {
        // console.log("FETCH_TODOS called in componentDidMount in Addtodos")

        let categoryID = this.props.match.params.categoryID;
        console.log("CDM CAT ID", categoryID);
        store.dispatch({
            type: "FETCH_CATEGORY_DATA",
            payLoadData: categoryID
        })

        store.dispatch({
            type:"FETCH_TODOS_BY_CATEGORY_ID",
            payLoadData:categoryID
                        })
    }

    onChange(event) {

        let name = event.target.name
        let value = event.target.value

        this.setState({
            [name]: value
        })
    }
    onChangeDate(date) {
        this.setState({
            date: moment(date).toDate()
        });
    }

    validateForm() {
        let newFormState = {
            isFormValid: true,
            isToDoValid: true,
            isDescriptionValid: true,
        }

        if (!this.state.toDo) {
            newFormState.isFormValid = false;
            newFormState.isToDoValid = false;
        }
        if (!this.state.description) {
            // console.log("description is checked ")
            newFormState.isFormValid = false;
            newFormState.isDescriptionValid = false;
        }
        this.setState({
            formState: newFormState
        })
       
        return newFormState.isFormValid;
    }

    handleFormSubmit(event) {
        
        event.preventDefault();
        if (!this.validateForm()) {
            return;
        }

        let toDoData = {
            toDo: this.state.toDo,
            categoryID: this.props.currentCategoryData.objectId,
            description: this.state.description,
            date: this.state.date,
            notes:this.state.notes,
            status:false
        }
       // console.log(toDoData);
        store.dispatch({

            type: "ADD_TODO",
            payLoadData: toDoData
        })
    }


    render() {
        let categoryID = this.props.match.params.categoryID
        console.log("FROM ADD TODO",this.props.currentCategoryData);
         /*if(this.props.toDos.objectId){
            let sucess =  <div className="alert alert-success"> Todo Added Sucessfuly.</div>;                              
            return sucess;
        }*/
        return (
            <div>
                
                <h4>{`To Dos In ${this.props.currentCategoryData.categoryName}`}</h4><br />
                <form onSubmit={this.handleFormSubmit}>
                    <div className="input-group mb-3">
                        <input type="text" name="toDo" className={`form-control ${!this.state.formState.isToDoValid && 'is-invalid'}`} onChange={this.onChange} placeholder={`Enter ToDos In ${this.props.currentCategoryData.categoryName}`}  />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className={`form-control ${!this.state.formState.isDescriptionValid && 'is-invalid'}`} onChange={this.onChange} name="description" placeholder="Enter Description" />

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
                    <div className="form-group">
  
    <textarea className="form-control" onChange={this.onChange} placeholder="Enter Notes" name="notes" rows="3"></textarea>
  </div>
                    <div className="row justify-content-center">
                        <button type="submit" className="btn btn-danger">Add</button>
                    </div>

                </form>

                <ToDos />

            </div>




        );
    }
}
let AddToDo = connect(stateMapper)(AddTodoComponent);
export default AddToDo