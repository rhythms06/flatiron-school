/*

Phase 1 -> DOM Events -> TaskLister
Updated July 13, 2023 | Created May 24, 2023
By Sakib Rasul

OBJECTIVES
The user should be able to...
1. Specify a new task's description and priority in #create-task-form.
2. On submit, add that new task to #tasks as an <li> element with:
   2a. The task's description.
   2b. The task's priority, denoted with a background color.
   2c. A delete button that removes the <li> element.

*/

// We need to ensure two things before we write any JavaScript:
//    (a) that the HTML is linked to our JS with a <script> tag (usually as a child of <head>).
//    (b) that we wait for our site to load before we try to manipulate it, by either:
//             (i) adding the 'defer' keyword to <script>.
//             (ii) running our code after the event "DOMContentLoaded" fires on `document`.
//             (iii) running our code after the event "load" fires on `document`.
// Option (a)(ii) fires after the DOM loads, and Option (a)(iii) fires after the DOM, CSS, and images load.
// We recommend you go with Option (a)(i), because it lets you write top-level code in JS.
// That's the option I went with here, which is why I can start manipulating right after this comment.

// Get the new task form from the DOM, and call it 'form'.
const form = document.querySelector("#create-task-form");
// Handle form submissions by listening to form's 'submit' event.
form.addEventListener("submit", event => {
  // Prevent default form submission behavior.
  event.preventDefault();

  // Get the task list from the DOM, and call it 'taskList'.
  const taskList = document.querySelector("#tasks");

  // Create a new list item for the submitted task.
  const newTask = document.createElement("li");

  // Retrieve the new task's text.
  // OPTION 1: Get the element with querySelector (if the element has a `class` or `id`)
  // const text = document.querySelector("#new-task-description").value;
  // OPTION 2: Get the element with event.target (if the element has a `name`)
  const text = event.target['new-task-description'].value;

  // Write the submitted task text to the new list item.
  newTask.textContent = text;

  // Retrieve the new task's priority.
  // OPTION 1: Get the element with querySelector (if the element has a `class` or `id`)
  // const priority = document.querySelector("#new-task-priority").value;
  // OPTION 2: Get the element with event.target (if the element has a `name`)
  const priority = event.target['new-task-priority'].value;

  // Set the task's background color.
  // Note: You don't need { } around one-line bodies.
  if (priority === "high") newTask.style.backgroundColor = "red";
  if (priority === "medium") newTask.style.backgroundColor = "yellow";
  if (priority === "low") newTask.style.backgroundColor = "green";

  // Create a delete button, and call it 'deleteButton'.
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  // Append deleteButton as a child of newTask.
  newTask.appendChild(deleteButton);
  // Remove newTask whenever the user clicks on deleteButton.
  deleteButton.addEventListener("click", () => {
    // OPTION 1: Call remove() on newTask.
    newTask.remove();
    // OPTION 2: Call removeChild() on taskList.
    // taskList.removeChild(newTask);
  });

  // Append newTask to taskList.
  taskList.append(newTask);

  // Clear the input text, so that the user can start typing in another task.
  // OPTION 1: Reset the event target.
  event.target.reset();
  // OPTION 2: Clear the input value.
  // taskInput.value = "";
});
