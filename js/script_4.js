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
        const p1 = parseInt(row.cells[3].textContent);
        const p2 = parseInt(row.cells[4].textContent);
        const p3 = parseInt(row.cells[5].textContent);
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
        const producto = row.cells[2].textContent;
        const p1 = parseInt(row.cells[3].textContent);
        const p2 = parseInt(row.cells[4].textContent);
        const p3 = parseInt(row.cells[5].textContent);
        const total = parseInt(row.cells[6].textContent);
        data.push({ date, id, producto, p1, p2, p3, total });
    }
    const json = JSON.stringify(data, null, 2);
    const file = new Blob([json], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(file);
    link.download = 'day4.json';
    link.click();
}
// Add event listeners
calculateTotalButton.addEventListener('click', calculateTotal);
calculateTotalSumButton.addEventListener('click', calculateTotalSum);
calculateTotalAverageButton.addEventListener('click', calculateTotalAverage);
document.getElementById('saveToJson').addEventListener('click', saveToJson);

