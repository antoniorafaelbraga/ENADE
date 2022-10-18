
function inicialization(){
	alert('alert')
	jQuery("#ano").attr('disabled',true);
	jQuery("#tema").attr('disabled',true);
}

$(document).ready(function() {
    $('#curso').change(function() {
		$('#ano').empty();
		$('#ano').append( new Option('','') ); 
        var name = $('#curso').val();
        $.get('Filtragens', {
                curso : name,
                ano: ''
        }, function(responseText) {
			var myOptions = JSON.parse(responseText);
			$.each(myOptions, function(val, text) {
				$('#ano').append( new Option(text,val) ); 
			}); 
        });
    });
});

$(document).ready(function() {
    $('#ano').change(function() {
        var name = $('#curso').val();
        var ano = $('#ano').val();
		$('#tema').empty();
		$('#tema').append( new Option('','') );         
        $.get('Filtragens', {
                curso : name,
                ano: ano
        }, function(responseText) {
			criarGraficoBarras();
			var myOptions = JSON.parse(responseText);
			$.each(myOptions, function(val, text) {
				$('#tema').append( new Option(text,val) ); 
			}); 
        });
    });
});

function criarGraficoBarras(){
	//https://www.educative.io/answers/how-to-create-a-bar-chart-using-d3
	var dataset1 = [33, 57, 84, 21, 80, 33, 10]
				
	var svg = d3.select("svg"),
	            margin = 200,
	            width = svg.attr("width") - margin,
	            height = svg.attr("height") - margin
	
	var xScale = d3.scaleBand().range([0, width]).padding(0.5),
	            yScale = d3.scaleLinear().range([height, 0]);
	
	var g = svg.append("g").attr("transform", "translate(" + 100 + "," + 100 + ")");
	
    xScale.domain(dataset1);
    yScale.domain([0, 100]);

    g.append("g")
     .attr("transform", "translate(0," + height + ")")
     .call(d3.axisBottom(xScale).tickFormat(function(d){
       return "sale: " + d;
     })
     );

    g.append("g")
     .call(d3.axisLeft(yScale).tickFormat(function(d){
         return d + "%";
     }).ticks(4));

   g.selectAll(".bar")
     .data(dataset1)
     .enter().append("rect")
     .attr("class", "bar")
     .attr("x", function(d) { return xScale(d); })
     .attr("y", function(d) { return yScale(d); })
     .attr("width", xScale.bandwidth())
     .attr("height", function(d) { return height - yScale(d); });
}

function criarGraficoPizza(){
	//https://www.educative.io/answers/how-to-create-a-pie-chart-using-d3
    // Step 3
    var svg = d3.select("svg"),
        width = svg.attr("width"),
        height = svg.attr("height"),
        radius = 200;

    // Step 1        
    var data = [{name: "Alex", share: 20.70}, 
                {name: "Shelly", share: 30.92},
                {name: "Clark", share: 15.42},
                {name: "Matt", share: 13.65},
                {name: "Jolene", share: 19.31}];
    
    var g = svg.append("g")
               .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    // Step 4
    var ordScale = d3.scaleOrdinal()
                    	.domain(data)
                    	.range(['#ffd384','#94ebcd','#fbaccc','#d3e0ea','#fa7f72']);

    // Step 5
    var pie = d3.pie().value(function(d) { 
            return d.share; 
        });

    var arc = g.selectAll("arc")
               .data(pie(data))
               .enter();

    // Step 6
    var path = d3.arc()
                 .outerRadius(radius)
                 .innerRadius(0);

    arc.append("path")
       .attr("d", path)
       .attr("fill", function(d) { return ordScale(d.data.name); });

    // Step 7
    var label = d3.arc()
                  .outerRadius(radius)
                  .innerRadius(0);
        
    arc.append("text")
       .attr("transform", function(d) { 
                return "translate(" + label.centroid(d) + ")"; 
        })
       .text(function(d) { return d.data.name; })
       .style("font-family", "arial")
       .style("font-size", 15);	
}


/**
 * 
$(document).ready(function() {
	$('#curso').change(function() {
	    var name = $('#curso').val();
	    $.get('Filtros', {
	    	curso : name
	    }, function(responseText) {
	        $('#ajaxGetUserServletResponse').text(responseText);
	    });
	});
});
 */

/**
 * 
$.getJSON("/Admin/GetFolderList/", function(result) {
    var options = $("#options");
    //don't forget error handling!
    $.each(result, function(item) {
        options.append($("<option />").val(item.ImageFolderID).text(item.Name));
    });
});

var $dropdown = $("#dropdown");
$.each(result, function() {
    $dropdown.append($("<option />").val(this.ImageFolderID).text(this.Name));
});

*/
