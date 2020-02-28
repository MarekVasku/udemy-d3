/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.4 - Adding SVGs with D3
*/

var svg = d3.select("#chart-area").append("svg")
	.attr("width", 600)
	.attr("height", 700);

var circle = svg.append("circle")
	.attr("cx", 100)
	.attr("cy", 250)
	.attr("r", 100)
	.attr("fill", "purple");