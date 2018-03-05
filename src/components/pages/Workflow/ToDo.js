import React from 'react';

class ToDo extends React.Component {
    render() {
        return(
            <ul className="messageList" id="toDo">
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
        )
    }
}
export default ToDo;