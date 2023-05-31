/*

Phase 1 -> DOM Events -> TaskLister
May 24, 2023 | Sakib Rasul

OBJECTIVES
1. The user should be able to submit and view tasks.
2. The text the user inputted should clear upon submit.
3. The user should be able to remove any task they've added.

*/

// Wait for the DOM to load before we try to manipulate it.
// OPTION 1: Add the 'defer' keyword to the <script> tag that loads this JS.
// OPTION 2: Run our code after the "load" event fires (i.e. wait for DOM, CSS, and images to load)
// OPTION 3: Run our code after the "DOMContentLoaded" event fires (i.e. wait for the DOM to load)
document.addEventListener("DOMContentLoaded", () => {
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

    // Retrieve the form's task input element.
    // OPTION 1: Get the element from event.target
    // const taskInput = event.target['new-task-description'];
    // OPTION 2: Get the element using querySelector
    const taskInput = document.querySelector("#new-task-description");

    // Write the submitted task text to the new list item.
    newTask.textContent = taskInput.value;

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
});
