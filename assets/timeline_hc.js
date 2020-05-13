var today = new Date(),
  day = 1000 * 60 * 60 * 24;

// Set to 00:00:00:000 today
today.setUTCHours(0);
today.setUTCMinutes(0);
today.setUTCSeconds(0);
today.setUTCMilliseconds(0);

var startScale = new Date("2008-08-30");
var endScale = new Date(Date.now());


// https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/gantt/demo/with-navigation
// https://www.highcharts.com/docs/gantt/gantt-axis-grid



document.addEventListener('DOMContentLoaded', function(){
// THE CHART
    Highcharts.ganttChart('timelineChart_hc', {
    title: {
        text: 'Highcharts Gantt With Subtasks'
    },


    xAxis: {
        type: 'datetime',
        min : Date.UTC(2008, 9, 1),
        max : Date.UTC(2020, 9, 1),
        tickInterval : 3 * 30 * 24 * 3600 * 1000,
        dateTimeLabelFormats: { // don't display the dummy year
            // month: '%e. %b',
            year: '%b'
        },
        title: {
            text: 'Date'
        }
    },

    // xAxis: {
    //     min: startScale.getTime() - (2 * day),
    //     max: endScale.getTime() + (32 * day)
    // },
    series: [
        {
            name: 'Analysis',
                data: [
                    {
                    name: 'Analysis',
                    id: 'Analysis',
                    start: Date.UTC(2008, 8, 1),
                    end: today.getTime()
                    },
                    {
                        name: 'BA in Economics, Honors',
                        id: 'education',
                        parent: 'Analysis',
                        start: Date.UTC(2008, 8, 1),
                        end: Date.UTC(2012, 5, 30)
                    },
                    {
                        name: 'Master in Public Policy',
                        id: 'education',
                        parent: 'Analysis',
                        start: Date.UTC(2012, 8, 1),
                        end: Date.UTC(2014, 5, 30)
                    },
                    {
                        name: 'Data Analyst at NAI',
                        id: 'work',
                        parent: 'Analysis',
                        start: Date.UTC(2013, 8, 1),
                        end: Date.UTC(2014, 6, 30)
                    },
                    {
                        name: 'Analyst to Senior Analyst at MP',
                        id: 'work',
                        parent: 'Analysis',
                        start: Date.UTC(2014, 7, 1),
                        end: Date.UTC(2018, 8, 30)
                    }
                 ],
        // name: 'Data and Visualization',
        // data: [{
        // name: 'Planning',
        // id: 'planning',
        // start: today.getTime(),
        // end: today.getTime() + (20 * day)
        // }, {
        // name: 'Requirements',
        // id: 'requirements',
        // parent: 'planning',
        // start: today.getTime(),
        // end: today.getTime() + (5 * day)
        // }, {
        // name: 'Design',
        // id: 'design',
        // dependency: 'requirements',
        // parent: 'planning',
        // start: today.getTime() + (6 * day),
        // end: today.getTime() + (20 * day)
        // }, {
        // name: 'Layout',
        // id: 'layout',
        // parent: 'design',
        // start: today.getTime() + (3 * day),
        // end: today.getTime() + (10 * day)
        // },
        // ],
        // name: 'Project Management',
        // data: [{
        // name: 'Planning',
        // id: 'planning',
        // start: today.getTime(),
        // end: today.getTime() + (20 * day)
        // }, {
        // name: 'Requirements',
        // id: 'requirements',
        // parent: 'planning',
        // start: today.getTime(),
        // end: today.getTime() + (5 * day)
        // }, {
        // name: 'Design',
        // id: 'design',
        // dependency: 'requirements',
        // parent: 'planning',
        // start: today.getTime() + (6 * day),
        // end: today.getTime() + (20 * day)
        // }, {
        // name: 'Layout',
        // id: 'layout',
        // parent: 'design',
        // start: today.getTime() + (3 * day),
        // end: today.getTime() + (10 * day)
        // },
        // ],
        // name: 'Strategy',
        // data: [{
        // name: 'Planning',
        // id: 'planning',
        // start: today.getTime(),
        // end: today.getTime() + (20 * day)
        // }, {
        // name: 'Requirements',
        // id: 'requirements',
        // parent: 'planning',
        // start: today.getTime(),
        // end: today.getTime() + (5 * day)
        // }, {
        // name: 'Design',
        // id: 'design',
        // dependency: 'requirements',
        // parent: 'planning',
        // start: today.getTime() + (6 * day),
        // end: today.getTime() + (20 * day)
        // }, {
        // name: 'Layout',
        // id: 'layout',
        // parent: 'design',
        // start: today.getTime() + (3 * day),
        // end: today.getTime() + (10 * day)
        // },
        // ]
        
    },

]
    });
});