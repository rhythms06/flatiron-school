/*

Phase 1 -> Events -> TaskLister
Updated April 25, 2024
Created May 24, 2023
By Sakib Rasul

OBJECTIVE: The user should be able to submit a new task and see it in the list of tasks.

USER STORIES
The user should be able to...
  1. ...specify a new task's description [bonus: and priority] in <form>.
  2. ...on submit, add that new task to #tasks as an <li> element with:
    a. The task's description.
    b. [bonus] The task's priority, denoted with a color.
    c. [bonus] A delete button that removes the <li> element.
  3. [bonus] ...sort tasks by priority.

BRAINSTORMING
The core problem we want to solve is populating #tasks.
In order to add to tasks, we need to know what task the user wants to add.
The user uses the <form> in index.html to indicate that information.
Therefore, we need to add an event listener to that <form>!
The event we'll want to handle is "submit", and we'll want to handle it by populating #tasks.

*/

// Select the <form>, so that we can add a "submit" event handler to it.
const form = document.querySelector("form");
// Add a "submit" event handler to `form`.
form.addEventListener("submit", event => {
  // Prevent the default behavior of redirecting away to a backend service.
  event.preventDefault();
  // Get the task's text.
  const text = form.task.value;
  // Place the text in an <li> element.
  const task = document.createElement("li");
  task.textContent = text;
  // [Bonus] Append a delete button to the <li>.
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.addEventListener("click", () => task.remove());
  task.append(deleteButton);
  // [Bonus] Set the task's priority.
  const priority = form.priority.value;
  if (priority === "high") task.style.color = "red";
  if (priority === "medium") task.style.color = "yellow";
  if (priority === "low") task.style.color = "green";
  // Append `task` to #tasks.
  document.querySelector("#tasks").append(task);
  // Reset the form, so that the user can start typing in another task.
  form.reset();
});
