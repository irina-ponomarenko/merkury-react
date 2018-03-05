import React from 'react';

class Completed extends React.Component {
    render(){
        return(
            <ul className="messageList" id="Completed">
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
        )
    }
}
export default Completed;