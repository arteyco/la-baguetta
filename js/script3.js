// Initialize datepicker
flatpickr('.datepicker', {});

// Calculate total for a row
function calculateTotal(row) {
    const p1 = parseInt(row.querySelector('input[type="number"]:nth-child(3)').value) || 0;
    const p2 = parseInt(row.querySelector('input[type="number"]:nth-child(4)').value) || 0;
    const p3 = parseInt(row.querySelector('input[type="number"]:nth-child(5)').value) || 0;
    row.querySelector('.total').textContent = (p1 + p2) * p3;
    updateGrandTotal();
}

// Update grand total
function updateGrandTotal() {
    let grandTotal = 0;
    const totals = document.querySelectorAll('.total');
    totals.forEach(total => {
        const value = parseInt(total.textContent) || 0;
        grandTotal += value;
    });
    document.getElementById('grandTotal').textContent = grandTotal;
}

// Add event listeners to inputs
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', function() {
        const row = this.parentNode.parentNode;
        calculateTotal(row);
    });
});

// Save to localStorage as JSON
document.getElementById('saveBtn').addEventListener('click', function() {
    const data = Array.from(document.querySelectorAll('tbody tr')).map(row => {
        const cells = row.querySelectorAll('input, .total');
        return {
            date: cells[0].value,
            product: cells[1].value,
            p1: cells[2].value,
            p2: cells[3].value,
            p3: cells[4].value,
            total: cells[5].textContent
        };
    });
    localStorage.setItem('day2', JSON.stringify(data));
});
