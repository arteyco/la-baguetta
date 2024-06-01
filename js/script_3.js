function calculateTotalAverage() {
  const table = document.getElementById('product-table');
  let sum = 0;
  let count = 0;

  for (let i = 1; i < table.rows.length; i++) {
    const total = parseFloat(table.rows[i].cells[5].innerHTML);
    sum += total;
    count++;
  }

  const average = sum / count;
  document.getElementById('total-average').value = average.toFixed(2);
}

document.getElementById('calculate-average-btn').addEventListener('click', calculateTotalAverage);
