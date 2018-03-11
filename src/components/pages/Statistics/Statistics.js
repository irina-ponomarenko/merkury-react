import React from 'react';
import './Statistics.css';
import BoxWrapper from '../atoms/BoxWrapper';
import ReactHighcharts from 'react-highcharts';
import ActiveUser from '../../../config/splineChartLittle1.config';
import Select from '../atoms/Select';
import SelectPeriod from '../atoms/SelectType';
import  SalesCharts from '../../../config/splineChartSales.config';
import ViewsCharts from '../../../config/splineChartVievs.config';
import  DonutChart from '../atoms/DonutChart';


class Statistics extends React.Component {
    render() {
        const  dunotChart = [
            {
                graphic: {
                    valueColor: "#5484ff",
                    value: "45",
                    total: "100"
                },
                price: "2,300$",
                text: "Direct Sales"
            },
            {
                graphic: {
                    valueColor: "#aa5fb9",
                    value: "20",
                    total: "100"
                },
                price: "980$",
                text: "Channel Sales"
            },
            {
                graphic: {
                    valueColor: "#f83c7b",
                    value: "25",
                    total: "100"
                },
                price: "1,250$",
                text: "Channel Sales"
            }

        ]
        const forSalesSelect = ["Last Year","Last Month","Last Week"];
        const forTypeSelect = ["Notifications","last month","last week"];
        return(
            <div className="Page">
                <div className="WrapperPage">
                    <header className="PageHeader">
                        <h2>Lorem Ipsum Stats</h2>
                        <div className="WrapperDropdown">
                            <Select data={forSalesSelect}/>
                            <SelectPeriod data={forTypeSelect}/>
                        </div>
                    </header>
                    <div className="BoxGroup">
                        <BoxWrapper className="BoxWrapper--Position">
                            <div className="WrapperGrafik">
                                <div className="WrapperTitle">
                                    <h4>1,560</h4>
                                    <span>Sales</span>
                                </div>
                                <ReactHighcharts config={SalesCharts}></ReactHighcharts>
                            </div>
                            <div className="WrapperGrafik">
                                <div className="WrapperTitle">
                                    <h4>3,230</h4>
                                    <span>Sales</span>
                                </div>
                            <ReactHighcharts config={ViewsCharts}></ReactHighcharts>
                            </div>
                        </BoxWrapper>
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
                    <BoxWrapper className="BoxWrapper--Donut">
                        <header className="BoxWrapperHeader">
                            <h3>Total sales</h3>
                            <div className="ChengePanel">
                                <button type="button"><i className="fa fa-pencil"></i></button>
                                <button type="button"><i className="fa fa-trash"></i></button>
                            </div>
                        </header>
                        <div className="ContainerCharts">
                            {
                                dunotChart.map((item, index) => {
                                    return (
                                        <div className="WrapperDonutChart" key={index}>
                                            <DonutChart
                                                valueColor={item.graphic.valueColor}
                                                value={item.graphic.value}
                                                total={item.graphic.total}/>
                                            <div className="WrapperTitle">
                                                <h4>{item.price}</h4>
                                                <span>{item.text}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </BoxWrapper>
                </div>
            </div>
        )
    }
}
export default Statistics;