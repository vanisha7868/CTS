// main.js

// 1. JavaScript Basics & Setup
console.log("Welcome to the Community Portal");
window.onload = () => alert("Page is fully loaded");

// 2. Syntax, Data Types, and Operators
const eventName = "Community Clean-Up";
const eventDate = "2025-06-01";
let availableSeats = 10;
console.log(`Event: ${eventName}, Date: ${eventDate}, Seats: ${availableSeats}`);

// 3. Conditionals, Loops, and Error Handling
const events = [
  { name: "Music Fest", date: "2025-06-10", seats: 5, category: "music" },
  { name: "Food Fair", date: "2025-04-15", seats: 0, category: "food" },
  { name: "Art Expo", date: "2025-07-01", seats: 10, category: "art" }
];

const today = new Date("2025-05-24");
events.forEach(event => {
  const eventDay = new Date(event.date);
  if (eventDay > today && event.seats > 0) {
    console.log(`Upcoming: ${event.name}`);
  } else {
    console.log(`Hidden: ${event.name}`);
  }
});

try {
  if (availableSeats <= 0) throw new Error("No seats left");
  availableSeats--;
  console.log("Registered successfully");
} catch (error) {
  console.error(error.message);
}

// 4. Functions, Scope, Closures, Higher-Order Functions
function addEvent(name, date, seats, category) {
  events.push({ name, date, seats, category });
}

function registerUser(eventName) {
  const event = events.find(e => e.name === eventName);
  if (event && event.seats > 0) {
    event.seats--;
    console.log(`${eventName}: Registered!`);
  }
}

function filterEventsByCategory(category) {
  return events.filter(e => e.category === category);
}

function createRegistrationTracker() {
  let total = 0;
  return function() {
    total++;
    return total;
  };
}

const trackMusicRegistrations = createRegistrationTracker();

function dynamicFilter(filterFn) {
  return events.filter(filterFn);
}

// 5. Objects and Prototypes
function Event(name, date, seats, category) {
  this.name = name;
  this.date = date;
  this.seats = seats;
  this.category = category;
}

Event.prototype.checkAvailability = function() {
  return this.seats > 0;
};

const yogaEvent = new Event("Yoga Session", "2025-08-01", 20, "fitness");
console.log(Object.entries(yogaEvent));

// 6. Arrays and Methods
events.push({ name: "Coding Bootcamp", date: "2025-06-15", seats: 25, category: "tech" });
const musicEvents = events.filter(e => e.category === "music");
const formattedEvents = events.map(e => `Event: ${e.name} on ${e.date}`);

// 7. DOM Manipulation
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#eventContainer");
  events.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";
    card.textContent = `${event.name} - ${event.date}`;
    container.appendChild(card);
  });
});

// 8. Event Handling
document.querySelector("#registerBtn")?.addEventListener("click", () => {
  registerUser("Music Fest");
});

document.querySelector("#categorySelect")?.addEventListener("change", (e) => {
  console.log(`Filtering by: ${e.target.value}`);
});

document.querySelector("#searchInput")?.addEventListener("keydown", (e) => {
  console.log(`Search key: ${e.key}`);
});

// 9. Async JS, Promises, Async/Await
async function fetchEvents() {
  try {
    document.querySelector("#loader").style.display = "block";
    const res = await fetch("/api/events.json");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Fetch error:", err);
  } finally {
    document.querySelector("#loader").style.display = "none";
  }
}

// 10. Modern JavaScript Features
const displayEvent = ({ name, date }) => console.log(`${name} on ${date}`);
const clonedEvents = [...events];

// 11. Working with Forms
document.querySelector("#regForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const { name, email, eventSelect } = e.target.elements;
  if (!name.value || !email.value) {
    alert("Name and email required");
    return;
  }
  console.log(`Registered ${name.value} for ${eventSelect.value}`);
});

// 12. AJAX & Fetch API
function submitRegistration(data) {
  setTimeout(() => {
    fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(response => alert("Registered successfully"))
    .catch(err => alert("Error: " + err));
  }, 2000);
}

// 13. Debugging and Testing
console.log("Debugging registration...");

// 14. jQuery and JS Frameworks
$("#registerBtn").click(() => alert("jQuery Clicked!"));
$(".event-card").fadeIn();
// Benefit of frameworks: Better component-based structure, reactivity, scalability.
