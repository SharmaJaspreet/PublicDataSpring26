// Set SVG dimensions
const width = 700;
const height = 500;
const margin = { top: 40, right: 40, bottom: 60, left: 60 };

// Select SVG
const svg = d3.select("svg");

// Load CSV data
d3.csv("data.csv").then(function(data) {

    // Convert string values to numbers
    data.forEach(function(d) {
        d.CommuteMinutes = +d.CommuteMinutes;
        d.Happiness = +d.Happiness;
    });

    // Create x scale
    const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.CommuteMinutes)])
        .range([margin.left, width - margin.right]);

    // Create y scale
    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.Happiness)])
        .range([height - margin.bottom, margin.top]);

    // Create x axis
    svg.append("g")
        .attr("transform", `translate(0, ${height - margin.bottom})`)
        .call(d3.axisBottom(xScale));

    // Create y axis
    svg.append("g")
        .attr("transform", `translate(${margin.left}, 0)`)
        .call(d3.axisLeft(yScale));

    // Create circles
    svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", d => xScale(d.CommuteMinutes))
        .attr("cy", d => yScale(d.Happiness))
        .attr("r", 6);

    // Add x-axis label
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", height - 10)
        .attr("text-anchor", "middle")
        .text("Commute Time (Minutes)");

    // Add y-axis label
    svg.append("text")
        .attr("x", -height / 2)
        .attr("y", 20)
        .attr("transform", "rotate(-90)")
        .attr("text-anchor", "middle")
        .text("Happiness Score");
});