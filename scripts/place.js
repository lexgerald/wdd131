// Calculate wind chill function
function calculateWindChill(temp, windSpeed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
}

// Display wind chill if conditions are met
function displayWindChill() {
    const tempElement = document.getElementById('temp');
    const windSpeedElement = document.getElementById('wind-speed');
    const windChillElement = document.getElementById('wind-chill');
    
    const temp = parseFloat(tempElement.textContent);
    const windSpeed = parseFloat(windSpeedElement.textContent);
    
    if (temp <= 10 && windSpeed > 4.8) {
        windChillElement.textContent = calculateWindChill(temp, windSpeed) + "°C";
    } else {
        windChillElement.textContent = "N/A";
    }
}

// Display current year and last modified date
function displayFooterInfo() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;
}

// Initialize page
function init() {
    displayFooterInfo();
    displayWindChill();
}

window.addEventListener('DOMContentLoaded', init);