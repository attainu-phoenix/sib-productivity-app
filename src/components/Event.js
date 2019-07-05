import React from 'react'
import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'
import CalendarStyles from '../styles/CalendarStyles.js'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import UniqueId from 'react-html-id';
class Event extends React.Component {

    constructor(props) {
        super(props)

        UniqueId.enableUniqueIds(this);
        this.state = {
            startDate: new Date(),
        }
    }



    render() {
        // let currentDate = new Date();
        // console.log(currentDate.getDate()+" "+currentDate.getMonth()+" "+currentDate.getFullYear())


        let optionPopoverId = this.nextUniqueId();
        let editModalId = this.nextUniqueId();
        let deleteModalId = this.nextUniqueId();



        return (
            <div className="row justify-content-between align-items-center border  bg-light ">
                <div className="col-md-1">
                    <input type="checkbox" aria-label="Checkbox for following text input"
                        name={this.props.eventTitle} checked={this.props.checked}
                        onChange={this.props.onClickCheckBox} key={this.props.eventTitle} />
                </div>
                <div className="col-md-8">
                    <p style={CalendarStyles.content}>{this.props.eventTitle}</p>
                </div>

                <span>{this.props.eventDate}</span>
                {/* 
                <span id="calenderPopover" className="oi oi-calendar"></span>
                <UncontrolledPopover trigger="legacy" placement="bottom" target="calenderPopover">
                    <PopoverHeader>Schedule</PopoverHeader>
                    <PopoverBody style={CalendarStyles.marginRight}>
                        <div id="popover_content" >
                            <div>
                                <DatePicker
                                    selected={this.props.scheduleEventStartDate}
                                    onChange={this.props.scheduleEvent}
                                    timeInputLabel="Time:"
                                    dateFormat="MM/dd/yyyy h:mm aa"
                                    showTimeInput

                                />
                            </div>
                        </div>
                    </PopoverBody>
                </UncontrolledPopover> */}

                <div className="col-md-1" id={this.nextUniqueId()} >
                    <span id={optionPopoverId} className="oi oi-ellipses">

                    </span>
                    <UncontrolledPopover trigger="legacy" placement="bottom" target={optionPopoverId}>
                        <PopoverHeader>Options</PopoverHeader>
                        <PopoverBody>
                            <div id="popover_content">
                                <div>

                                    <a className="nav-item nav-link" href="/#" style={CalendarStyles.navLink} data-toggle="modal"
                                        data-target={"#" + editModalId}><span className="oi oi-pencil">      Edit</span></a>
                                    <a className="nav-item nav-link" href="/#" style={CalendarStyles.navLink} data-toggle="modal"
                                        data-target={"#" + deleteModalId}><span className="oi oi-trash">       Delete</span></a>
                                </div>
                            </div>
                        </PopoverBody>
                    </UncontrolledPopover>
                </div>
                {/* 
                    Edit Event Modal Start 
                */}
                <div className="modal fade" id={editModalId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header" style={CalendarStyles.modalHeadeBackgroundColor}>
                                <h5 className="modal-title" id="exampleModalCenterTitle">Edit Event</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" style={CalendarStyles.closeIcon}>&times;</span>
                                </button>
                            </div>
                           
                                <div className="modal-body">

                                    <input type="text" name="title" className="form-control" defaultValue={this.props.editEventTitle}
                                        onChange={this.props.editEventOnChangeTitle} /><br />
                                    <input type="text" name="description" className="form-control" defaultValue={this.props.editEventDescription}
                                        onChange={this.props.editEventOnChangeDescription} /><br />

                                    <DatePicker
                                        
                                        selected={this.props.editEventStartDate}
                                        onChange={this.props.editEventOnChangeDate}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={15}
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        timeCaption="time"

                                    />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary border" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-light border" data-dismiss="modal" onClick={this.props.onClickEditEvent}>Save</button>
                                </div>
                           

                        </div>
                    </div>
                </div>
                {/* 
                    Edit Event Modal End 
                */}

                {/* 
                    Delete  Event Modal Start 
                */}

                <div className="modal fade" id={deleteModalId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header" style={CalendarStyles.modalHeadeBackgroundColor}>
                                <h5 className="modal-title" id="exampleModalCenterTitle">Delete Event</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" style={CalendarStyles.closeIcon}>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <h5>Are You Sure You Want To Delete This Event .</h5>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary border" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-light border" onClick={this.props.deleteEvent} data-dismiss="modal">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 
                    Delete  Event Modal End 
                */}
            </div>
        )
    }
}

export default Event;