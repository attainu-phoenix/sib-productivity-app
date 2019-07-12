import React from 'react'
import Header from './Header'


const style = {
    container: {
        marginTop: '50%'
    },
    link: {
        textDecoration: 'none',
        color: 'black',
        marginTop: '5px'
    },
    toDoContainer: {
        height: '55px'
    }
}
class ToDoList extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            todos: ['ToDo_1', 'ToDo_2', 'ToDo_3', 'ToDo_4']
        }
    }

    renderToDos() {
        return this.state.todos.map((todo) => {
            return (
                <div className="row justify-content-between align-items-center border  bg-light" style={style.toDoContainer}>
                    {/* <h4>Dummy Element</h4> */}

                    <div className="col-1">
                        <input type="checkbox" aria-label="Checkbox for following text input"
                            name="isCheck" />
                    </div>

                    <div className="col-10">
                        <a href="#/" style={style.link}>{todo}</a>
                    </div>

                </div>
            )
        })
    }

    render() {
        return (

            <div>
                <Header />
                <div className="container-fluid" style={style.container}>
                    <div className="card">
                        <div className="card-body">
                            {this.renderToDos()}
                            <br></br>
                            <div className="row justify-content-center">
                               
                                <button className="btn btn-danger">View All</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ToDoList;