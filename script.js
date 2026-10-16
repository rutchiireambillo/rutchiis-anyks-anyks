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


// ==========================================
// CODE THAT CHOOSES (Decisions Layer)
// ==========================================

// ----------------------------------------------------
// 1. Stock Status Decision (if / else if / else chain)
// ----------------------------------------------------
const stockCount = Number(5); // Product stock quantity
let stockMessage = "";

if (stockCount > 10) {
  stockMessage = "In stock";
} else if (stockCount >= 1) {
  stockMessage = "Only a few left";
} else {
  stockMessage = "Sold out";
}

const stockElement = document.getElementById("stock-status");
if (stockElement) {
  stockElement.textContent = `📦 Stock: ${stockMessage}`;
}

// ----------------------------------------------------
// 2. Free Delivery Check (&&, ===, and ternary operator)
// ----------------------------------------------------
// Free delivery condition: orderTotal >= 150 AND isMember === true
const orderTotal = Number(totalPrice); // 170 Pesos from items
const isMember = true;

const qualifiesForFreeDelivery = (orderTotal >= 150 && isMember === true);
const deliveryFee = qualifiesForFreeDelivery ? 0 : 150;
const finalTotal = orderTotal + deliveryFee;

const deliveryElement = document.getElementById("delivery-status");
if (deliveryElement) {
  deliveryElement.textContent = `🚚 Delivery: ${deliveryFee === 0 ? "Free delivery" : "₱" + deliveryFee} | Final Total: ₱${finalTotal}`;
}

// ----------------------------------------------------
// 3. Shop Open/Closed Decision (boolean, ===, and ternary)
// ----------------------------------------------------
const isOpen = true; // Boolean value

const shopStatusMessage = (isOpen === true) ? "Open today" : "Closed today";

const shopElement = document.getElementById("shop-status");
if (shopElement) {
  shopElement.textContent = `🕒 Store Status: ${shopStatusMessage}`;
}

// Verification console logs
console.log("Stock Status:", stockMessage);
console.log("Delivery Fee:", deliveryFee, "Final Total:", finalTotal);
console.log("Store Status:", shopStatusMessage);