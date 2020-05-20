var today = new Date(),
  day = 1000 * 60 * 60 * 24;

// Set to 00:00:00:000 today
today.setUTCHours(0);
today.setUTCMinutes(0);
today.setUTCSeconds(0);
today.setUTCMilliseconds(0);


// https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/gantt/demo/with-navigation
// https://www.highcharts.com/docs/gantt/gantt-axis-grid

var chartColors = ["#D99177", "#645D73", "#F2DBCE", "#467F71", "#3C5973","#003836","#7693A6"];

document.addEventListener('DOMContentLoaded', function(){
// THE CHART
    Highcharts.ganttChart('timelineChart_hc', {
    // title: {
    //     text: 'Experience Timeline'
    // },

    xAxis: {
        type: 'datetime',
        min : Date.UTC(2008, 0, 1),
        max : Date.UTC(2020, 11, 31),
        tickInterval :  3 * 30 * 24 * 3600 * 1000,
        dateTimeLabelFormats: { // don't display the dummy year
            // month: '%e. %b',
            year: '%Y'
        },
        visible: false,
    },

    tooltip: 
    {
        pointFormat: '<b>{point.type}</b> <br> {point.place} <br>{point.name} <br> Start: {point.start:%B\ %Y} <br> End: {point.end:%B\ %Y}'
    },
    
    series: [
            {
            name: 'Analysis',
            data: [
                {
                name: 'Analysis',
                id: 'analysis',
                // start: Date.UTC(2008, 8, 1),
                // end: today.getTime()
                color: chartColors[3],
                collapsed: true
                },
                {
                    name: 'BA in Economics, Honors',
                    place: 'UC Berkeley',
                    id: 'UCB',
                    parent: 'analysis',
                    type: "Education/Fellowship",
                    color: chartColors[0],
                    start: Date.UTC(2008, 7, 1),
                    end: Date.UTC(2012, 4, 30),

                },
                {
                    name: 'Master in Public Policy',
                    place: 'University of Southern California',
                    id: 'USC',
                    parent: 'analysis',
                    type: "Education/Fellowship",
                    color: chartColors[0],
                    start: Date.UTC(2012, 7, 1),
                    end: Date.UTC(2014, 4, 30)
                    
                },
                {
                    name: 'Data Analyst',
                    place: 'Neighborhood Academic Initiative',
                    id: 'NAI',
                    parent: 'analysis',
                    type: "Work",
                    color: chartColors[1],
                    start: Date.UTC(2013, 7, 1),
                    end: Date.UTC(2014, 5, 30)
                },
                {
                    name: 'Analyst to Senior Analyst',
                    place: 'Management Partners',
                    id: 'MPI',
                    parent: 'analysis',
                    type: "Work",
                    color: chartColors[1],
                    start: Date.UTC(2014, 6, 1),
                    end: Date.UTC(2018, 7, 30)
                }
                ]
        },
        {
            name: 'Data Analytics and Visualization',
            data: [
                {
                name: 'Data Analytics and Visualization',
                id: 'Data and Viz',
                // start: Date.UTC(2008, 8, 1),
                // end: today.getTime()
                color: chartColors[4],
                collapsed: true
                },
                {
                    name: 'BA in Economics, Honors',
                    place: 'UC Berkeley',
                    id: 'UCB',
                    parent: 'Data and Viz',
                    type: "Education/Fellowship",
                    color: chartColors[0],
                    start: Date.UTC(2011, 7, 1),
                    end: Date.UTC(2012, 4, 30)
                },
                {
                    name: 'Master in Public Policy',
                    place: 'University of Southern California',
                    id: 'USC',
                    parent: 'Data and Viz',
                    type: "Education/Fellowship",
                    color: chartColors[0],
                    start: Date.UTC(2012, 7, 1),
                    end: Date.UTC(2014, 4, 30)
                },
                {
                    name: 'Data Analyst',
                    place: 'Neighborhood Academic Initiative',
                    id: 'NAI',
                    parent: 'Data and Viz',
                    type: "Work",
                    color: chartColors[1],
                    start: Date.UTC(2013, 7, 1),
                    end: Date.UTC(2014, 5, 30)
                },
                {
                    name: 'Analyst to Senior Analyst',
                    place: 'Management Partners',
                    id: 'MPI',
                    parent: 'Data and Viz',
                    type: "Work",
                    color: chartColors[1],
                    start: Date.UTC(2014, 6, 1),
                    end: Date.UTC(2018, 7, 30)
                },
                {
                    name: 'Senior Analyst to Project Manager',
                    place: 'Management Partners',
                    id: 'MPII',
                    parent: 'Data and Viz',
                    type: "Work",
                    color: chartColors[1],
                    start: Date.UTC(2019, 9, 1),
                    end: today.getTime()
                },
                {
                    name: 'Analytics and Visualization Certification',
                    place: 'UC Berkeley Extension',
                    id: 'UCBE',
                    parent: 'Data and Viz',
                    type: "Education/Fellowship",
                    color: chartColors[0],
                    start: Date.UTC(2019, 9, 1),
                    end: Date.UTC(2020, 4, 30)
                }
                ]
        },
        {
            name: 'Project Management',
            data: [
                {
                name: 'Project Management',
                id: 'PM',
                // start: Date.UTC(2008, 8, 1),
                // end: today.getTime()
                color: chartColors[5],
                collapsed: true
                },
                {
                    name: 'Director of Youth Camps',
                    place: 'Youth Leadership America',
                    id: 'YLAI',
                    parent: 'PM',
                    type: "Volunteer",
                    color: chartColors[2],
                    start: Date.UTC(2011, 8, 1),
                    end: Date.UTC(2015, 5,30)
                },
                {
                    name: 'Analyst to Senior Analyst',
                    place: 'Management Partners',
                    id: 'MPI',
                    parent: 'PM',
                    type: "Work",
                    color: chartColors[1],
                    start: Date.UTC(2016, 6, 1),
                    end: Date.UTC(2018, 5, 30)
                },
                {
                    name: 'Project Manager',
                    place: 'Seed Academy',
                    id: 'SEED',
                    parent: 'PM',
                    type: "Volunteer",
                    color: chartColors[2],
                    start: Date.UTC(2018, 2, 1),
                    end: Date.UTC(2018, 6, 30)
                },
                {
                    name: 'Manager of Strategic Initiatives',
                    place: 'ACE Charter Schools',
                    id: 'ACE',
                    parent: 'PM',
                    type: "Work",
                    color: chartColors[1],
                    start: Date.UTC(2018, 5, 1),
                    end: Date.UTC(2019, 6, 30)
                },
                {
                    name: 'Senior Analyst to Project Manager',
                    place: 'Management Partners',
                    id: 'MPII',
                    parent: 'PM',
                    type: "Work",
                    color: chartColors[1],
                    start: Date.UTC(2019, 10, 1),
                    end: today.getTime()
                }

                ]
        },
        {
            name: 'Organizational Strategy',
            data: [
                {
                name: 'Organizational Strategy',
                id: 'OS',
                // start: Date.UTC(2008, 8, 1),
                // end: today.getTime()
                color: chartColors[6],
                collapsed: true
                },
                {
                    name: 'Board Member and Treasurer',
                    place: 'Youth Leadership America',
                    id: 'YLAII',
                    parent: 'OS',
                    type: "Volunteer",
                    color: chartColors[2],
                    start: Date.UTC(2015, 5, 1),
                    end: Date.UTC(2019, 4, 30)
                },
                {
                    name: 'Manager of Strategic Initiatives',
                    place: 'ACE Charter Schools',
                    id: 'ACE',
                    parent: 'OS',
                    type: "Work",
                    color: chartColors[1],
                    start: Date.UTC(2018, 5, 1),
                    end: Date.UTC(2019, 6, 30)
                },
                {
                    name: 'Senior Analyst to Project Manager',
                    place: 'Management Partners',
                    id: 'MPII',
                    parent: 'OS',
                    type: "Work",
                    color: chartColors[1],
                    start: Date.UTC(2019, 10, 1),
                    end: today.getTime()
                },
                ]
        },
]
    }).reflow();
});