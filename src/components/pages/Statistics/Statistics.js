import React from 'react';
import './Statistics.css';
import BoxWrapper from '../atoms/BoxWrapper';
import ReactHighcharts from 'react-highcharts';
import ActiveUser from '../../../config/splineChartLittle1.config';

class Statistics extends React.Component {
    render() {
        return(
            <div className="Page">
                <div className="WrapperPage">
                    <header className="PageHeader">
                        <h2>Lorem Ipsum Stats</h2>
                        <div className="WrapperDropdown">
                            <div className="Period"></div>
                            <div className="Type"></div>
                        </div>
                    </header>
                    <div className="BoxGroup">
                        <BoxWrapper>
                            <header className="BoxWrapperHeader">
                                <h3>Active users</h3>
                                <div className="ChengePanel">
                                    <button type="button"><i className="fa fa-pencil"></i></button>
                                    <button type="button"><i className="fa fa-trash"></i></button>
                                </div>
                            </header>
                            <ReactHighcharts config={ActiveUser}></ReactHighcharts>
                        </BoxWrapper>
                    </div>
                </div>
            </div>
        )
    }
}
export default Statistics;