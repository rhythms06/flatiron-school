/*

Phase 1 -> DOM Events -> TaskLister
Updated September 17, 2023 | Created May 24, 2023
By Sakib Rasul

OBJECTIVES
The user should be able to...
1. Specify a new task's description and priority in #create-task-form.
2. On submit, add that new task to #tasks as an <li> element with:
   2a. The task's description.
   2b. The task's priority, denoted with a background color.
   2c. A delete button that removes the <li> element.

*/

// Get the new task form from the DOM, and call it 'form'.
const form = document.querySelector("#create-task-form");
// Handle form submissions by listening to form's 'submit' event.
form.addEventListener("submit", event => {
  // Prevent default behavior, i.e. redirecting to a backend service.
  event.preventDefault();
  // Get text from input.
  // OPTION 1: Get the element with querySelector (if the element has a `class` or `id`)
  // const text = document.querySelector("#new-task-description").value;
  // OPTION 2: Get the element with event.target (if the element has a `name`)
  const text = event.target["new-task-description"].value;
  // Create an <li> and add the retrieved text to it.
  const task = document.createElement("li");
  task.textContent = text;
  // Append a delete button to the <li>.
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  // Listen for the "click" event on the delete button,
  //        and when clicked, remove the <li>.
  deleteButton.addEventListener("click", () => {
    // Remove the <li> element.
    task.remove();
  });
  // Append the <button> to the <li>.
  task.append(deleteButton);
  // Set the background color, based on the dropdown value.
  // OPTION 1: Get the element with querySelector (if the element has a `class` or `id`)
  // const priority = document.querySelector("#new-task-priority").value;
  // OPTION 2: Get the element with event.target (if the element has a `name`)
  const priority = document.querySelector("#new-task-priority").value;
  // Set the task's background color.
  // Note: You don't need { } around one-line bodies.
  if (priority === "high") task.style.backgroundColor = "red";
  if (priority === "medium") task.style.backgroundColor = "yellow";
  if (priority === "low") task.style.backgroundColor = "green";
  // Append the new <li> to the existing <ul>.
  document.querySelector("#tasks").append(task);
  // Clear the input text, so that the user can start typing in another task.
  // OPTION 1: Reset the event target.
  event.target.reset();
  // OPTION 2: Clear the input value.
  // event.target["new-task-description"].value = "";
});




