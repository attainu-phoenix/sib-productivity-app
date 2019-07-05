import React from 'react'
import moment from 'moment'

class CalendarHeader extends React.Component {

    constructor(props) {
        super(props)
        this.months = this.months.bind(this);
    }


    months() {
        //let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let months = moment.monthsShort();
        return months.map(m => {
            return (
                <option className="dropdown-item" key={m} value={m} >{m}</option>
            )
        })
    }

    render() {

        let monthsDropdown = this.months()
        return (
            <div className="row justify-content-around align-items-center">

                {/* <button type="button" className="btn btn-light border" onClick={this.props.showTodayEvents}>Today</button> */}
                <div className="col-md-2">
                    <select onChange={this.props.renderEvents} className="custom-select my-1 mr-sm-2 btn btn-light">
                        <option key="Month" defaultValue="Month">Month</option>
                        <option key="Today" value="Today">Today</option>
                    </select>
                </div>


                <div className="col-md-2">
                    <div className="row justify-content-between align-items-start">
                        <span></span>
                        <h5>{this.props.currentMonth}</h5><h5>{this.props.currentYear}</h5>
                        <span></span>
                    </div>
                </div>

                <div className="btn-group">
                    <select onChange={this.props.selectMonth} className="custom-select my-1 mr-sm-2 btn btn-light" id="inlineFormCustomSelectPref">
                        {/* <option defaultValue>Months</option> */}
                        {monthsDropdown}
                    </select>
                </div>
            </div>
        )
    }
}


export default CalendarHeader;