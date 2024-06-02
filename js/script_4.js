// Get the table and buttons
const table = document.getElementById('myTable');
const calculateTotalButton = document.getElementById('calculateTotal');
const calculateTotalSumButton = document.getElementById('calculateTotalSum');
const calculateTotalAverageButton = document.getElementById('calculateTotalAverage');
const outputArea = document.getElementById('outputArea');

// Function to calculate total for each row
function calculateTotal() {
    const tableBody = document.getElementById('tableBody');
    const rows = tableBody.rows;
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const p1 = parseInt(row.cells[2].textContent);
        const p2 = parseInt(row.cells[3].textContent);
        const p3 = parseInt(row.cells[4].textContent);
        const total = p1 + p2 * p3;
        row.cells[5].textContent = total.toString();
    }
}

// Function to calculate total sum
function calculateTotalSum() {
    let sum = 0;
    const tableBody = document.getElementById('tableBody');
    const rows = tableBody.rows;
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const total = parseInt(row.cells[5].textContent);
        sum += total;
    }
    outputArea.value = `Total Sum: ${sum}`;
}

// Function to calculate total average
function calculateTotalAverage() {
    let sum = 0;
    let count = 0;
    const tableBody = document.getElementById('tableBody');
    const rows = tableBody.rows;
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const total = parseInt(row.cells[5].textContent);
        sum += total;
        count++;
    }
    outputArea.value = `Total Average: ${sum / count}`;
}



// Function to save table to JSON file
function saveToJson() {
    const tableBody = document.getElementById('tableBody');
    const rows = tableBody.rows;
    const data = [];
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const date = row.cells[0].textContent;
        const id = parseInt(row.cells[1].textContent);
        const p1 = parseInt(row.cells[2].textContent);
        const p2 = parseInt(row.cells[3].textContent);
        const p3 = parseInt(row.cells[4].textContent);
        const total = parseInt(row.cells[5].textContent);
        data.push({ date, id, p1, p2, p3, total });
    }
    const json = JSON.stringify(data, null, 2);
    const file = new Blob([json], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(file);
    link.download = 'day4.json';
    link.click();
}
// Load the data
d3.json("day4.json").then((data) => {
  // Set up the SVG
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };
  const width = 500 - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;

  const svg = d3.select("body")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // Scale the data
  const xScale = d3.scaleBand()
    .domain(data.map((d) => d.id))
    .range([0, width])
    .padding(0.2);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, (d) => d.total)])
    .range([height, 0]);

  // Add the bars
  svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d) => xScale(d.id))
    .attr("y", (d) => yScale(d.total))
    .attr("width", xScale.bandwidth())
    .attr("height", (d) => height - yScale(d.total));

  // Add the axes
  svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(xScale));

  svg.append("g")
    .call(d3.axisLeft(yScale));
});
// Add event listeners
calculateTotalButton.addEventListener('click', calculateTotal);
calculateTotalSumButton.addEventListener('click', calculateTotalSum);
calculateTotalAverageButton.addEventListener('click', calculateTotalAverage);
document.getElementById('saveToJson').addEventListener('click', saveToJson);
