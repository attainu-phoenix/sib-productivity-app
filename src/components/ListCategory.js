import React from 'react';
import './list.css';
import { connect } from 'react-redux'
import { stateMapper, store } from '../store/store.js'
import { Link } from 'react-router-dom'
import CalendarStyles from '../styles/CalendarStyles.js'

const style={
    card :{
        border:'0px',
        
    },
    link:{
        color:'black',
        textDecoration: 'none',
    },
    categoryContainer:{
        height:'55px'
    }

}


class ListComponent extends React.Component {


    constructor(props) {
        super(props)

        this.delete = this.delete.bind(this);
    }


    delete(objectId) {
        
        store.dispatch({
            type: "DELETE_CATEGORY",
            objectId: objectId
        })
        console.log(objectId);
    }

    renderCatergories() {
        console.log(this.props.categories);
        return this.props.categories.map(function(c) {
            return (
                <div key={c.objectId} className="row justify-content-between align-items-center border  bg-light" style={style.categoryContainer}>
                    {/* <h4>Dummy Element</h4> */}
                    <div className="col-md-8">
                        <Link to={`/app/addToDo`} style={style.link}>{c.categoryName}</Link>
                    </div>
                    <div className="col-md-1">
                        <span className="oi oi-trash" onClick={this.delete.bind(this,c.objectId)} ></span>
                    </div>
                </div>
            );
        })
    }
    render() {
        return (

            <div className="card" style={style.card}>
                <div className="card-body">
                    {this.renderCatergories()}
                    
                
                </div>
            </div>


        )

    }

}

let ListCategory = connect(stateMapper)(ListComponent)
export default ListCategory;

