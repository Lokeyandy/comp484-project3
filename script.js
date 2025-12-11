// Task 1: Verification Log
console.log("Status Manager Started");
// Verified it into the DOM Tools 

// Global variable setup (required for Task 10 using setInterval/clearInterval)
let intervalId = null;

// Use const to target required elements for easier access later in the script
// We use querySelector or getElementById to retrieve specific DOM nodes [3].
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");
const itemList = document.getElementById("item-list");

/* ======================================= */
// --- Task 3: Selecting and Changing Inner HTML ---
// Write the code here to select the mainTitle and update its innerHTML:
// Example: mainTitle.innerHTML = "New Title";
mainTitle.innerHTML = "DOM Project: Ready!";
/* ======================================= */
// --- Task 4: Attribute Modification ---
// Write the code here to use setAttribute() on the toggleButton element
// to add the required 'data-action' attribute.
toggleButton.setAttribute("data-action", "status-toggle");

/* ======================================= */
// --- Task 9: Looping and Applying Changes ---
// Define and call the highlightListItems() function here so it runs on load.
// You will need to use document.querySelectorAll('li') and a loop structure
// (like a 'for' loop or 'forEach') to iterate over all list items [3-5].
function highlightListItems() {
  const listItems = document.querySelectorAll("#item-list li");
  listItems.forEach(function (item) {
    item.style.color = "blue";
  });
}

highlightListItems();
/* ======================================= */
// --- Tasks 5, 6, 7 & 8: Toggle Functionality ---
// Define the functions (e.g., toggleStatus, createTimestamp) and event listeners
// here to handle the click event on the toggleButton [6, 7].
//Task 5
function createTimestamp() {
  const span = document.createElement("span");
  span.innerHTML = new Date().toLocaleTimeString() + " ";
  statusOutput.appendChild(span);
}


function toggleStatus(e) {
  // Task 6: prevent default behavior of the anchor tag
  e.preventDefault();

  // Task 5: toggle hidden class on status-output
  statusOutput.classList.toggle("hidden");

  // Task 7 & 8: styling and timestamps
  if (!statusOutput.classList.contains("hidden")) {
    // visible
    mainTitle.style.backgroundColor = "yellow";
    createTimestamp(); // add a new timestamp when it becomes visible
  } else {
    // hidden
    mainTitle.style.backgroundColor = "";
  }
}

// Bind click handler to the toggle button
toggleButton.addEventListener("click", toggleStatus);

/* ======================================= */
// --- Task 10: Timed Animation ---
// Define the startFlashing() and stopFlashing() functions using
// setInterval() and clearInterval() [8, 9], and bind them to the
// timerButton using addEventListener for 'click' and 'dblclick' [10].
function startFlashing() {
  if (intervalId !== null) return; // already flashing

  intervalId = setInterval(function () {
    controlPanel.classList.toggle("hidden");
  }, 500);
}

function stopFlashing() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }

  // ensure control panel is visible after stop
  controlPanel.classList.remove("hidden");
}

timerButton.addEventListener("click", startFlashing);    // Start timer
timerButton.addEventListener("dblclick", stopFlashing);  // Stop timer