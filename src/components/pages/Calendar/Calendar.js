import React from 'react';
import { Link } from 'react-router-dom';
import TopMenu from '../Menus/TopMenu/TopMenu';

class Calendar extends React.Component {
    render() {
        return(
            <div className="Page">
                <div className="WrapperPage">
                    <header className="PageHeader">
                        <div className="TitleCalendar">
                            <Link to=""><i className="fa fa-caret-left ChevronLeft"></i></Link>
                            <h2>January 2016</h2>
                            <Link to=""><i className="fa fa-caret-right ChevronRight"></i></Link>
                        </div>
                    </header>
                </div>
            </div>
        )
    }
}
export default Calendar;