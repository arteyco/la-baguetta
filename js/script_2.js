function calculateTotalSum() {
  const table = document.getElementById('product-table');
  let sum = 0;

  for (let i = 1; i < table.rows.length; i++) {
    const total = parseFloat(table.rows[i].cells[5].innerHTML);
    sum += total;
  }

  document.getElementById('total-sum').value = sum.toFixed(2);
}

document.getElementById('calculate-sum-btn').addEventListener('click', calculateTotalSum);
