import React from 'react';
import './Workflow.css';

import ToDo from './ToDo';
import InProgress from './InProgress';
import Completed from './Completed';

class Workflow extends React.Component {
    render() {
        return(
            <div className="Page">
                <div className="WrapperPage PagePosition">
                    <div className="wrapperBlockPage">
                        <header className="PageHeader">
                            <h2>To Do <span>(6)</span></h2>
                            <i className="fa fa-chevron-right"></i>
                        </header>
                        <ToDo/>
                    </div>
                    <div className="wrapperBlockPage">
                        <header className="PageHeader">
                            <h2>In Progress <span>(3)</span></h2>
                            <i className="fa fa-chevron-right"></i>
                        </header>
                        <InProgress/>
                    </div>
                    <div className="wrapperBlockPage">
                        <header className="PageHeader">
                            <h2>Completed <span>(4)</span></h2>
                        </header>
                        <Completed/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Workflow;