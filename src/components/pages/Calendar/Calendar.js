import React from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';

import BigCalendar from 'react-big-calendar'
import events from './events';
import moment from 'moment';

BigCalendar.momentLocalizer(moment);
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

class Calendar extends React.Component {
    render() {
        return(
            <div className="Page">
                <div className="WrapperPage">
                    <header className="PageHeader">
                        <div className="TitleCalendar">
                        </div>
                    </header>
                    <BigCalendar
                        events={events}
                        views={allViews}
                        step={60}
                        showMultiDayTimes
                        defaultDate={new Date(2018, 3, 1)}
                    />
                </div>
            </div>
        )
    }
}
export default Calendar;