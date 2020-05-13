
function drawChart() {

  var svgArea = d3.select("body").select("svg");
 
  if (!svgArea.empty()) {
    $('#timelineChart_rect').empty();
  }
  var svgWidth =  $("#timelineChart_rect").width();
  var svgHeight =  $("#timelineChart_rect").height();
  
  console.log(svgWidth);
  console.log(svgHeight);

  var margin = {
    top: 20,
    right: 40,
    bottom: 125,
    left: 125
  };
  
  var width = svgWidth - margin.left - margin.right;
  var height = svgHeight - margin.top - margin.bottom;

  var svg = d3
  .select("#timelineChart_rect")
  .append("svg")
  .attr('id','Chart')
  .attr("width", svgWidth).attr("height", svgHeight);

  var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`)


  d3.json("data/timeline_chrono.json").then(function(data, err) {
    // d3.json("https://raw.githubusercontent.com/hanesy/hanesy.github.io/master/data/timeline_chrono.json").then(function(data, err) {
      if (err) throw err;

      function convertToTimeStamp(date) {
        let parts = date.match(/(\d{4})-(\d{2})/);
        return new Date(parts[1]+ '-'+parts[2]+'-01').getTime();
      }

      var min_date;
      var max_date;
      var num_data = 0;

      data.forEach(function(d) {
        test_date_A = convertToTimeStamp(d.startDate);
        test_date_B = convertToTimeStamp(d.endDate);

        if (! min_date){
          min_date = test_date_A;
        }
        else if (test_date_A < min_date){
          min_date = test_date_A;
        }

        if (! max_date){
          max_date = test_date_B;
        }
        else if (test_date_A > max_date){
          max_date = test_date_B;
        }

        num_data = num_data+1;
      });

      var xLinearScale = d3.scaleLinear()
      .domain([min_date, max_date*1.15])
      .range([0, width]); 

      var yLinearScale = d3.scaleLinear()
      .domain([0,num_data])
      .range([0, height]); 

      console.log(num_data);

      function getWidth(data){
        unscaled_end = convertToTimeStamp(data.endDate);
        scaled_end = xLinearScale(unscaled_end);

        unscaled_start = convertToTimeStamp(data.startDate);
        scaled_start = xLinearScale(unscaled_start);
        
        bar_width = scaled_end-scaled_start;
        
        return bar_width;
      }

      var rectGroup = chartGroup.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", d => d.category.toLowerCase())
      .attr("width",  d => getWidth(d))
      .attr("height", 10)
      .attr("x", d => xLinearScale(convertToTimeStamp(d.startDate)))
      .attr("y", d => yLinearScale(d.id))
      .style('opacity', 0.5);
    
      var textGroup = chartGroup.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("class", d => d.category.toLowerCase())
      .text(d => `${d.name}`)
      .attr("x", d => xLinearScale(convertToTimeStamp(d.startDate)))
      .attr("y", d => yLinearScale(d.id))
      .attr("font-size", `12px`)
      
      var toolTip = d3.tip()
      .attr("class", "d3-tip")
      .direction('s')
      // .offset([0, 0])
      .html(function(d) {
          return (`<strong>${(d.name)}</strong> <br> 
                  From ${(d.startDate)} to ${(d.endDate)}<br>
                  at ${(d.placeName)}<br> - <br>
                  <strong>Skills</strong> <br> 
                   ${(d.skills.join("<br>"))}`);
      });


      // function returnSkills(data){
      //   skills_list = data.skills;

      //   skillslist.ForEach

      //   return skills_text
      // }

    chartGroup.call(toolTip);
    rectGroup
    .on("mouseover", function(d) {
      d3.select(this)
      .attr("width",  d => getWidth(d)*1.25)
      .attr("height", 10*1.25)
      .style('opacity', 1);
      toolTip.show(d, this);
      })
    
    .on("mouseout", function(d) {
      d3.select(this)
      .attr("width",  d => getWidth(d))
      .attr("height", 10)
      .style('opacity', 0.5);
      toolTip.hide(d);
    });


    

    
    
    });

    
}






document.addEventListener('DOMContentLoaded', function(){
  drawChart();
});

window.addEventListener('resize', drawChart);