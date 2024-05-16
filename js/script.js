document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('productTable');
    table.addEventListener('input', calculateTotal);
});

function calculateTotal() {
    const table = document.getElementById('productTable');
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const p1 = parseInt(cells[1].innerText) || 0;
        const p2 = parseInt(cells[2].innerText) || 0;
        const p3 = parseInt(cells[3].innerText) || 0;
        const total = (p1 + p2) * p3;
        cells[4].innerText = total.toFixed(2);
    }
}

function saveTable() {
    const table = document.getElementById('productTable');
    const rows = table.getElementsByTagName('tr');
    const data = [];

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const row = {
            product: cells[0].innerText,
            p1: parseInt(cells[1].innerText),
            p2: parseInt(cells[2].innerText),
            p3: parseInt(cells[3].innerText),
            total: parseFloat(cells[4].innerText)
        };
        data.push(row);
    }

    const jsonData = JSON.stringify(data);
    downloadFile(jsonData, 'data.json', 'application/json');

    // Additional code for other formats (CSV, XLSX, HTML, PDF) would go here
    // This could be implemented using libraries like SheetJS for XLSX and jsPDF for PDF
}

function downloadFile(content, fileName, contentType) {
    const a = document.createElement('a');
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value;
    if (message.trim() === '') return;

    const chatMessages = document.getElementById('chatMessages');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);

    chatInput.value = '';

    // Logic for interacting with the OpenAI API and responding would go here
}
