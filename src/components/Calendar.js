import React from 'react'
import CalendarStyles from '../styles/CalendarStyles.js'
import './Calendar.css'
import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'

class Calendar extends React.Component {

    constructor(props) {
        super(props)
        this.months = this.months.bind(this);



    }

    months() {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return months.map(m => {
            return (
                <option className="dropdown-item" key={m} value={m}>{m}</option>
            )
        })
    }
    
    popOverContent() {
        return (
            <div>

                <a className="nav-item nav-link" href="/#">Logout</a>
                <a className="nav-item nav-link" href="/#">Setting</a>
            </div>
        )
    }

    render() {

        let monthsDropdown = this.months();

        return (
            <div>
                <h5>Calendar</h5>
                <hr />
                <div className="row justify-content-around align-items-center">

                    <button type="button" className="btn btn-light border">Today</button>
                    <div className="col-md-2">
                        <div className="row justify-content-between align-items-start">
                            <span className="oi oi-chevron-left"></span>
                            <h5>June 2019</h5>
                            <span className="oi oi-chevron-right"></span>
                        </div>
                    </div>

                    <div className="btn-group">
                        <select className="custom-select my-1 mr-sm-2 btn btn-light" id="inlineFormCustomSelectPref">
                            <option defaultValue>Months</option>
                            {monthsDropdown}
                        </select>
                    </div>
                </div>
                <hr />
                <div className="row justify-content-around">
                    {/* <input type="text" className="form-control"/> */}
                    <div className="btn-group">
                        <select className="custom-select my-1 mr-sm-2 btn btn-light" id="inlineFormCustomSelectPref">
                            <option defaultValue>Events</option>
                            <option defaultValue>ToDos</option>
                            
                        </select>
                    </div>
                    <p></p>
                    <p></p>
                    <p></p>
                    <button type="button" class="btn btn-danger" style={CalendarStyles.marginRight} data-toggle="modal" data-target="#exampleModalCenter">Add Event</button>
                    

                </div>
                <p></p>
                <div className="card" style={CalendarStyles.card}>
                    <div className="card-body">
                        <div className="row justify-content-between align-items-center border  bg-light ">
                            <div className="col-md-1">
                                <input type="checkbox" aria-label="Checkbox for following text input" />
                            </div>
                            <div className="col-md-8">
                                <p style={CalendarStyles.content}>Event will come here Event will come here Event will come here Event will come here Event will come here</p>
                            </div>

                            <span>28 June</span>

                            <span id="calenderPopover" class="oi oi-calendar"></span>
                            <UncontrolledPopover trigger="legacy" placement="bottom" target="calenderPopover">
                                <PopoverHeader>Schedule</PopoverHeader>
                                <PopoverBody>
                                    <div id="popover_content">
                                        <div>
                                            {/* <a className="nav-item nav-link" href="/#">Delete</a>
                                            <a className="nav-item nav-link" href="/#">Edit</a> */}
                                            <input type="date" className="form-control" />
                                        </div>
                                    </div>
                                </PopoverBody>
                            </UncontrolledPopover>

                            <div className="col-md-1" id="popover">
                                <span id="optionPopover" className="oi oi-ellipses">

                                </span>
                                <UncontrolledPopover trigger="legacy" placement="bottom" target="optionPopover">
                                    <PopoverHeader>Options</PopoverHeader>
                                    <PopoverBody>
                                        <div id="popover_content">
                                            <div>
                                                <a className="nav-item nav-link" href="/#">Delete</a>
                                                <a className="nav-item nav-link" href="/#">Edit</a>
                                            </div>
                                        </div>
                                    </PopoverBody>
                                </UncontrolledPopover>
                            </div>
                        </div>


                    </div>
                </div>

                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header" style={CalendarStyles.modalHeadeBackgroundColor}>
                                <h5 class="modal-title" id="exampleModalCenterTitle">Enter Events Details</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <input type="text" className="form-control" placeholder="Enter Event" /><br />
                                <input type="date" className="form-control" />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }

}

export default Calendar;