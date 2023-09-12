/*

Phase 1 -> DOM Manipulation
by Sakib Rasul on September 12, 2023

Core Deliverables
1. Modify the text with the `id` "tomorrow".
2. Remove the node with the `id` "forever".
3. Create a <form> and append it to <body>.

Key Takeaways
1. document.querySelector("[CSS selector]"): a method for selecting existing nodes
2. [element].textContent: a property for getting and setting a node's text
3. document.createElement("[tag]"): a method for creating new elements
4. [parent].append([child]): a method for appending a new child to a node

*/

// Let's say we want to change "Tomorrow." to "Tomorrow!".
// The first thing we'll want to do is find the element that renders "Tomorrow."
// We can look back at `index.html` and see that we gave it an `id`, a way to uniquely identify that node!
// Since we have a unique way to identify the element (identifiers, by definition, must be unique)
//       we can look up that element with a method like `document.querySelector()` or `document.getElementById()`.
// `document.querySelector()` takes one argument, a string that corresponds to an element's **CSS selector**.
// For an `id`, that's "[tag]#[id] or "#[id]", e.g. "p#tomorrow" or "#tomorrow".
console.log(document.querySelector("#tomorrow"));

// Now that we're able to select the right element, we can modify it!
// To modify the text inside a tag, we can use the node property `textContent`.
const tomorrowTag = document.querySelector("#tomorrow");
console.log("Before: " + tomorrowTag.textContent);
tomorrowTag.textContent = "Tomorrow!"; 
console.log("After: " + tomorrowTag.textContent);

// We could've done all of that in one line!
// Let's try being a bit more terse to accomplish our next goal, removing "Forever?" from the page.
// To remove an existing element, we can look it up and call the node's method `remove()`.
// Remember, methods are functions, so they need ( parentheses ), even if they take no parameters.
// A good rule of thumb to help you differentiate between methods and properties is their naming.
// Methods usually incorporate a verb in their name, e.g. query*Select*or() and *remove*(),
//         as opposed to properties like textContent.
document.querySelector("#forever").remove();

// We can also create elements with `document.createElement("tag")`.
// This instantiates an element <tag>, but does not append it to the DOM tree.
// Let's use that knowledge to create a form, date input, and submit button!
const form = document.createElement("form");
const dateInput = document.createElement("input");
// It's best practice to set an input's `name` and `type` attributes.
// To set an element's attributes, simply write [element].[attributeName] = [value].
// An input's `name` is its identifier, unique to the form it resides in.
dateInput.name = "date";
// An input's `type` dictates how it looks and behaves. A `type` of "date" gives us a date picker!
dateInput.type = "date";
// An input's value is just that, the value that's been entered into it.
// Setting it here lets us specify a default date.
dateInput.value = "2023-09-12";
// To create a form's submit button, create an <input> with `type` "submit".
const submitButton = document.createElement("input");
submitButton.type = "submit";
// At this point, we have a form, date input, and submit button "in the DOM ether".
// To actually connect them to the DOM tree, we need to append the date input and the submit button to the form,
//    and append the form to the document's body.
// To append multiple children at once, we can use [parent].append([child], [child],...).
form.append(dateInput, submitButton);
// To append one child, we can use [parent].appendChild([child]).
document.body.appendChild(form);



