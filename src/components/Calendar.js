import React from 'react'
import CalendarStyles from '../styles/CalendarStyles.js'
import './Calendar.css'
import CalendarHeader from './CalendarHeader.js'
import CalendarActionButtons from './CalendarActionButtons.js'
import Events from './Events'
import moment from 'moment'
import UniqueId from 'react-html-id';
import { store, stateMapper } from '../store/store.js'
import { connect } from 'react-redux'

class CalendarComponent extends React.Component {

    constructor(props) {
        super(props)

        UniqueId.enableUniqueIds(this);
        this.onClickCheckBox = this.onClickCheckBox.bind(this);
        this.scheduleEvent = this.scheduleEvent.bind(this);
        this.editEventOnChangeTitle = this.editEventOnChangeTitle.bind(this);
        this.onClickEditEvent = this.onClickEditEvent.bind(this);
        this.onChangeAddEventTitle = this.onChangeAddEventTitle.bind(this);
        this.onChangeAddEventDescription = this.onChangeAddEventDescription.bind(this);
        this.onChangeAddEventDate = this.onChangeAddEventDate.bind(this);
        this.onChangeSelect = this.onChangeSelect.bind(this);
        this.selectMonth = this.selectMonth.bind(this);
        this.handelSubmitAddEventForm = this.handelSubmitAddEventForm.bind(this);
        this.showEventsTodayAndMonthly = this.showEventsTodayAndMonthly.bind(this);
        this.keyCount = 0;
        this.getKey = this.getKey.bind(this);
        

        this.state = {
            dateContext: moment(),
            scheduleDate: moment().toDate(),
            isCheck: false,
            addEventTitle: "",
            addEventDescription: "",
            addEventDate: moment().toDate(),
            showEvents: true,
            selectedMonth: "",
            currentMonth: "",
            currentYear: "",
            isTodayEvents: false,
            addEventFormState: {
                isAddEventFormValid: true,
                isTitleValid: true,
                isDescriptionValid: true,
                isDateValid: true
            }
        }

    }

    month = () => {
        return this.state.dateContext.format("MMM")
    }
    year = () => {
        return this.state.dateContext.format('Y')
    }
    getKey() {
        return this.keyCount++;
    }
    componentDidMount() {

      

        store.dispatch({
            type: "FETCH_EVENTS",
            email:"shivam@gmail.com"
        })

        this.setState({
            currentMonth: this.month(),
            currentYear: this.year()
        })

    }


    onClickCheckBox(id, e) {

        let eventStatus = {
            id: id,
            isDone: e.target.checked
        }
        store.dispatch({
            type: 'EDIT_EVENT_CHECKBOX',
            payLoadData: eventStatus
        })
    }

    scheduleEvent(date) {
        this.setState({
            scheduleDate: moment(date).toDate()
        });
    }


    editEventOnChangeTitle(event) {
        this.setState({ editEventTitle: event.target.value })
        console.log(this.state.editEventTitle)
    }

    eventEditOnChangeDescription(event) {
        this.setState({ editEventDescription: event.target.value })
        console.log(this.state.editEventDescription);
    }
    onClickEditEvent(id, e) {

        let index = this.state.events.findIndex((event) => {
            return event.id === id
        })
        console.log("index value :", index);
        let event = Object.assign({}, this.state.events[index]);
        event.eventTitle = this.state.title;
        event.description = this.state.description;
        event.date = this.state.editDate;

        let events = Object.assign([], this.state.events);
        events[index] = event;

        this.setState({
            events: events,
            editEventTitle: "",
            editEventDescription: ""
        })


    }


    onChangeAddEventTitle(event) {
        this.setState({
            addEventTitle: event.target.value
        })
    }

    onChangeAddEventDescription(event) {
        this.setState({ addEventDescription: event.target.value })
    }

    onChangeAddEventDate(date) {
        this.setState({
            addEventDate: moment(date).toDate()
        });
    }
    validateAddEventForm() {
        let newFormState = {
            isAddEventFormValid: true,
            isTitleValid: true,
            isDescriptionValid: true,
            isDateValid: true
        }

        if (!this.state.addEventTitle) {
            console.log("event title is empty ..")
            newFormState.isTitleValid = false;
            newFormState.isAddEventFormValid = false;
        }
        if (!this.state.addEventDescription) {
            console.log("event description is empty ...")
            newFormState.isDescriptionValid = false;
            newFormState.isAddEventFormValid = false;
        }
        if (!this.state.addEventDate) {
            console.log("event date is empty ...")
            newFormState.isDateValid = false;
            newFormState.isAddEventFormValid = false;
        }

        this.setState({
            addEventFormState: newFormState
        })

        return newFormState.isAddEventFormValid;

    }


    handelSubmitAddEventForm(event) {
        event.preventDefault();
        if (!this.validateAddEventForm()) {
            return;
        }
        let eventData = {
            id: this.getKey(),
            email:"shivam@gmail.com",
            isDone: false,
            eventTitle: this.state.addEventTitle,
            description: this.state.addEventDescription,
            date: this.state.addEventDate
        }

        this.props.dispatch({
            type: "ADD_EVENT",
            formData: eventData
        })
    }




    onChangeSelect(event) {

        let value = event.target.value;
        if (value !== 'Events') {
            this.setState({ showEvents: false })
        } else {
            this.setState({ showEvents: true })
        }

    }

    selectMonth(event) {
      
        this.setState({ currentMonth: event.target.value })
    }

    showEventsTodayAndMonthly(e) {
       
        let value = e.target.value;
        if (value === 'Today') {
            this.setState({
                isTodayEvents: true
            })
        } else {
            this.setState({
                isTodayEvents: false
            })
        }

    }

    render() {
       

        return (
            <div>
                <h5>Calendar</h5>
                <hr />
                <CalendarHeader selectMonth={this.selectMonth}
                    currentMonth={this.state.currentMonth}
                    currentYear={this.state.currentYear}
                    renderEvents={this.showEventsTodayAndMonthly}
                />
                <hr />
                <CalendarActionButtons
                    onChangeAddEventTitle={this.onChangeAddEventTitle}
                    onChangeAddEventDescriptionField={this.onChangeAddEventDescription}
                    addEventSelectedDate={this.state.addEventDate}
                    onChangeAddEventDate={this.onChangeAddEventDate}
                    onClickAddEvent={this.addEvent}
                    onChangeSelect={this.onChangeSelect}
                    classNameEventTitle={`form-control ${!this.state.addEventFormState.isTitleValid && "is-invalid"}`}
                    classNameEventDescription={`form-control ${!this.state.addEventFormState.isDescriptionValid && "is-invalid"}`}
                    handelSubmitAddEventForm={this.handelSubmitAddEventForm}
                />
                <p></p>
                <div className="card" style={CalendarStyles.card}>
                    <div className="card-body">


                        
                        <Events isTodayEvents={this.state.isTodayEvents} currentMonth={this.state.currentMonth}/>

                    </div>
                </div>



            </div>

        )
    }

}
let Calendar = connect(stateMapper)(CalendarComponent)
export default Calendar;