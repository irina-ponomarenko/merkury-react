import React from 'react';

class ToDo extends React.Component {
    render() {
        return(
            <ul className="messageList" id="InProgress">
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
        )
    }
}
export default ToDo;