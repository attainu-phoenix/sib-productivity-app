import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { stateMapper, store } from '../store/store.js'

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
                        <Link to={`/app/toDo/${t.todotext}`} style={style.link}>{t.todotext}</Link>
                    </div>

                    <div className="col-md-1 offset-md-2">
                        <span className="oi oi-trash" name={t.objectId} onClick={this.delete.bind(this, t.objectId)} defaultValue={t.objectId}></span>
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