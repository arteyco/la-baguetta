// scriptwdp.js
// Create the table rows dynamically
let tableBody = document.getElementById('table-body');
for (let i = 0; i < 30; i++) {
    let row = document.createElement('tr');
    for (let j = 0; j < 7; j++) {
        let cell = document.createElement('td');
        if (j === 0) {
            cell.innerHTML = i + 1;
        } else if (j === 1) {
            cell.innerHTML = new Date().toDateString();
        } else if (j === 2) {
            cell.innerHTML = 'Product ' + (i + 1);
        } else if (j === 3) {            
            cell.innerHTML = 10;
           cell.contentEditable = 'true';           
        } else if (j === 4) {            
            cell.innerHTML = i + 2;
            cell.contentEditable = 'true';
        } else if (j === 5) {            
            cell.innerHTML = i + 3;
            cell.contentEditable = 'true';
        } else {
            cell.innerHTML = '';
        }
        row.appendChild(cell);
    }
    tableBody.appendChild(row);
}

// Calculate total for each row
document.getElementById('calculateTotal').addEventListener('click', calculateTotal);

function calculateTotal() {
    let table = document.getElementById('myTable');
    let rows = table.rows;
    for (let i = 1; i < rows.length; i++) {
        let p1 = parseInt(rows[i].cells[3].innerHTML);
        let p2 = parseInt(rows[i].cells[4].innerHTML);
        let p3 = parseInt(rows[i].cells[5].innerHTML);
        let total = (p1 + p2 ) * p3;
        rows[i].cells[6].innerHTML = total;
    }
}

// Calculate total sum
document.getElementById('calculateTotalSum').addEventListener('click', calculateTotalSum);

function calculateTotalSum() {
    let table = document.getElementById('myTable');
    let rows = table.rows;
    let totalSum = 0;
    for (let i = 1; i < rows.length; i++) {
        let total = parseInt(rows[i].cells[6].innerHTML);
        totalSum += total;
    }
    document.getElementById('totalSumOutput').value = totalSum;
}

// Calculate total average
document.getElementById('calculateTotalAverage').addEventListener('click', calculateTotalAverage);

function calculateTotalAverage() {
    let table = document.getElementById('myTable');
    let rows = table.rows;
    let totalSum = 0;
    let count = 0;
    for (let i = 1; i < rows.length; i++) {
        let total = parseInt(rows[i].cells[6].innerHTML);
        totalSum += total;
        count++;
    }
    let totalAverage = totalSum / count;
    document.getElementById('totalAverageOutput').value = totalAverage;
}

// Save to JSON
document.getElementById('saveToJson').addEventListener('click', saveToJson);

function saveToJson() {
    let table = document.getElementById('myTable');
    let rows = table.rows;
    let data = [];
    for (let i = 1; i < rows.length; i++) {
        let row = {
            id: parseInt(rows[i].cells[0].innerHTML),
            date: rows[i].cells[1].innerHTML,
            product: rows[i].cells[2].innerHTML,
            p1: parseInt(rows[i].cells[3].innerHTML),
            p2: parseInt(rows[i].cells[4].innerHTML),
            p3: parseInt(rows[i].cells[5].innerHTML),
            total: parseInt(rows[i].cells[6].innerHTML)
        };
        data.push(row);

    }
   // let json = JSON.stringify(data, null, 4);
  //  localStorage.setItem('day4.json', json);

     const json = JSON.stringify(data, null, 4);
    const file = new Blob([json], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(file);
    link.download = 'day4.json';
    link.click();
}
