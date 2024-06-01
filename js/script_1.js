function calculateTotal() {
  const table = document.getElementById('product-table');
  const totalColumn = table.getElementsByTagName('td')[5];

  let total = 0;
  for (let i = 1; i < table.rows.length; i++) {
    const p1 = parseInt(table.rows[i].cells[2].innerHTML);
    const p2 = parseInt(table.rows[i].cells[3].innerHTML);
    const p3 = parseInt(table.rows[i].cells[4].innerHTML);
    const rowTotal = p1 + p2 * p3;
    table.rows[i].cells[5].innerHTML = rowTotal.toFixed(2);
    total += rowTotal;
  }

  totalColumn.innerHTML = total.toFixed(2);
}

document.getElementById('calculate-total-btn').addEventListener('click', calculateTotal);
