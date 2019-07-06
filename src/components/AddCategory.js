import React from 'react';
import ListCategory from './ListCategory.js';
import { connect } from 'react-redux'
import { stateMapper, store } from '../store/store.js'
import './list.css';

const style = {
    buttonColor: {
        color: 'white'
    }
}

class AddCategoryComponent extends React.Component {

    constructor(props) {
        super(props);
        // UniqueId.enableUniqueIds(this);
        this.onChange = this.onChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.categoryID = 0;
        this.state = {
            id: "",
            name: "",
            formState: {
                isFormValid: true,
                isNameValid: true
            }
        };
    }
    componentDidMount() {
        store.dispatch({
            type: "FETCH_CATEGORES"
        })
    }
    categoryName = (event) => {
        this.setState({
            categoryName: event.target.value
        });
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
            isNameValid: true
        }

        if (!this.state.name) {
            newFormState.isFormValid = false
            newFormState.isNameValid = false
        }
        console.log(newFormState)
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

        store.dispatch({

            type: "ADD_CATEGORIES",
            categoryName: this.state.name
        })

    }

    addCategory = () => {

        this.id = this.categoryID + 1;
        const copyCategories = Object.assign([], this.state.categories);
        copyCategories.push({
            id: this.categoryID,
            name: this.state.categoryName
        })

        this.setState({
            categories: copyCategories
        })

        if (this.categoryName === "") {
            alert("please!");
        }

    }

    deleteCategory = (index, e) => {
        const categories = Object.assign([], this.state.categories);
        categories.splice(index, 1);
        this.setState({
            categories: categories
        })
    }


    render() {
        return (
            <div>
                <h6>Category </h6>
                <form onSubmit={this.handleFormSubmit}>
                    {/* 
                    <div className="form-row">
                        <div className="col-6">
                            <input type="text" className="form-control" onChange={this.categoryName}></input>
                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <div className="col">
                            <button type="button" onClick={this.addCategory} className="btn btn-secondary">
                                <span className="oi oi-plus"></span>
                            </button>
                        </div>
                    </div> */}

                    <div className="input-group mb-3">
                        <input type="text" name="name" className={`form-control ${!this.state.formState.isNameValid && 'is-invalid'}`} onChange={this.onChange} placeholder="Enter Categories" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-danger" type="submit" style={style.buttonColor} id="button-addon2">Add</button>
                        </div>
                    </div>


                </form>
                {/* 
                    <ul className="list-group list-group-flush">
                        {
                            this.state.categories.map((category, index) => {

                                return (
                                    <ListComponent
                                        key={category.id}
                                        id={category.id}
                                        name={category.name}
                                        delete={this.deleteCategory}

                                    />
                                );

                            })
                        }
                    </ul> */}
                    <ListCategory/>
            </div>



        );

    }
}

let AddCategory = connect(stateMapper)(AddCategoryComponent)
export default AddCategory;
