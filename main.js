// Get DOM elements
const addButton = document.getElementById("add");
const converterButton = document.getElementById("converterButton");
const viewer = document.getElementById("displayer");
const rowCounterDiv = document.getElementById("rowCounterDiv");
const noneDiv = document.getElementById("noneDiv");
const dateInput = document.getElementById("dateInput");
const weekCounter = document.getElementById("weekCounter");
const monthCounter = document.getElementById("monthCounter");
const yearCounter = document.getElementById("yearCounter");
const inputDiv = document.getElementById("inputDivs");

// Initialize counters
let totalDays = 0;
let days = 0;
let week = 0;
let month = 0;
let year = 0;

// Set default date to today
const today = new Date();
const formattedDate = today.toISOString().split('T')[0];
dateInput.value = formattedDate;

// Add event listener for date input
dateInput.addEventListener("change", calculateFromDate);

// Initialize display - remove 'remover' class to show elements
weekCounter.classList.remove("remover");
monthCounter.classList.remove("remover");
yearCounter.classList.remove("remover");
viewer.classList.remove("remover");
rowCounterDiv.classList.remove("remover");
noneDiv.classList.remove("remover");

/**
 * Increment the counter by one day and update the display
 */
function counter() {
    // Increment total days
    totalDays++;
    
    // Update days
    days++;
    
    // Update display
    viewer.innerHTML = totalDays + " Days";
    
    // Convert days to weeks
    if (days >= 7) {
        week++;
        days = days - 7;
    }
    
    // Convert weeks to months (approximating a month as 4 weeks + 2 days)
    if (week >= 4 && days >= 2) {
        month++;
        week = week - 4;
        days = days - 2;
    }
    
    // Convert months to years
    if (month >= 12) {
        year++;
        month = month - 12;
    }
    
    // Update counters display
    weekCounter.innerHTML = week + " :Weeks";
    monthCounter.innerHTML = month + " :Months";
    yearCounter.innerHTML = year + " :Years";
}

/**
 * Toggle between counter view and date input view
 */
function convertButton() {
    // Toggle visibility of elements
    yearCounter.classList.toggle("remover");
    monthCounter.classList.toggle("remover");
    weekCounter.classList.toggle("remover");
    inputDiv.classList.toggle("remover");
    viewer.classList.toggle("remover");
    rowCounterDiv.classList.toggle("remover");
    noneDiv.classList.toggle("remover");
}

/**
 * Calculate time from selected date to today
 */
function calculateFromDate() {
    // Reset counters
    totalDays = 0;
    days = 0;
    week = 0;
    month = 0;
    year = 0;
    
    // Get selected date and current date
    const selectedDate = new Date(dateInput.value);
    const currentDate = new Date();
    
    // Calculate difference in milliseconds
    const diffTime = Math.abs(currentDate - selectedDate);
    
    // Convert to days (rounded down)
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    // Add each day individually to ensure proper calculation
    for (let i = 0; i < diffDays; i++) {
        counter();
    }
    
    // Update display
    viewer.innerHTML = totalDays + " Days";
    weekCounter.innerHTML = week + " :Weeks";
    monthCounter.innerHTML = month + " :Months";
    yearCounter.innerHTML = year + " :Years";
}

// Initialize display with zeros
viewer.innerHTML = "0 Days";
weekCounter.innerHTML = "0 :Weeks";
monthCounter.innerHTML = "0 :Months";
yearCounter.innerHTML = "0 :Years";
