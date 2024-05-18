function calculateTotal(p1, p2, p3) {
    return (p1 + p2) * p3;
}

function calculateGrandTotal() {
    let totalCells = document.querySelectorAll("#editableTable tbody tr td:nth-child(5)");
    let grandTotal = 0;

    totalCells.forEach(cell => {
        grandTotal += parseFloat(cell.textContent);
    });

    document.getElementById("grandTotal").value = grandTotal;
}

function saveTable() {
    let tableData = [];
    document.querySelectorAll("#editableTable tbody tr").forEach(row => {
        let rowData = {
            product: row.cells[0].textContent,
            p1: parseInt(row.cells[1].textContent),
            p2: parseInt(row.cells[2].textContent),
            p3: parseInt(row.cells[3].textContent),
            total: parseFloat(row.cells[4].textContent)
        };
        tableData.push(rowData);
    });

    // Convert tableData to JSON and save it to a local file (e.g., day5.json)
    let jsonData = JSON.stringify(tableData);
    // Code to save jsonData to a local file using File API or any other suitable method
}

// Create the table with initial data
// Code to add rows dynamically with editable cells and calculate total on input change
