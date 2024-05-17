$(document).ready(function() {
    // initialize table
    var table = $('#product-table').DataTable({
        "columns": [
            {"title": "Product", "width": "20%"},
            {"title": "P1", "width": "20%"},
            {"title": "P2", "width": "20%"},
            {"title": "P3", "width": "20%"},
            {"title": "Total", "width": "20%", "sortable": false}
        ],
        "data": [
            {"Product": "Product 1", "P1": 10, "P2": 20, "P3": 3},
            {"Product": "Product 2", "P1": 20, "P2": 30, "P3": 4},
            {"Product": "Product 3", "P1": 30, "P2": 40, "P3": 5}
        ],
        "columnDefs": [
            {"targets": [1, 2, 3], "editable": true},
            {"targets": [4], "editable": false}
        ]
    });

    // calculate total column
    $('#product-table').on('draw.dt', function() {
        $.each(table.rows().data(), function(index, row) {
            row.Total = (row.P1 + row.P2) * row.P3;
            table.row(index).data(row);
        });
    });

    // save button event
    $('#save-button').on('click', function() {
        var data = table.rows().data();
        saveData(data, 'json');
        saveData(data, 'csv');
        saveData(data, 'xlsx');
        saveData(data, 'html');
        saveData(data, 'pdf');
    });

    // chat functionality
    $('#chat-send-button').on('click', function() {
        var message = $('#chat-input').val();
        $('#chat-log').append('<p>' + message + '</p>');
        $('#chat-input').val('');
        // call openai api here
    });

    // openai api call
    function callOpenAI(message) {
        // todo: implement openai api call
        console.log(message);
    }
});

// save data to file
function saveData(data, type) {
    var blob = new Blob([JSON.stringify(data)], {type: 'application/' + type});
    saveAs(blob, 'file.' + type);
}
