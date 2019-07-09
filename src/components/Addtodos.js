import React from 'react';
import { connect } from 'react-redux'
import { stateMapper, store } from '../store/store.js'
import ToDos from './ToDos.js'

const style = {
    buttonColor: {
        color: 'white'
    }
}
class AddTodoComponent extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            toDo: "",
            description:"",
            formState: {
                isFormValid: true,
                isToDoValid: true
            }
        }
    }

    componentDidMount() {
        console.log("FETCH_TODOS called in componentDidMount in Addtodos")

        let categoryName = this.props.match.params.categoryName;
        store.dispatch({
            type: "FETCH_TODOS_OF_CATEGORY",
            payLoadData: categoryName
        })
    }

    onChange(event) {

        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]: value
        })
    }

    validateForm() {
        let newFormState = {
            isFormValid: true,
            isToDoValid: true
        }

        if (!this.state.toDo) {
            newFormState.isFormValid = false;
            newFormState.isToDoValid = false;
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
            categoryName: this.props.match.params.categoryName,
            description:this.state.description
        }
        store.dispatch({

            type: "ADD_TODO",
            payLoadData: toDoData
        })
    }


    render() {
        let categoryName = this.props.match.params.categoryName

        return (
            <div>
                <h4>{`To Dos In ${categoryName}`}</h4><br />
                <form onSubmit={this.handleFormSubmit}>
                    <div className="input-group mb-3">
                        <input type="text" name="toDo" className={`form-control ${!this.state.formState.isToDoValid && 'is-invalid'}`} onChange={this.onChange} placeholder={`Enter ToDos In ${categoryName}`} aria-label="Recipient's username" aria-describedby="button-addon2" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" name="description" placeholder="Enter Description" />

                    </div>
                    <div className="input-group mb-3">
                        <input className="form-control" type="date" name="date" placeholder="Enter Date" />
                    </div>
                    <div className="row justify-content-center">
                        <button className="btn btn-danger">Add</button>
                    </div>

                </form>

                <ToDos />

            </div>




        );
    }
}
let AddToDo = connect(stateMapper)(AddTodoComponent);
export default AddToDo