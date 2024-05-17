$(document).ready(function() {
    $(".datepicker").datepicker();
    
    function calculateTotal(p1, p2, p3) {
        return (p1 + p2) * p3;
    }
    
    function calculateGrandTotal() {
        let grandTotal = 0;
        $(".grandTotal").each(function() {
            grandTotal += parseInt($(this).val()) || 0;
        });
        $("#grandTotalTextArea").val(grandTotal);
    }
    
    $(".p1, .p2, .p3").on("input", function() {
        let $row = $(this).closest("tr");
        let p1 = parseInt($row.find(".p1").val()) || 0;
        let p2 = parseInt($row.find(".p2").val()) || 0;
        let p3 = parseInt($row.find(".p3").val()) || 0;
        let total = calculateTotal(p1, p2, p3);
        $row.find(".total").val(total);
        calculateGrandTotal();
    });
    
    $("#saveButton").on("click", function() {
        let data = [];
        $("#dataTable tbody tr").each(function() {
            let row = {};
            row.date = $(this).find(".datepicker").val();
            row.product = $(this).find(".product").val();
            row.p1 = parseInt($(this).find(".p1").val()) || 0;
            row.p2 = parseInt($(this).find(".p2").val()) || 0;
            row.p3 = parseInt($(this).find(".p3").val()) || 0;
            data.push(row);
        });
        
        let jsonData = JSON.stringify(data);
        let blob = new Blob([jsonData], { type: "application/json" });
        let url = URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "day2.json";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
});
