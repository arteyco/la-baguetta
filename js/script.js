 // Initialize table with 3 rows
  const productTableBody = document.getElementById('productTableBody');
  for (let i = 0; i < 3; i++) {
    addRow();
  }

  // Function to add a new row to the table
  function addRow() {
    const newRow = productTableBody.insertRow();

    // Date cell
    const dateCell = newRow.insertCell();
    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateCell.appendChild(dateInput);

    // Product cell
    const productCell = newRow.insertCell();
    const productInput = document.createElement('input');
    productInput.type = 'text';
    productCell.appendChild(productInput);

    // P1, P2, P3 cells (editable)
    for (let i = 1; i <= 3; i++) {
      const cell = newRow.insertCell();
      const input = document.createElement('input');
      input.type = 'number';
      input.addEventListener('input', calculateRowTotal); // Calculate total on input change
      cell.appendChild(input);
    }

    // Total cell (not editable)
    const totalCell = newRow.insertCell();
    totalCell.textContent = '0'; // Initial total
  }

  // Function to calculate the total for a row
  function calculateRowTotal(event) {
    const row = event.target.parentNode.parentNode; // Get the row of the changed input
    const p1 = parseFloat(row.cells[2].querySelector('input').value) || 0;
    const p2 = parseFloat(row.cells[3].querySelector('input').value) || 0;
    const p3 = parseFloat(row.cells[4].querySelector('input').value) || 0;
    const total = (p1 + p2) * p3;
    row.cells[5].textContent = total.toFixed(2); // Update total cell

    calculateGrandTotal(); // Recalculate grand total
  }

  // Function to calculate the grand total
  function calculateGrandTotal() {
    let grandTotal = 0;
    const rows = productTableBody.querySelectorAll('tr');
    rows.forEach(row => {
      grandTotal += parseFloat(row.cells[5].textContent);
    });
    document.getElementById('grandTotalTextArea').value = grandTotal.toFixed(2);
  }

  // Function to save the table data to a JSON file
  function saveTable() {
    const tableData = [];
    const rows = productTableBody.querySelectorAll('tr');
    rows.forEach(row => {
      tableData.push({
        date: row.cells[0].querySelector('input').value,
        product: row.cells[1].querySelector('input').value,
        p1: parseFloat(row.cells[2].querySelector('input').value) || 0,
        p2: parseFloat(row.cells[3].querySelector('input').value) || 0,
        p3: parseFloat(row.cells[4].querySelector('input').value) || 0,
        total: parseFloat(row.cells[5].textContent)
      });
    });

    const jsonData = JSON.stringify(tableData);

    // Here you would typically use a server-side language to handle file saving.
    // For this example, we'll just log the JSON data to the console.
    console.log(jsonData);
    // In a real application, you would send this data to your server to save it.
  }
