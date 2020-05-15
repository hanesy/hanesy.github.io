var chartColors = ["#D99177", "#645D73", "#F2DBCE", "#467F71", "#3C5973","#003836","#323232"];

document.addEventListener('DOMContentLoaded', function(){
// THE CHART
Highcharts.chart('MBTI', {
    chart: {
        type: 'bar'
    },

    title:{
        text: undefined,
    },

    xAxis: {
        categories: ['Mind (I/E)', 'Energy (N/S)', 'Nature (F/T)', 'Tactics (J/P)', 'Identity (T/A)']
    },
    yAxis: {
        min: 0,
        title: {
            text: '%'
        }
    },
    legend: {
        reversed: true,
        // align: 'left',
        // layout: 'vertical',
        // verticalAlign: 'middle',
    },
    tooltip: {
        // pointFormat: '<span style="color:{series.color}">{series.name}</span>: {point.percentage:.0f}%<br/>',
        pointFormat: '{series.name}</span>: {point.percentage:.0f}%'
    },
    plotOptions: {
        series: {
            stacking: 'percent',
            dataLabels: {
                enabled: true,
                format: '{point.percentage:.0f}%'

            },
        }
    },
    series: [
    {

        name: 'Non-Dominant <br/>(ESTP-A)',
        data: [49, 37, 37, 36, 49],
        color: chartColors[2]
    }, 
    {
        name: 'Dominant <br/> (INFJ-T)',
        data: [51, 63, 63, 64, 51],
        color: chartColors[6]
    }
]

    }).reflow();


Highcharts.chart('enneagram', {
    chart: {
        type: 'heatmap',
        marginTop: 40,
        marginBottom: 80,
        plotBorderWidth: 1
    },

    title: {
        text: undefined,
    },

    xAxis: {
        categories: ['May 2020', 'October 2019'],
        reversed: true,
    },
    

    yAxis: {
        categories: ['Type 1: Perfectionist', 'Type 2: Giver','Type 3: Achiever','Type 4: Individualist','Type 5: Investigator','Type 6: Loyalist','Type 7: Enthusiast','Type 8: Challenger','Type 9: Peacemaker'],
        title: null,
        reversed: true
    },

    plotOptions: {
        series: {
            dataLabels: {
                format: '{point.value:.0f}%'

            },
            color: chartColors[1],
        }
    },

    colorAxis: {
        min: 0,
        minColor: chartColors[2],
        maxColor: chartColors[6],
        // gridLineColor: chartColors[1],
        reversed: false,
        labels: {
            format: '{value}%'
        }
        
    },

    legend: {
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'top',
        y: 25,
        symbolHeight: 280,
    },

    tooltip: {
        formatter: function () {
            return '<b> Scored ' + this.point.value + '</b>% for <br><b>' + getPointCategoryName(this.point, 'x') + '</b> on <br><b>' + getPointCategoryName(this.point, 'y')+ '</b>'
        }
    },

    series: [{
        name: 'Sales per employee',
        borderWidth: 1,
        data: [[0, 0, 79], [1, 0, 53], [0, 1, 57], [1, 1, 60], [0, 2, 78], [1, 2, 58], [0, 3, 92], [1, 3, 63], [0, 4, 91], [1, 4, 51], [0, 5, 56], [1, 5, 43], [0, 6, 46], [1, 6, 42], [0, 7, 98], [1, 7, 65], [0, 8, 45], [1, 8, 18]],
        dataLabels: {
            enabled: true,
            color: '#000000'
        }
    }],
    
}).reflow();
});

function getPointCategoryName(point, dimension) {
    var series = point.series,
        isY = dimension === 'y',
        axis = series[isY ? 'yAxis' : 'xAxis'];
    return axis.categories[point[isY ? 'y' : 'x']];
}