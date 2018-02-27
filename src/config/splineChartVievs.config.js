const ViewsChart = {
    chart: {
        type: 'spline',
        height: '190',
        width: '233'
    },
    title: {
        text: ' '
    },
    legend: {
        enabled: false
    },
    xAxis: {
        labels: {
            enabled: false
        },
        gridLineWidth: 0,
        lineColor: 'transparent',
        tickLength: 0
    },
    yAxis: {
        labels: {
            enabled: false
        },
        title: {
            text: ' '
        },
        minorGridLineWidth: 0,
        gridLineWidth: 0,
        alternateGridColor: null
    },
    tooltip: {
        valueSuffix: ' '
    },
    plotOptions: {
        spline: {
            lineWidth: 4,
            color: '#5484ff',
            states: {
                hover: {
                    lineWidth: 5
                }
            },
            marker: {
                enabled: false
            }
        }
    },
    series: [{
        name: ' ',
        data: [0.2, 0.8, 0.8, 0.8, 1, 1.3, 1.5, 2.9, 1.9, 2.6, 1.6, 3, 4, 3.6, 7.1]

    }],
    navigation: {
        menuItemStyle: {
            fontSize: '10px'
        }
    },
    credits: {
        enabled: false
    }

};
export default ViewsChart;