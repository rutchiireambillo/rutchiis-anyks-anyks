// 1. Declare constants for guide name and current year
const guideName = "Rutchii's Anyk Anyk";
const currentYear = 2026;

// 2. Declare a let for running count starting at 0
let runningCount = 0;

// Sample product prices for calculation
const productPrices = [45, 45, 80];

// 🧮 Small Calculation: Compute total items and average price
runningCount = productPrices.length;
const totalPrice = productPrices.reduce((sum, price) => sum + price, 0);
const averagePrice = (totalPrice / runningCount).toFixed(2);

// 3. Write guide name into header using document.getElementById
const titleElement = document.getElementById("guide-title");
if (titleElement) {
  titleElement.textContent = `🍯⭐ ${guideName} 🎀☁️`;
}

// 4. Write dynamic copyright into footer
const footerElement = document.getElementById("footer-copyright");
if (footerElement) {
  footerElement.textContent = `© ${currentYear} ${guideName}. All rights reserved.`;
}

// Display computed calculation on the page
const statsElement = document.getElementById("total-stats");
if (statsElement) {
  statsElement.textContent = `✨ Currently featuring ${runningCount} cute items with an average price of ${averagePrice} Pesos! ✨`;
}

// 5. Console logs (labelled values)
console.log("Shop Name:", guideName);
console.log("Current Year:", currentYear);
console.log("Total Featured Items (Running Count):", runningCount);
console.log("Average Price (Calculated):", averagePrice + " Pesos");