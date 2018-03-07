import React from 'react';
import './Workflow.css';
import Sortable from 'sortablejs';


class Workflow extends React.Component {
    componentDidMount(){
        var toDo = this.firstBlock;
        var sortable = Sortable.create(toDo, {
            group: {
                name: 'toDo',
                put: ['Completed', 'InProgress'],
                pull: ['InProgress', 'Completed']
            },
            animation: 100
        });

        var InProgress = this.secondBlock;
        var sortable = Sortable.create(InProgress, {
            group: {
                name: 'InProgress',
                put: ['toDo', 'Completed'],
                pull: ['toDo', 'Completed']
            },
            animation: 100
        });

        var Completed = this.lastBlock;
        var sortable = Sortable.create(Completed, {
            group: {
                name: 'Completed',
                put: ['toDo', 'InProgress'],
                pull: ['toDo', 'InProgress']
            },
            animation: 100
        });
    }
    render() {
        return(
            <div className="Page">
                <div className="WrapperPage PagePosition">
                    <div className="wrapperBlockPage">
                        <header className="PageHeader">
                            <h2>To Do <span>(6)</span></h2>
                            <i className="fa fa-chevron-right"></i>
                        </header>
                        <ul className="messageList" id="toDo" ref={el => this.firstBlock = el}>
                            <li>
                                <div className="messageComponent">
                                    <div className="icon">
                                        <span>N</span>
                                    </div>
                                    <div className="titleMessage">
                                        <p>New website for JCD.pl</p>
                                        <span> <i className="fa fa-clock-o"></i> 5 days delays</span>
                                    </div>
                                </div>
                                <div className="setting">
                                    <i className="fa fa-ellipsis-v"></i>
                                </div>
                            </li>
                            <li>
                                <div className="messageComponent">
                                    <div className="icon">
                                        <span>F</span>
                                    </div>
                                    <div className="titleMessage">
                                        <p>Free PSD Template vol. 3</p>
                                        <span> <i className="fa fa-clock-o"></i> 5 days left</span>
                                    </div>
                                </div>
                                <div className="setting">
                                    <i className="fa fa-ellipsis-v"></i>
                                </div>
                            </li>
                            <li>
                                <div className="messageComponent">
                                    <div className="icon">
                                        <span>N</span>
                                    </div>
                                    <div className="titleMessage">
                                        <p>New logo for Google</p>
                                        <span> <i className="fa fa-clock-o"></i> 5 days left</span>
                                    </div>
                                </div>
                                <div className="setting">
                                    <i className="fa fa-ellipsis-v"></i>
                                </div>
                            </li>
                            <li>
                                <div className="messageComponent">
                                    <div className="icon">
                                        <span>N</span>
                                    </div>
                                    <div className="titleMessage">
                                        <p>New website for Windu.org</p>
                                        <span> <i className="fa fa-clock-o"></i> 5 days left</span>
                                    </div>
                                </div>
                                <div className="setting">
                                    <i className="fa fa-ellipsis-v"></i>
                                </div>
                            </li>
                            <li>
                                <div className="messageComponent">
                                    <div className="icon">
                                        <span>F</span>
                                    </div>
                                    <div className="titleMessage">
                                        <p>Free PSD Template vol. 2</p>
                                        <span> <i className="fa fa-clock-o"></i> 5 days left</span>
                                    </div>
                                </div>
                                <div className="setting">
                                    <i className="fa fa-ellipsis-v"></i>
                                </div>
                            </li>
                            <li>
                                <div className="messageComponent">
                                    <div className="icon">
                                        <span>I</span>
                                    </div>
                                    <div className="titleMessage">
                                        <p>Iconset Vol. 3</p>
                                        <span> <i className="fa fa-clock-o"></i> 5 days left</span>
                                    </div>
                                </div>
                                <div className="setting">
                                    <i className="fa fa-ellipsis-v"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="wrapperBlockPage">
                        <header className="PageHeader">
                            <h2>In Progress <span>(3)</span></h2>
                            <i className="fa fa-chevron-right"></i>
                        </header>
                        <ul className="messageList" id="InProgress" ref={el => this.secondBlock = el}>
                            <li>
                                <div className="messageComponent">
                                    <div className="icon">
                                        <span>N</span>
                                    </div>
                                    <div className="titleMessage">
                                        <p>New logo for Apple</p>
                                        <span> <i className="fa fa-clock-o"></i> 5 days delays</span>
                                    </div>
                                </div>
                                <div className="setting">
                                    <i className="fa fa-ellipsis-v"></i>
                                </div>
                            </li>
                            <li>
                                <div className="messageComponent">
                                    <div className="icon">
                                        <span>D</span>
                                    </div>
                                    <div className="titleMessage">
                                        <p>Daily UI Kit</p>
                                        <span> <i className="fa fa-clock-o"></i> 5 days left</span>
                                    </div>
                                </div>
                                <div className="setting">
                                    <i className="fa fa-ellipsis-v"></i>
                                </div>
                            </li>
                            <li>
                                <div className="messageComponent">
                                    <div className="icon">
                                        <span>B</span>
                                    </div>
                                    <div className="titleMessage colorSpan">
                                        <p>Business Cards</p>
                                        <span> <i className="fa fa-clock-o"></i> 2 days left</span>
                                    </div>
                                </div>
                                <div className="setting">
                                    <i className="fa fa-ellipsis-v"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="wrapperBlockPage">
                        <header className="PageHeader">
                            <h2>Completed <span>(4)</span></h2>
                        </header>
                        <ul className="messageList" id="Completed" ref={el => this.lastBlock = el}>
                            <li>
                                <div className="messageComponent">
                                    <div className="icon">
                                        <span>F</span>
                                    </div>
                                    <div className="titleMessage colorCompleted">
                                        <p>Free PSD Template vol. 1</p>
                                        <span> <i className="fa fa-check-circle-o"></i> Completed!</span>
                                    </div>
                                </div>
                                <div className="setting">
                                    <i className="fa fa-ellipsis-v"></i>
                                </div>
                            </li>
                            <li>
                                <div className="messageComponent">
                                    <div className="icon">
                                        <span>I</span>
                                    </div>
                                    <div className="titleMessage colorCompleted">
                                        <p>Iconset vol. 1</p>
                                        <span> <i className="fa fa-check-circle-o"></i> Completed!</span>
                                    </div>
                                </div>
                                <div className="setting">
                                    <i className="fa fa-ellipsis-v"></i>
                                </div>
                            </li>
                            <li>
                                <div className="messageComponent">
                                    <div className="icon">
                                        <span>N</span>
                                    </div>
                                    <div className="titleMessage colorCompleted">
                                        <p>New website for Symu.co</p>
                                        <span> <i className="fa fa-check-circle-o"></i> Completed!</span>
                                    </div>
                                </div>
                                <div className="setting">
                                    <i className="fa fa-ellipsis-v"></i>
                                </div>
                            </li>
                            <li>
                                <div className="messageComponent">
                                    <div className="icon">
                                        <span>I</span>
                                    </div>
                                    <div className="titleMessage colorCompleted">
                                        <p>Iconset vol. 2</p>
                                        <span> <i className="fa fa-check-circle-o"></i> Completed!</span>
                                    </div>
                                </div>
                                <div className="setting">
                                    <i className="fa fa-ellipsis-v"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Workflow;