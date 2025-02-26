// script.js
function calculateTotal() {
    // Get input values
    const hours = parseFloat(document.getElementById('hours').value) || 0;
    const minutes = parseFloat(document.getElementById('minutes').value) || 0;
    const seconds = parseFloat(document.getElementById('seconds').value) || 0;
    const rate = parseFloat(document.getElementById('rate').value) || 0;

    // Convert all time to hours
    const totalHours = hours + (minutes / 60) + (seconds / 3600);

    // Calculate total cost
    const totalCost = totalHours * rate;

    // Display result with 2 decimal places
    document.getElementById('total').textContent = totalCost.toFixed(2);
}
