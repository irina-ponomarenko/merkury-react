import React from 'react';

import TopMenu from '../Menus/TopMenu/TopMenu';

class Statistics extends React.Component {
    render() {
        return(
            <div className="Page">
                <div className="WrapperPage">
                    <header className="PageHeader">
                        <h2>Lorem Ipsum Stats</h2>
                        <div className="WrapprDropdown">
                            <div className="Period"></div>
                            <div className="Type"></div>
                        </div>
                    </header>
                </div>
            </div>
        )
    }
}
export default Statistics;