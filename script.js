// script.js
document.getElementById("carbonForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get input values
    const transport = parseFloat(document.getElementById("transport").value);
    const energy = parseFloat(document.getElementById("energy").value);
    const diet = parseFloat(document.getElementById("diet").value);

    // Carbon emissions factors
    const transportFactor = 0.12; // kg CO2 per km
    const energyFactor = 0.5;    // kg CO2 per kWh
    const dietFactor = diet;     // custom input value

    // Calculate carbon footprint
    const carbonFootprint = (transport * transportFactor) + (energy * energyFactor) + dietFactor;

    // Update UI with the result
    document.getElementById("carbonOutput").textContent = carbonFootprint.toFixed(2);
    document.getElementById("result").classList.remove("hidden");
});