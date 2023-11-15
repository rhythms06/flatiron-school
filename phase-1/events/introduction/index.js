/*

Phase 1 -> DOM Events
by Sakib Rasul
Updated on September 17, 2023 | Created on September 13, 2023

Objectives
1. Do something when to #tomorrow when it is clicked.
2. Do something to #sometime when #form is submitted.

Takeaways
- "click" and "submit" events
- `event.preventDefault()`
- `[form].[input].value`

*/


// Let's add a click event listener to #tomorrow. First, we'll need a reference.
const tomorrowTag = document.querySelector("#tomorrow");
// Next, we add a `click` listener to `tomorrowTag`.
tomorrowTag.addEventListener("click", () => {
    // Whatever we write here will run when a user clicks on "Tomorrow."
    console.log("The user clicked on Tomorrow.");
    tomorrowTag.textContent = "Tomorrow!";
    tomorrowTag.remove();
});

// Now let's write a form submission handler.
const form = document.querySelector("#form");
form.addEventListener("submit", (event) => {
    // By default, browsers redirect to a new URL when a form is submitted.
    // This means that our event handler doesn't get to run :(
    // To prevent this (and any other default) behavior, we can use `event.preventDefault()`.
    // `event` is an object that all event handlers have access to,
    // and `preventDefault()` is an event method that suppresses default behavior.
    event.preventDefault();
    console.log("The user entered a date!");
    // We can use dot or bracket notation to access a form's input elements.
    // `form.date` is equivalent to `<input name="date" .../>`.
    // `form.date.value` is the value entered into `<input name="date" .../>`.
    const newDate = form.date.value;
    // Now that we have the selected date, we can populate #sometime with it!
    document.querySelector("#sometime").textContent = "On " + newDate + ".";
});