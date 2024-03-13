/*

Phase 1 -> DOM Events
by Sakib Rasul
Updated March 13, 2024
Created September 13, 2023

Objectives
1. Do something when an event fires on an element.
2. Handle a form submission by reading its input.

Takeaways
- "click" and "submit" events
- `event.preventDefault()`
- `[form].[input].value`

*/

// Often, we don't want to manipulate the DOM immediately.
// We want to wait for some triggering **event**, like a "click" on a <button>
// or a "hover" on an <h1> element, before we create, update, or delete an element.

// ~ the "click" event
// Let's say we want to manipulate the DOM after a user clicks on p#tomorrow.
// In programmer-speak, we'd say we want to **listen** for a "click" on p#tomorrow,
// and that that "click" event's **target** is that p#tomorrow element.
// Events are actions written in lowercaseactionwordorphrase syntax.

// To get started, we'll need to select and name our target p#tomorrow.
const tomorrowTag = document.querySelector("p#tomorrow");
// Next, we add a "click" **event listener** to the target.
// An event listener is a callback function whose (optional) parameter is an event.
tomorrowTag.addEventListener("click", event => {
    // ...and that's it! Whatever we write here will run every time a user clicks on p#tomorrow.
    // If we choose to include the optional event parameter, we can invoke its target element.
    console.log("The user clicked on '" + event.target.textContent + "'.");
    tomorrowTag.textContent = "Tomorrow!";
});

// ~ the "submit" event
// Now, let's try handling a form submission!
// When a <form> is submitted in HTML, a "submit" event fires. So we'll listen for that!
document.querySelector("#form").addEventListener("submit", event => {
    // By default, browsers redirect to a new URL when a form is submitted.
    // This means that our event handler doesn't get to run :(
    // To prevent this (and any other default) behavior, we can use `event.preventDefault()`.
    event.preventDefault();
    console.log("The form was submitted!");
    // We can access a form's input elements by name using dot or bracket notation.
    // e.g., `document.querySelector("#form").date` <-> `event.target.date` <-> `<input name="date" .../>`.
    // Once we've selected an input element, we can access its current value with the `value` attribute.
    const newDate = event.target.date.value;
    document.querySelector("#sometime").textContent = "On " + newDate + ".";
});

// ~ challenges
// 1. Add some non-click, non-submit event listener to the page. It can trigger whatever you wish!