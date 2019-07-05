import React from 'react'
import CalendarStyles from '../styles/CalendarStyles.js'
import './Calendar.css'
import CalendarHeader from './CalendarHeader.js'
import CalendarActionButtons from './CalendarActionButtons.js'
import Event from './Event'
import moment from 'moment'
import UniqueId from 'react-html-id';

class Calendar extends React.Component {

    constructor(props) {
        super(props)

        UniqueId.enableUniqueIds(this);
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
        this.handleSubmitEditEventForm = this.handleSubmitEditEventForm.bind(this);
        this.changeEventTitle = this.changeEventTitle.bind(this);
        this.changeEventDescription = this.changeEventDescription.bind(this);
        this.showEventsTodayAndMonthly = this.showEventsTodayAndMonthly.bind(this);
        this.changeEventDate = this.changeEventDate.bind(this);
        this.state = {
            dateContext: moment(),
            scheduleDate: moment().toDate(),
            editDate: moment().toDate(),
            isCheck: false,
            title: "",
            description: "",
            addEventTitle: "",
            addEventDescription: "",
            addEventDate: moment().toDate(),
            showEvents: true,
            selectedMonth: "",
            currentMonth: "",
            currentYear: "",
            showTodayEvents: false,
            events: [
                { id: this.nextUniqueId(), isDone: false, eventTitle: "Standup", description: "Standup with mentees for project", date: "Thu Jul 04 2019 18:15:00 GMT+0530 (India Standard Time)" },
                { id: this.nextUniqueId(), isDone: true, eventTitle: "Code Review", description: "Code Review For Project", date: "Wed Jul 03 2019 18:00:00 GMT+0530 (India Standard Time)" },
                { id: this.nextUniqueId(), isDone: false, eventTitle: "Mentor Sync-up", description: "Arkesh Jaiswal is inviting you to a scheduled Zoom meeting.", date: "Tue Jul 02 2019 00:26:26 GMT+0530 (India Standard Time)" }
            ],
            addEventFormState: {
                isAddEventFormValid: true,
                isTitleValid: true,
                isDescriptionValid: true,
                isDateValid: true
            },
            editEventFormState: {
                editEventTitle: true,
                editEventDescription: true,
                isEditEventFormVaid: true
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


    onClickCheckBox(id, e) {

        let index = this.state.events.findIndex((event) => {
            return event.id === id
        })

        let event = Object.assign({}, this.state.events[index]);

        let isDone = event.isDone;
        event.isDone = !isDone;

        let events = Object.assign([], this.state.events);
        events[index] = event;
        this.setState({
            events: events
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
        //console.log("Edit Event Clicked");
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
    deleteEvent(index, e) {
        console.log("Delete Event Clicked ")

        let events = Object.assign([], this.state.events);
        events.splice(index, 1);
        this.setState({
            events: events
        })

    }

    onChangeAddEventTitle(event) {
        this.setState({
            addEventTitle: event.target.value
        })
        // console.log(this.state.addEventTitle)
    }

    onChangeAddEventDescription(event) {
        this.setState({ addEventDescription: event.target.value })
        // console.log(this.state.addEventDescription)
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
            id: this.nextUniqueId(),
            isDone: false,
            eventTitle: this.state.addEventTitle,
            description: this.state.addEventDescription,
            date: this.state.addEventDate
        }

        //var newEvents = this.state.events.concat(eventData)
        var newEvents = [...this.state.events, eventData]
        event.target.reset()
        this.setState({ events: newEvents })
    }

    validateEditEventForm() {
        let newEditEventFormState = {
            editEventTitle: true,
            editEventDescription: true,
            isEditEventFormVaid: true
        }

        if (!this.state.editEventTitle) {
            newEditEventFormState.editEventTitle = false;
            newEditEventFormState.isEditEventFormVaid = false;
        }

        if (!this.state.editEventDescription) {
            newEditEventFormState.editEventDescription = false;
            newEditEventFormState.isEditEventFormVaid = false;
        }

        this.setState({
            editEventFormState: newEditEventFormState
        })

        return newEditEventFormState.isEditEventFormVaid;

    }

    handleSubmitEditEventForm(event) {
        console.log("camed in handleSubmit edit form" + event);
        event.preventDefault();

        if (!this.validateEditEventForm()) {
            console.log("Edit form is invalid ")
            return;
        }

        // let editEventData = {
        //     id: this.nextUniqueId(),
        //     isDone: false,
        //     editEventTitle: this.state.editEventTitle,
        //     editEventDescription: this.state.editEventDescription
        // }

        // let index = this.state.events.findIndex((event)=>{
        //     return event.id === id;
        // })
        // console.log("Index ===>",index);
    }
    changeEventTitle(id, e) {



        let index = this.state.events.findIndex((event) => {
            return event.id === id
        })
        // console.log("index value :", index);
        let event = Object.assign({}, this.state.events[index]);
        event.eventTitle = e.target.value;

        let events = Object.assign([], this.state.events);
        events[index] = event;
        this.setState({
            events: events
        })
    }

    changeEventDescription(id, e) {

        let index = this.state.events.findIndex((event) => {
            return event.id === id
        })
        // console.log("index value :", index);
        let event = Object.assign({}, this.state.events[index]);

        event.description = e.target.value;


        let events = Object.assign([], this.state.events);
        events[index] = event;

        this.setState({
            events: events
        })
    }


    editEventOnChangeDate(date) {
        // console.log(date)
        // let newDate = moment(date).toDate()

        this.setState({
            editDate: new Date(date)
        });

    }

    changeEventDate(date) {
        console.log("changeEventDate() called ...")
        console.log(date)
        this.setState({
            editDate: new Date(date)
        });
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

    showEventsTodayAndMonthly(e) {
        console.log(e.target.value)
        let value = e.target.value;
        if (value === 'Today') {
            this.setState({
                showTodayEvents: true
            })
        } else {
            this.setState({
                showTodayEvents: false
            })
        }

    }

    renderEventsToday() {
        return (
            this.state.events.map((e, index) => {

                    let isSame = moment().isSame(e.date, 'day')
                    if (isSame) {
                    return (
                        <Event
                            key={this.nextUniqueId()}
                            eventTitle={e.eventTitle}
                            eventDate={moment(e.date).format("MMM Do YY")}
                            onClickCheckBox={this.onClickCheckBox.bind(this, e.id)}
                            checked={e.isDone}
                            editEventStartDate={moment(e.date).toDate()}
                            editEventOnChangeDate={this.editEventOnChangeDate}
                            editEventTitle={e.eventTitle}
                            editEventDescription={e.description}
                            editEventOnChangeTitle={this.changeEventTitle.bind(this, e.id)}
                            editEventOnChangeDescription={this.changeEventDescription.bind(this, e.id)}
                            deleteEvent={this.deleteEvent.bind(this, index)}
                        />
                    )
                }
            })
        )
    }

    renderEventsMonth() {


        return (
            this.state.events.map((e, index) => {

                return (
                    <Event
                        key={this.nextUniqueId()}
                        eventTitle={e.eventTitle}
                        eventDate={moment(e.date).format("MMM Do YY")}
                        onClickCheckBox={this.onClickCheckBox.bind(this, e.id)}
                        checked={e.isDone}
                        editEventStartDate={this.state.editDate}
                        // onSelectDay={this.changeEventDate}
                        editEventOnChangeDate={this.editEventOnChangeDate}
                        editEventTitle={e.eventTitle}
                        editEventDescription={e.description}
                        editEventOnChangeTitle={this.changeEventTitle.bind(this, e.id)}
                        editEventOnChangeDescription={this.changeEventDescription.bind(this, e.id)}
                        deleteEvent={this.deleteEvent.bind(this, index)}
                    />
                )
            })
        )
    }


    render() {

        let events;
        if (this.state.showTodayEvents) {
            events = this.renderEventsToday();
        } else {
            events = this.renderEventsMonth();
        }


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



                        {events}

                    </div>
                </div>



            </div>

        )
    }

}

export default Calendar;