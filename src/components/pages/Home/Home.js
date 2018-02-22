import React from 'react';
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
                </div>
            </div>
        )
    }
}
export default Home;