
document.addEventListener('DOMContentLoaded', function(){
  drawChart();
});

window.addEventListener('resize', drawChart);

function drawChart() {
  var svgArea = d3.select("body").select("svg");
 
  if (!svgArea.empty()) {
    $('#timelineChart').empty();
    // d3.select("svg").remove();
    // d3.select("#timelineChart").children('div').remove();
    // document.getElementById('#timelineChart').innerHTML("");
    // console.log("remove");
  }

  var svgWidth = window.innerWidth;
  var svgHeight = window.innerHeight*.5;
 
  var svg = d3
    .select("#timelineChart").append("svg")
    .attr('id','Chart').attr("width", svgWidth).attr("height", svgHeight);
  
  svg.append('line').attr('class', 'timeline-base')
    .attr("x1", 0)
    .attr("y1", '50%')
    .attr("x2", '100%')
    .attr("y2", '50%');

  // console.log("drew line")
  
  // d3.json("data/timeline.json").then(function(data) {
    d3.json("https://raw.githubusercontent.com/hanesy/hanesy.github.io/master/data/timeline.json").then(function(data) {

      let allGroups = svg.selectAll('g').data(data);
      let group = allGroups.enter().append('g').attr('id', function(data){return 'group-' + data.id});

      // console.log(group);

      function getLineVal(val) {
        if(val === 'max') {
          let el = document.getElementById('Chart');
          return el.getBoundingClientRect().width;
          
        }
        else {
          return 0;
        }
      }

      // console.log(`Max width: ${getLineVal('max')}`);

      var startScale = new Date("2008-08-30");
      var endScale = new Date(Date.now());
      endScale.setFullYear(endScale.getFullYear()+1);


      // Convert to UNIX timestamp
      function convertToTimeStamp(date) {
        let parts = date.match(/(\d{4})-(\d{2})/);
        return new Date(parts[1]+ '-'+parts[2]+'-01').getTime();
      }

      let scaleLine = d3.scaleLinear()
      .domain([startScale.getTime(), endScale.getTime()])
      .range([getLineVal('min'), getLineVal('max')]); 

      let scaleCircle = d3.scaleLinear()
      .domain([moment.duration(3,'d').asMilliseconds(), moment.duration(10,'y').asMilliseconds()])
      .range([10, 200]);

      function findMidPoint(data){
        return ((convertToTimeStamp(data.endDate)+convertToTimeStamp(data.startDate))/2)
      }

      function originalCircle(data){
        return ((convertToTimeStamp(data.endDate) - convertToTimeStamp(data.startDate))*.70)
      }

      group.append('circle')
      .attr('cx', function(data) {return scaleLine(findMidPoint(data));})
      .attr('cy', '50%')
      .attr('r', function(data) {return scaleCircle(originalCircle(data));})
      .attr('fill-opacity', 0.5)
      .attr('class', function(data) { return('circle-category circle-' + data.category.toLowerCase())})
      .attr('id', function(data) {
        return 'circle-' + data.id
      })
      // When hover a circle
      .on('mouseover', function(d, i) {
        d3.select(this).attr('r', function(data) {return scaleCircle(convertToTimeStamp(data.endDate) - convertToTimeStamp(data.startDate));});
        d3.select(this).classed('circle-hovered', true);
        d3.select(this.parentNode).selectAll('text').style('opacity', 1);
        // d3.select(this.parentNode).selectAll('.text-place').classed('hovered', true).style('opacity', 0);
        // // d3.select(this.parentNode).selectAll('.text-desc').classed('hovered', true).style('opacity', 0);
        // d3.select(this.parentNode).selectAll('.text-date-end').classed('hovered', true).style('opacity', 0);
      })
      // When un-hover a circle
      .on('mouseout', function(d, i){
        d3.select(this)
        .attr('r', function(data) {return scaleCircle(originalCircle(data));});
        d3.select(this).classed('circle-hovered', false);
        d3.select(this.parentNode).selectAll('text').style('opacity', 0);
      })

    group.append('text')
      .style('opacity', 0)
      .text(function(data) { return(data.name);})
      .attr('x', function(data) {
        let elementWidth = this.getBoundingClientRect().width;
        // Avoid overflow
        if(scaleLine(findMidPoint(data)) + elementWidth >= getLineVal('max')) {
          return scaleLine(findMidPoint(data)) - elementWidth;
        }
        else {
          return scaleLine(findMidPoint(data));
        }
      })
      .attr('y', '60%')
      .attr('class', 'text-position');

    group.append('text')
      .text(function(data) {
      var start = String(data.startDate)
      var end = String(data.endDate)
      var dateString = start + " to " + end
      return (dateString)
    })
    .attr('x', function(data) {
      // Get sibling to have the len and align the date
      let elementWidth= this.getBoundingClientRect().width;
      let positionWidth = this.parentNode.querySelector('text.text-position').getBoundingClientRect().width;
      if(scaleLine(findMidPoint(data)) + positionWidth >= getLineVal('max')) {
        return scaleLine(findMidPoint(data)) - elementWidth;
      }
      else {
        return scaleLine(findMidPoint(data));
      }
    })
    .attr('y', '62%')
    .attr('class', 'text-date')
    .style('opacity', 0);



    // data.map(d => {
    //   let details = d3.select('#timelineChart').append('div').classed('details', true).classed('details-' + d.category.toLowerCase(), true).attr('id', 'details-' + d.id);
    //   details.append('i').classed('material-icons close-icon', true).text('close');
    //   details.append('div').classed('title', true).append('span').classed('date text-date date-title', true).text(d.startDate + ' to ' + d.endDate);
    //   details.select(' .title').append('span').classed('position-title text-position', true).text(d.name);
    //   details.append('div').classed('place-name text-place hovered', true).text(d.placeName);
    //   details.append('div')
    //     .attr('class', 'text-desc')
    //     .attr('id', 'descriptionId-'+ d.id)
    //     .text(function(){
    //       if(typeof(d.description) === 'string') {
    //         return d.description;
    //       }
    //       else {
    //         return d.description.toString()
    //       }
    //     });
    //   details.style('opacity', 0);
    // });
  });
}


// move longer data earlier
// list out the skills and description...
// use a rectangular div?
// color legend