// Initial data (load from day4.json if it exists)
let tableData = [
  { product: "Blandito", p1: 10, p2: 5, p3: 2, total: 0 },
  { product: "baguette", p1: 15, p2: 8, p3: 3, total: 0 },
]; 

// Function to populate the table with data
function populateTable() {
  const tbody = document.querySelector("#productTable tbody");
  tbody.innerHTML = ''; // Clear existing content

  tableData.forEach((row, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><input type="text" value="${row.product}"></td>
      <td><input type="number" value="${row.p1}" onchange="calculateRowTotal(${index})"></td>
      <td><input type="number" value="${row.p2}" onchange="calculateRowTotal(${index})"></td>
      <td><input type="number" value="${row.p3}" onchange="calculateRowTotal(${index})"></td>
      <td><input type="text" value="${row.total}" readonly></td>
    `;
    tbody.appendChild(tr);
  });
}

// Function to calculate the total for a row
function calculateRowTotal(rowIndex) {
  const row = tableData[rowIndex];
  const rowInputs = document.querySelectorAll(`#productTable tbody tr:nth-child(${rowIndex + 1}) input`);
  row.p1 = parseInt(rowInputs[1].value);
  row.p2 = parseInt(rowInputs[2].value);
  row.p3 = parseInt(rowInputs[3].value);
  row.total = (row.p1 + row.p2) * row.p3;
  rowInputs[4].value = row.total; 
}

// Function to calculate the grand total
function calculateGrandTotal() {
  let grandTotal = 0;
  tableData.forEach(row => {
    grandTotal += row.total;
  });
  document.getElementById("grandTotalArea").value = grandTotal;
}

// Function to save the table data to day4.json
function saveTable() {
  // Update tableData with the latest input values
  const rows = document.querySelectorAll("#productTable tbody tr");
  tableData = [];
  rows.forEach(row => {
    const inputs = row.querySelectorAll("input");
    tableData.push({
      product: inputs[0].value,
      p1: parseInt(inputs[1].value),
      p2: parseInt(inputs[2].value),
      p3: parseInt(inputs[3].value),
      total: parseInt(inputs[4].value)
    });
  });

  const jsonData = JSON.stringify(tableData);

  // Use fetch API or other methods to save jsonData to day4.json
  // Here's a simple example using Fetch:
  fetch('day4.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: jsonData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data saved successfully:', data);
  })
  .catch(error => {
    console.error('Error saving data:', error);
  });
}

// Call populateTable to initially load the table
populateTable();

// ... (AI Chat functionality using LangChain in ai_chat.py)// Initial data (load from day4.json if it exists)
let tableData = [
  { product: "Product A", p1: 10, p2: 5, p3: 2, total: 0 },
  { product: "Product B", p1: 15, p2: 8, p3: 3, total: 0 },
]; 

// Function to populate the table with data
function populateTable() {
  const tbody = document.querySelector("#productTable tbody");
  tbody.innerHTML = ''; // Clear existing content

  tableData.forEach((row, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><input type="text" value="${row.product}"></td>
      <td><input type="number" value="${row.p1}" onchange="calculateRowTotal(${index})"></td>
      <td><input type="number" value="${row.p2}" onchange="calculateRowTotal(${index})"></td>
      <td><input type="number" value="${row.p3}" onchange="calculateRowTotal(${index})"></td>
      <td><input type="text" value="${row.total}" readonly></td>
    `;
    tbody.appendChild(tr);
  });
}

// Function to calculate the total for a row
function calculateRowTotal(rowIndex) {
  const row = tableData[rowIndex];
  const rowInputs = document.querySelectorAll(`#productTable tbody tr:nth-child(${rowIndex + 1}) input`);
  row.p1 = parseInt(rowInputs[1].value);
  row.p2 = parseInt(rowInputs[2].value);
  row.p3 = parseInt(rowInputs[3].value);
  row.total = (row.p1 + row.p2) * row.p3;
  rowInputs[4].value = row.total; 
}

// Function to calculate the grand total
function calculateGrandTotal() {
  let grandTotal = 0;
  tableData.forEach(row => {
    grandTotal += row.total;
  });
  document.getElementById("grandTotalArea").value = grandTotal;
}

// Function to save the table data to day4.json
function saveTable() {
  // Update tableData with the latest input values
  const rows = document.querySelectorAll("#productTable tbody tr");
  tableData = [];
  rows.forEach(row => {
    const inputs = row.querySelectorAll("input");
    tableData.push({
      product: inputs[0].value,
      p1: parseInt(inputs[1].value),
      p2: parseInt(inputs[2].value),
      p3: parseInt(inputs[3].value),
      total: parseInt(inputs[4].value)
    });
  });

  const jsonData = JSON.stringify(tableData);

  // Use fetch API or other methods to save jsonData to day4.json
  // Here's a simple example using Fetch:
  fetch('day4.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: jsonData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data saved successfully:', data);
  })
  .catch(error => {
    console.error('Error saving data:', error);
  });
}

// Call populateTable to initially load the table
populateTable();

// ... (AI Chat functionality using LangChain in ai_chat.py)
