import React from 'react'
import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'
import CalendarStyles from '../styles/CalendarStyles.js'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import UniqueId from 'react-html-id';
import { stateMapper, store } from '../store/store.js'
import { connect } from 'react-redux'
import moment from 'moment'
import Spinner from './Spinner.js'

class EventsComponent extends React.Component {

    constructor(props) {
        super(props)
        this.modal = React.createRef();
        this.deleteModal = React.createRef();
        this.onChange = this.onChange.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.saveEvent = this.saveEvent.bind(this);
        this.deleteEvent = this.deleteEvent.bind(this);
        UniqueId.enableUniqueIds(this);
        this.state = {
            startDate: new Date(),
            title: "",
            description: "",
            isCheck: false
        }
    }


    onChange(event) {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        })

    }

    onChangeDate(event) {
        console.log("onChangeDate called ...");
    }

    saveEvent(event, e) {
      
        let $ = window.$;
        let modal = this.modal.current;
        $(modal).modal("hide");
        let data = {
            id: event.id,
            title: this.state.title === "" ? event.eventTitle : this.state.title,
            description: this.state.description === "" ? event.description : this.state.description,

        }
        if (this.state.title === '' && this.state.description === '') {
            return;
        }
        store.dispatch({
            type: 'EDIT_EVENT',
            payLoadData: data
        })

    }

    deleteEvent(index,e) {
        
        
        let $ = window.$;
        let deleteModal = this.deleteModal.current;
        $(deleteModal).modal("hide");
        store.dispatch({
            type: "DELETE_EVENT",
            index: index
        })

    }

    onChangeCheckBox(id, e) {
    
        let eventStatus = {
            id: id,
            isDone: e.target.checked
        }
        store.dispatch({
            type: 'EDIT_EVENT_CHECKBOX',
            payLoadData: eventStatus
        })
    }

    renderEvents() {
       
        return this.props.events.map((e, index) => {

            let optionPopoverId = this.nextUniqueId();
            let editModalId = this.nextUniqueId();
            let deleteModalId = this.nextUniqueId();


            return (

                <div key={this.nextUniqueId()} className="row justify-content-between align-items-center border  bg-light ">
                    <div className="col-md-1">
                        <input type="checkbox" aria-label="Checkbox for following text input"
                            name="isCheck" checked={e.isDone} value={e.isDone}
                            onChange={this.onChangeCheckBox.bind(this, e.id)} key={e.eventTitle} />
                    </div>
                    <div className="col-md-8">
                        <p style={CalendarStyles.content}>{e.eventTitle}</p>
                    </div>

                    <span>{moment(e.date).format("MMM Do YY")}</span>

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
                    <div ref={this.modal} className="modal fade" id={editModalId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header" style={CalendarStyles.modalHeadeBackgroundColor}>
                                    <h5 className="modal-title" id="exampleModalCenterTitle">Edit Event</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true" style={CalendarStyles.closeIcon}>&times;</span>
                                    </button>
                                </div>

                                <div className="modal-body">

                                    <input type="text" name="title" className="form-control" defaultValue={e.eventTitle}
                                        onChange={this.onChange} /><br />
                                    <input type="text" name="description" className="form-control" defaultValue={e.description}
                                        onChange={this.onChange} /><br />

                                    <DatePicker

                                        selected={moment(e.date).toDate()}
                                        onChange={this.onChangeDate}
                                        // onSelect={this.props.onSelectDay}
                                        showTimeSelect={true}
                                        timeFormat="HH:mm"
                                        timeIntervals={15}
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        timeCaption="time"

                                    />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary border" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-light border" onClick={this.saveEvent.bind(this, e)}>Save</button>
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

                    <div ref={this.deleteModal} className="modal fade" id={deleteModalId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                                    <button type="button" className="btn btn-light border" onClick={this.deleteEvent.bind(this, index)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 
                    Delete  Event Modal End 
                */}
                </div>
            )
        })
    }


    renderTodayEvents() {
        return this.props.events.map(e => {

            let optionPopoverId = this.nextUniqueId();
            let editModalId = this.nextUniqueId();
            let deleteModalId = this.nextUniqueId();
            let isSame = moment().isSame(e.date, 'day')
            if (isSame) {
                return (

                    <div key={this.nextUniqueId()} className="row justify-content-between align-items-center border  bg-light ">
                        <div className="col-md-1">
                            <input type="checkbox" aria-label="Checkbox for following text input"
                                name={e.eventTitle} checked={e.isDone} value={e.isDone}
                                onChange={this.onChangeCheckBox} key={e.eventTitle} />
                        </div>
                        <div className="col-md-8">
                            <p style={CalendarStyles.content}>{e.eventTitle}</p>
                        </div>

                        <span>{moment(e.date).format("MMM Do YY")}</span>

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
                        <div ref={this.modal} className="modal fade" id={editModalId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-header" style={CalendarStyles.modalHeadeBackgroundColor}>
                                        <h5 className="modal-title" id="exampleModalCenterTitle">Edit Event</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true" style={CalendarStyles.closeIcon}>&times;</span>
                                        </button>
                                    </div>

                                    <div className="modal-body">

                                        <input type="text" name="title" className="form-control" defaultValue={e.eventTitle}
                                            onChange={this.onChange} /><br />
                                        <input type="text" name="description" className="form-control" defaultValue={e.description}
                                            onChange={this.onChange} /><br />

                                        <DatePicker

                                            selected={moment(e.date).toDate()}
                                            onChange={this.onChangeDate}
                                            // onSelect={this.props.onSelectDay}
                                            showTimeSelect={true}
                                            timeFormat="HH:mm"
                                            timeIntervals={15}
                                            dateFormat="MMMM d, yyyy h:mm aa"
                                            timeCaption="time"

                                        />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary border" data-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-light border" onClick={this.saveEvent}>Save</button>
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

                        <div ref={this.deleteModal} className="modal fade" id={deleteModalId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                                        <button type="button" className="btn btn-light border" onClick={this.deleteEvent}>Delete</button>
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


        })
    }


    render() {
        let events;
        let isToday = this.props.isTodayEvents;
        if (isToday) {
            events = this.props.isEventLoading ? <Spinner/> :this.renderTodayEvents();
        } else {
            events = this.props.isEventLoading ? <Spinner/> : this.renderEvents();
        }
        return (
            <div>
                {events}
            </div>
        )

    }
}
let Events = connect(stateMapper)(EventsComponent);
export default Events;