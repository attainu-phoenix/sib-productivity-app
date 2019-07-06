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

class ListCategoryComponent extends React.Component {


    constructor(props) {
        super(props)

        this.delete = this.delete.bind(this);
    }


    delete(name, e) {
        // console.log(name)
        store.dispatch({
            type: "DELETE_CATEGORY",
            categoryName: name
        })
    }

    renderCatergories() {
        return this.props.categories.map((c) => {
            return (

                <div key={c} className="row justify-content-between align-items-center border  bg-light" style={style.categoryContainer}>
                    {/* <h4>Dummy Element</h4> */}
                    <div className="col-md-8">
                        <Link to={`/app/addToDo`} style={style.link}>{c}</Link>
                    </div>
                    <div className="col-md-1">
                        <span className="oi oi-trash" name={c} onClick={this.delete.bind(this, c)} defaultValue={c}></span>
                    </div>
                </div>
            )
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

let ListCategory = connect(stateMapper)(ListCategoryComponent)
export default ListCategory;                      