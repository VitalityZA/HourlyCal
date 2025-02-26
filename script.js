// script.js
function calculateTotal() {
    // Get input values
    const hours = parseFloat(document.getElementById('hours').value) || 0;
    const minutes = parseFloat(document.getElementById('minutes').value) || 0;
    const seconds = parseFloat(document.getElementById('seconds').value) || 0;
    const rate = parseFloat(document.getElementById('rate').value);

    // Error handling
    let errorMessage = '';
    
    if (minutes > 59) {
        errorMessage = 'Minutes cannot exceed 59.';
    } else if (seconds > 59) {
        errorMessage = 'Seconds cannot exceed 59.';
    } else if (isNaN(rate) || rate === null) {
        errorMessage = 'Please enter an hourly rate.';
    } else if (rate < 0 || hours < 0 || minutes < 0 || seconds < 0) {
        errorMessage = 'Values cannot be negative.';
    }

    // If there's an error, display it and return
    if (errorMessage) {
        document.getElementById('total').textContent = 'Error';
        alert(errorMessage);
        return;
    }

    // Convert all time to hours
    const totalHours = hours + (minutes / 60) + (seconds / 3600);

    // Calculate total cost
    const totalCost = totalHours * rate;

    // Display result with 2 decimal places
    document.getElementById('total').textContent = totalCost.toFixed(2);
}
