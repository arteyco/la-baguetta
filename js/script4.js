// Calculate the total for a row
function calculateTotal(p1, p2, p3) {
  return (p1 + p2) * p3;
}

// Calculate the grand total of all rows
function calculateGrandTotal() {
  let grandTotal = 0;
  for (let i = 0; i < 5; i++) {
    const p1 = parseInt(document.getElementById(`p1-${i}`).value);
    const p2 = parseInt(document.getElementById(`p2-${i}`).value);
    const p3 = parseInt(document.getElementById(`p3-${i}`).value);
    const total = calculateTotal(p1, p2, p3);
    grandTotal += total;
  }
  return grandTotal;
}

// Update the total column and grand total
function updateTotals() {
  for (let i = 0; i < 5; i++) {
    const p1 = parseInt(document.getElementById(`p1-${i}`).value);
    const p2 = parseInt(document.getElementById(`p2-${i}`).value);
    const p3 = parseInt(document.getElementById(`p3-${i}`).value);
    const total = calculateTotal(p1, p2, p3);
    document.getElementById(`total-${i}`).textContent = total.toFixed(2);
  }

  const grandTotal = calculateGrandTotal();
  document.getElementById("grand-total").value = grandTotal.toFixed(2);
}

// Save the table to a local file
function saveTable() {
  const table = [];
  for (let i = 0; i < 5; i++) {
    const product = document.getElementById(`product-${i}`).value;
    const p1 = parseInt(document.getElementById(`p1-${i}`).value);
    const p2 = parseInt(document.getElementById(`p2-${i}`).value);
    const p3 = parseInt(document.getElementById(`p3-${i}`).value);
    const total = parseFloat(document.getElementById(`total-${i}`).textContent);
    table.push({ product, p1, p2, p3, total });
  }

  const json = JSON.stringify(table);
  localStorage.setItem("day5", json);
}

// Load the table from the local file
function loadTable() {
  const json = localStorage.getItem("day5");
  if (json) {
    const table = JSON.parse(json);
    for (let i = 0; i < 5; i++) {
      document.getElementById(`product-${i}`).value = table[i].product;
      document.getElementById(`p1-${i}`).value = table[i].p1;
      document.getElementById(`p2-${i}`).value = table[i].p2;
      document.getElementById(`p3-${i}`).value = table[i].p3;
      document.getElementById(`total-${i}`).textContent = table[i].total.toFixed(2);
    }
    updateTotals();
  }
}

// Add event listeners
document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", updateTotals);
});

document.getElementById("save-table").addEventListener("click", saveTable);

// Load the table on page load
loadTable();
