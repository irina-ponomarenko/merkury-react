const ReportChart = {
    chart: {
        type: 'spline',
        height: '290'
    },
    title: {
        text: ' '
    },
    legend: {
        enabled: false
    },
    xAxis: {
        categories: [
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' '
        ],
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 1
    },
    yAxis: {
        title: {
            text: ' '
        },
        minorGridLineWidth: 0,
        gridLineWidth: 1,
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
        color: '#5987ff',
        data: [300,320,270, 400,360, 700, 390, 430,290, 350, 270]

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
export default ReportChart;