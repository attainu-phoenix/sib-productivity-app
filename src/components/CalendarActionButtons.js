import React from 'react';
import CalendarStyles from '../styles/CalendarStyles.js'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class CalendarActionButtons extends React.Component {


    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this);
        this.addEventModal = React.createRef();
        this.addButtonClicked = this.addButtonClicked.bind(this);
        this.state = {
            date: new Date(),
        }

    }

    onChange(date) {

        
    }

    addButtonClicked(){
        let $ = window.$;
        let modal = this.addEventModal.current;
        $(modal).modal("hide");
    }

    render() {
        return (
            <div className="row justify-content-around">
                {/* <input type="text" className="form-control"/> */}
                {/* <div className="btn-group">
                    <select className="custom-select my-1 mr-sm-2 btn btn-light" onChange={this.props.onChangeSelect} id="inlineFormCustomSelectPref">
                        <option defaultValue>Events</option>
                        <option value="ToDos">ToDos</option>

                    </select>
                </div> */}
                <p></p>
                <p></p>
                <p></p>
                <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#exampleModalCenter">Add Event</button>

                <div ref={this.addEventModal} className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header" style={CalendarStyles.modalHeadeBackgroundColor}>
                                <h5 className="modal-title" id="exampleModalCenterTitle">Enter Events Details</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" style={CalendarStyles.closeIcon}>&times;</span>
                                </button>
                            </div>
                            <form  onSubmit={this.props.handelSubmitAddEventForm} id="addEventForm">
                            <div className="modal-body">
                                
                                <input type="text" name="title"  className={this.props.classNameEventTitle} placeholder="Enter Event"
                                    onChange={this.props.onChangeAddEventTitle} /><br />
                                <input type="text" name="description"  className={this.props.classNameEventDescription} placeholder="Enter Description"
                                    onChange={this.props.onChangeAddEventDescriptionField} /><br />
                                <div>
                                    <DatePicker
                                        selected={this.props.addEventSelectedDate}
                                        onChange={this.props.onChangeAddEventDate}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={15}
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        timeCaption="time"

                                    />
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary border" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-danger border"  onClick={this.addButtonClicked}>Add</button>
                                
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default CalendarActionButtons;