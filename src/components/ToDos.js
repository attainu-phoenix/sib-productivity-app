import React  from 'react'
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

    constructor(props){
        super(props)
        this.delete = this.delete.bind(this);
        this.keyCount = 0;
        this.getKey = this.getKey.bind(this);
    }


    getKey() {
        return this.keyCount++;
    }

    delete(name, e) {
        // console.log(name)
        store.dispatch({
            type: "DELETE_TODO",
            toDoName: name
        })
    }

    renderToDos() {
        return this.props.toDos.map((t) => {
           
            return (
                <div key={this.getKey()} className="row justify-content-between align-items-center border  bg-light" style={style.categoryContainer}>
                    {/* <h4>Dummy Element</h4> */}
                    <div className="col-md-8">
                        <Link to={`/app/addToDo/${t.toDo}`} style={style.link}>{t.toDo}</Link>
                    </div>
                    
                    <div className="col-md-1">
                        <span className="oi oi-trash" name={t.toDo} onClick={this.delete.bind(this, t.toDo)} defaultValue={t.toDo}></span>
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