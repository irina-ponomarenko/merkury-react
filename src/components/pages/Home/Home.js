import React from 'react';
import './Home.css';
import BoxWrapper from '../atoms/BoxWrapper';
import Select from '../atoms/Select';
import ReactHighcharts from 'react-highcharts';
import  SalesChart  from '../../../config/pieChart.config';
import ReportChart from '../../../config/splineChart.config';

class Home extends React.Component {
    render() {
        const forSalesSelect = ["last year","last month","last week"];
        const userName = localStorage.getItem('username');
        return(
            <div className="Page">
                <div className="WrapperPage">
                    <header className="PageHeader">
                        <h1>Hello {userName}!</h1>
                    </header>
                    <div className="BoxGroup">
                        <BoxWrapper>
                            <header className="BoxWrapperHeader">
                                <h3>Your Sales</h3>
                                <Select data={forSalesSelect}/>
                            </header>
                            <ReactHighcharts config={SalesChart}></ReactHighcharts>
                        </BoxWrapper>
                        <BoxWrapper>
                            <header className="BoxWrapperHeader">
                                <h3>Report</h3>
                                <Select data={forSalesSelect}/>
                            </header>
                            <ReactHighcharts config={ReportChart}></ReactHighcharts>
                        </BoxWrapper>
                    </div>
                    <BoxWrapper className="wrapperMessage">
                        <header className="TitleMessage">
                            <h4>Tasks</h4>
                            <div className="namberMessage">
                                <div className="blueNamber">
                                    <span>5</span>
                                </div>
                                <div className="redNamber">
                                    <span>2</span>
                                </div>
                            </div>
                        </header>
                        <div className="message">
                            <div className="wrapperBlock">
                                <div className="iconUser">
                                    <span>N</span>
                                </div>
                                <div className="titleBlock">
                                    <p>New website for Symu.co</p>
                                    <span> <i className="fa fa-clock-o"></i> 5 days delays</span>
                                </div>
                            </div>
                            <div className="option">
                                <i className="fa fa-ellipsis-v"></i>
                            </div>
                        </div>
                        <div className="message">
                            <div className="wrapperBlock">
                                <div className="iconUser">
                                    <span>F</span>
                                </div>
                                <div className="titleBlock">
                                    <p>Free business PSD Template </p>
                                    <span> <i className="fa fa-clock-o"></i> 2 days delays</span>
                                </div>
                            </div>
                            <div className="option">
                                <i className="fa fa-ellipsis-v"></i>
                            </div>
                        </div>
                        <div className="message">
                            <div className="wrapperBlock">
                                <div className="iconUser">
                                    <span>N</span>
                                </div>
                                <div className="titleBlock greySpan">
                                    <p>New logo for JCD.pl</p>
                                    <span> <i className="fa fa-clock-o"></i> 5 days left</span>
                                </div>
                            </div>
                            <div className="option">
                                <i className="fa fa-ellipsis-v"></i>
                            </div>
                        </div>
                        <div className="message">
                            <div className="wrapperBlock">
                                <div className="iconUser">
                                    <span>F</span>
                                </div>
                                <div className="titleBlock greySpan">
                                    <p>Free Icons Set vol. 3</p>
                                    <span> <i className="fa fa-clock-o"></i> 10 days left</span>
                                </div>
                            </div>
                            <div className="option">
                                <i className="fa fa-ellipsis-v"></i>
                            </div>
                        </div>
                    </BoxWrapper>
                    <BoxWrapper className="wrapperMessage">
                        <header className="TitleMessage">
                            <h4>Messages</h4>
                            <div className="namberMessage">
                                <div className="blueNamber">
                                    <span>2</span>
                                </div>
                            </div>
                        </header>
                        <div className="message messagePadding">
                            <div className="wrapperBlock">
                                <div className="iconUser">
                                    <span>N</span>
                                </div>
                                <div className="titleBlock newMessage">
                                    <h4>Nina Jones <span>5 minutes ago</span></h4>
                                    <p>Hey You! It’s me again :-) I attached new (...)</p>
                                    <div className="shareMessage">
                                        <i className="fa fa-share"></i>
                                        <i className="fa fa-cog"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="message messagePadding">
                            <div className="wrapperBlock">
                                <div className="iconUser">
                                    <span>F</span>
                                </div>
                                <div className="titleBlock newMessage">
                                    <h4>Nina Jones <span>About 20 hours ago</span></h4>
                                    <p>Hey! I attached some new PSD files for (...)</p>
                                    <div className="shareMessage">
                                        <i className="fa fa-share"></i>
                                        <i className="fa fa-cog"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="message messagePadding">
                            <div className="wrapperBlock">
                                <div className="iconUser">
                                    <span>N</span>
                                </div>
                                <div className="titleBlock newMessage">
                                    <h4>James Smith <span>2 days ago</span></h4>
                                    <p>Good morning, you are fired!</p>
                                    <div className="shareMessage">
                                        <i className="fa fa-share"></i>
                                        <i className="fa fa-cog"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="message messagePadding">
                            <div className="wrapperBlock">
                                <div className="iconUser">
                                    <span>F</span>
                                </div>
                                <div className="titleBlock newMessage">
                                    <h4>Nina Jones <span>About 2 weeks ago</span></h4>
                                    <p>Hello! Could You bring me coffee please?</p>
                                    <div className="shareMessage">
                                        <i className="fa fa-share"></i>
                                        <i className="fa fa-cog"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BoxWrapper>
                </div>
            </div>
        )
    }
}
export default Home;