let products = []; // Array to store product data

// Function to add a new row to the table
function addRow() {
    const tableBody = document.getElementById("productTable").getElementsByTagName("tbody")[0];
    const newRow = tableBody.insertRow();

    // Create cells for each column
    let cell, input;
    for (let i = 0; i < 5; i++) {
        cell = newRow.insertCell();
        if (i < 4) { // Editable columns (Product, P1, P2, P3)
            input = document.createElement("input");
            input.type = i === 0 ? "text" : "number"; // Text for product, number for others
            input.addEventListener('input', calculateRowTotal); // Calculate total on input change
            cell.appendChild(input);
        } else { // Total column (read-only)
            input = document.createElement("span");
            cell.appendChild(input);
        }
    }

    products.push({ product: "", p1: 0, p2: 0, p3: 0, total: 0 }); // Add new product to data array
}

// Function to calculate the total for a row
function calculateRowTotal(event) {
    const row = event.target.parentNode.parentNode; // Get the row containing the changed input

    // Get values from the row
    const product = row.cells[0].firstChild.value;
    const p1 = parseFloat(row.cells[1].firstChild.value) || 0;
    const p2 = parseFloat(row.cells[2].firstChild.value) || 0;
    const p3 = parseFloat(row.cells[3].firstChild.value) || 0;

    // Update the total in the respective data object
    const rowIndex = Array.from(row.parentNode.children).indexOf(row);
    products[rowIndex] = { product, p1, p2, p3, total: (p1 + p2) * p3 };

    // Update the total cell in the row
    row.cells[4].firstChild.textContent = products[rowIndex].total;
}

// Function to calculate the grand total
function calculateGrandTotal() {
    const grandTotal = products.reduce((sum, product) => sum + product.total, 0);
    document.getElementById("grandTotalArea").value = grandTotal;
}

// In script.js
function saveTable() {
    const jsonData = JSON.stringify(products);
    fetch('/save', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: jsonData
    })
    .then(response => response.text())
    .then(message => alert(message))
    .catch(error => console.error('Error saving data:', error));
}


// Initialize the table with a row
addRow();
