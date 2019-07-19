import React from 'react';
import './list.css';
import { connect } from 'react-redux'
import { stateMapper, store } from '../store/store.js'
import { Link } from 'react-router-dom'
import CalendarStyles from '../styles/CalendarStyles';
import Spinner from './Spinner';
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


class ListComponent extends React.Component {


    constructor(props) {
        super(props);
        this.modal = React.createRef();
        this.state = {
            categoryName: ""
        };
        this.saveCategory = this.saveCategory.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.deleteCategory = this.deleteCategory.bind(this);
    }


    deleteCategory(objectId) {

        store.dispatch({
            type: "DELETE_CATEGORY",
            objectId: objectId
        })
        // console.log(objectId);
    }

    onChangeCategory(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        });

    }
    saveCategory(category, e) {
        let $ = window.$;
        let modal = this.modal.current;
        $(modal).modal("hide");
        $('.modal-backdrop').remove();
        let data = {
            objectId: category.objectId,
            categoryName: this.state.categoryName === "" ? category.categoryName : this.state.categoryName
        };
        store.dispatch({
            type: "UPDATE_CATEGORY",
            updatedCategory: data
        })


    }

    renderCatergories() {

        let context = this;
        return this.props.categories.map(function (c) {
            return (
                <div key={c.objectId} className="row justify-content-between align-items-center border  bg-light" style={style.categoryContainer}>
                    {/* <h4>Dummy Element</h4> */}
                    <div className="col-md-8">
                        <Link to={`/app/addToDo/${c.objectId}`} style={style.link}>{c.categoryName}</Link>
                    </div>
                    <div className="col-md-1">
                        <div className="row justify-content-around">
                            <a href="#/" style={style.link} data-target={"#" + c.objectId} data-toggle="modal">  <span className="oi oi-pencil "></span></a>
                            <a href="#/" style={style.link}> <span className="oi oi-trash" onClick={context.deleteCategory.bind(this, c.objectId)} ></span></a>
                        </div>
                    </div>
                    <div ref={context.modal} className="modal fade" id={c.objectId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true"> 
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header" style={CalendarStyles.modalHeadeBackgroundColor}>
                                    <h5 className="modal-title" id="exampleModalCenterTitle">Update category</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <input className="form-control" name="categoryName" onChange={context.onChangeCategory} type="text" defaultValue={c.categoryName} />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" onClick={context.saveCategory.bind(this, c)} className="btn btn-light border">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
    }
    render() {
        let categories;
        categories = this.props.isCategoryLoading ? <Spinner /> : this.renderCatergories()
        return (

            <div className="card" style={style.card}>
                <div className="card-body">
                    {categories}



                </div>
            </div>


        )

    }

}

let ListCategory = connect(stateMapper)(ListComponent)
export default ListCategory;

