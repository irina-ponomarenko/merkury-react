const SalesChart = {
    chart: {
        type: 'spline',
        height: '190'
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
        data: [300, 320, 270, 400, 360, 700, 390, 430, 290, 350, 270]

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
export default SalesChart;