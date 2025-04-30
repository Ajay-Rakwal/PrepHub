function convertPercentageToSGPA() {
    const percentage = parseFloat(document.getElementById('percentageInput').value);
    if (isNaN(percentage) || percentage < 0 || percentage > 100) {
        alert('Please enter a valid percentage between 0 and 100.');
        return;
    }
    const sgpa = (percentage / 10) + 0.75;
    const sgpaClamped = Math.min(Math.max(sgpa, 0), 10);
    document.getElementById('result').textContent = `Approximate SGPA: ${sgpaClamped.toFixed(2)}`;
}

function convertSGPAToPercentage() {
    const sgpa = parseFloat(document.getElementById('sgpaInput').value);
    if (isNaN(sgpa) || sgpa < 0 || sgpa > 10) {
        alert('Please enter a valid SGPA between 0 and 10.');
        return;
    }
    const percentage = (sgpa - 0.75) * 10;
    const percentageClamped = Math.min(Math.max(percentage, 0), 100);
    document.getElementById('result').textContent = `Approximate Percentage: ${percentageClamped.toFixed(2)}%`;
}
