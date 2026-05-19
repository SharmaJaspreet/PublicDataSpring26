const width = 800;
const height = 500;

const margin = {
    top: 50,
    right: 50,
    bottom: 50,
    left: 60
};

const svg = d3.select("svg");

d3.csv("data.csv").then(data => {

    // convert strings to numbers
    data.forEach(d => {
        d.month = +d.month;
        d.bench = +d.bench;
        d.squat = +d.squat;
    });

    // x scale
    const xScale = d3.scaleLinear()
        .domain(d3.extent(data, d => d.month))
        .range([margin.left, width - margin.right]);

    // y scale
    const yScale = d3.scaleLinear()
        .domain([100, 260])
        .range([height - margin.bottom, margin.top]);

    // x axis
    const xAxis = d3.axisBottom(xScale)
        .ticks(5)
        .tickFormat(d3.format("d"));

    // y axis
    const yAxis = d3.axisLeft(yScale);

    // add x axis
    svg.append("g")
        .attr("transform",
            `translate(0, ${height - margin.bottom})`)
        .call(xAxis);

    // add y axis
    svg.append("g")
        .attr("transform",
            `translate(${margin.left},0)`)
        .call(yAxis);

    // bench line
    const benchLine = d3.line()
        .x(d => xScale(d.month))
        .y(d => yScale(d.bench));

    svg.append("path")
        .datum(data)
        .attr("class", "bench-line")
        .attr("d", benchLine);

    // squat line
    const squatLine = d3.line()
        .x(d => xScale(d.month))
        .y(d => yScale(d.squat));

    svg.append("path")
        .datum(data)
        .attr("class", "squat-line")
        .attr("d", squatLine);

    // title
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", 30)
        .attr("text-anchor", "middle")
        .attr("class", "title")
        .text("Gym Strength Progress");

    // x axis label
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", height - 10)
        .attr("text-anchor", "middle")
        .attr("class", "axis-label")
        .text("Month");

    // y axis label
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -height / 2)
        .attr("y", 20)
        .attr("text-anchor", "middle")
        .attr("class", "axis-label")
        .text("Weight Lifted (lbs)");

    // legend

    svg.append("circle")
        .attr("cx", 620)
        .attr("cy", 70)
        .attr("r", 6)
        .style("fill", "steelblue");

    svg.append("text")
        .attr("x", 635)
        .attr("y", 75)
        .text("Bench Press")
        .style("font-size", "14px");

    svg.append("circle")
        .attr("cx", 620)
        .attr("cy", 95)
        .attr("r", 6)
        .style("fill", "tomato");

    svg.append("text")
        .attr("x", 635)
        .attr("y", 100)
        .text("Squat")
        .style("font-size", "14px");

});