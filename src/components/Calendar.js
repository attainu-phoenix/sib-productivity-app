import React from 'react'
import CalendarStyles from '../styles/CalendarStyles.js'
import './Calendar.css'
import CalendarHeader from './CalendarHeader.js'
import CalendarActionButtons from './CalendarActionButtons.js'
import Event from './Event'
import moment from 'moment'

class Calendar extends React.Component {

    constructor(props) {
        super(props)


        this.onClickCheckBox = this.onClickCheckBox.bind(this);
        this.scheduleEvent = this.scheduleEvent.bind(this);
        this.editEventOnChangeTitle = this.editEventOnChangeTitle.bind(this);
        this.editEventOnChangeDate = this.editEventOnChangeDate.bind(this);
        this.eventEditOnChangeDescription = this.eventEditOnChangeDescription.bind(this)
        this.onClickEditEvent = this.onClickEditEvent.bind(this);
        this.deleteEvent = this.deleteEvent.bind(this);
        this.onChangeAddEventTitle = this.onChangeAddEventTitle.bind(this);
        this.onChangeAddEventDescription = this.onChangeAddEventDescription.bind(this);
        this.onChangeAddEventDate = this.onChangeAddEventDate.bind(this);
        // this.addEvent = this.addEvent.bind(this);
        this.onChangeSelect = this.onChangeSelect.bind(this);
        this.selectMonth = this.selectMonth.bind(this);
        this.handelSubmitAddEventForm = this.handelSubmitAddEventForm.bind(this);
        this.state = {
            dateContext: moment(),
            scheduleDate: moment().toDate(),
            editDate: moment().toDate(),
            isCheck: false,
            editEventInputField: "",
            editEvetnDescriptionField: "",
            addEventTitle: "",
            addEventDescription: "",
            addEventDate: moment().toDate(),
            showEvents: true,
            selectedMonth: "",
            currentMonth: "",
            currentYear: "",
            events: [
                { id: 'Standup', isDone: false, eventTitle: "Standup", description: "Standup with mentees for project", date: "Thu Jul 04 2019 18:15:00 GMT+0530 (India Standard Time)" },
                { id: 'Code Review', isDone: true, eventTitle: "Code Review", description: "Code Review For Project", date: "Wed Jul 03 2019 18:00:00 GMT+0530 (India Standard Time)" },
                { id: 'Mentor Sync-up', isDone: false, eventTitle: "Mentor Sync-up", description: "Arkesh Jaiswal is inviting you to a scheduled Zoom meeting.", date: "Tue Jul 02 2019 00:26:26 GMT+0530 (India Standard Time)" }
            ],
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

    componentDidMount() {
        this.setState({
            currentMonth: this.month(),
            currentYear: this.year()
        })
        // console.log(this.state.currentMonth)
    }


    onClickCheckBox(event) {

        let name = event.target.name;
        let events = this.state.events;
        let isChecked;
        let index;
        console.log(events)
        for (var i = 0; i < events.length; i++) {
            if (events[i].eventTitle === name) {
                isChecked = events[i].isDone;
                index = i;
            }

        }
        events[index].isDone = !isChecked;
        this.setState({
            events: events
        })
    }

    scheduleEvent(date) {



        this.setState({
            scheduleDate: moment(date).toDate()
        });
        

    }
    editEventOnChangeDate(date) {
        this.setState({
            editDate: moment(date).toDate()
        });
        console.log(this.state.editDate)

    }

    editEventOnChangeTitle(event) {
        this.setState({ editEventInputField: event.target.value })
        console.log(this.state.editEventInputField)
    }

    eventEditOnChangeDescription(event) {
        this.setState({ editEvetnDescriptionField: event.target.value })
        console.log(this.state.editEvetnDescriptionField);
    }
    onClickEditEvent() {
        console.log("Edit Event Clicked ")
    }
    deleteEvent() {
        console.log("Delete Event Clicked ")
    }

    onChangeAddEventTitle(event) {
        this.setState({
            addEventTitle: event.target.value
        })
        console.log(this.state.addEventTitle)
    }

    onChangeAddEventDescription(event) {
        this.setState({ addEventDescription: event.target.value })
        console.log(this.state.addEventDescription)
    }

    onChangeAddEventDate(date) {

        this.setState({
            addEventDate: moment(date).toDate()
        });
        console.log(this.state.addEventDate)

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
            id: this.state.addEventTitle,
            isDone: false,
            eventTitle: this.state.addEventTitle,
            description: this.state.addEventDescription,
            date: this.state.addEventDate
        }

        var newEvents = this.state.events.concat(eventData)
        this.setState({ events: newEvents })
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
        console.log(event.target.value)
        this.setState({ currentMonth: event.target.value })
    }


    renderEvents() {

        return (
            this.state.events.map(e => {
                // console.log(new Date(e.date).getDay())
                return (
                    <Event
                        key={e.id}
                        eventTitle={e.eventTitle}
                        eventDate={moment(e.date).format("MMM Do YY")}
                        onClickCheckBox={this.onClickCheckBox}
                        checked={e.isDone}
                        scheduleEventStartDate={this.state.scheduleDate}
                        scheduleEvent={this.scheduleEvent}
                        editEventStartDate={this.state.editDate}
                        editEventOnChangeDate={this.editEventOnChangeDate}
                        editEventTitle={e.eventTitle}
                        eventEditOnChangeTitle={this.editEventOnChangeTitle}
                        editEventDescription={e.description}
                        eventEditOnChangeDescription={this.eventEditOnChangeDescription}
                        onClickEditEvent={this.onClickEditEvent}
                        deleteEvent={this.deleteEvent}

                    />
                )
            })
        )
    }


    render() {

        let events = this.renderEvents()

        return (
            <div>
                <h5>Calendar</h5>
                <hr />
                <CalendarHeader selectMonth={this.selectMonth} currentMonth={this.state.currentMonth} currentYear={this.state.currentYear} />
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

                        {/* <Event
                            eventDate={this.state.events[0].time}
                            onChangeCheckBox={this.onCheckboxChanged}
                            checked={this.state.isCheck}
                            scheduleEventStartDate={this.state.scheduleDate}
                            scheduleEvent={this.scheduleEvent}
                            editEventStartDate={this.state.editDate}
                            editEventOnChangeDate={this.editEventOnChangeDate}
                            editEventTitle={this.state.events[0].eventTitle}
                            eventEditOnChangeTitle={this.editEventOnChangeTitle}
                            editEventDescription={this.state.events[0].description}
                            eventEditOnChangeDescription={this.eventEditOnChangeDescription}
                            onClickEditEvent={this.onClickEditEvent}
                            deleteEvent={this.deleteEvent}

                        /> */}

                        {events}

                    </div>
                </div>



            </div>

        )
    }

}

export default Calendar;