/*

Phase 1 -> DOM Manipulation
by Sakib Rasul
Updated March 13, 2024
Created September 12, 2023

Core Deliverables
1. Select a node.
2. Modify a node.
3. Remove a node.
4. Append a node.

Challenges
1. Append a list.
2. Replace a node.

Key Takeaways
1. API: A communication bridge between an external system and the one you're in
2. document: an API that lets us Create, Read, Update, and Delete things in HTML
3. document.querySelector("[CSS selector]"): a method for selecting existing nodes
4. [element].textContent: a property for getting and setting a node's text
5. [element].remove(): a method for removing nodes
6. document.createElement("[tag]"): a method for creating nodes
7. [parent].append([child]): a method for appending a new child to a node

*/

/* 
    An API (Application Programming Interface) is a bridge between you
    and an external source of information. APIs let you do some or all of the following:
        1. Create new data in the external source.
        2. Read existing data in the external source.
        3. Update existing data in the external source.
        4. Delete existing data from the external source.

    Most APIs let you read data, but many stop there, and for good reason.
    Imagine you manage a weather API. You wouldn't want just anyone modifying today's temperature!
    You'd want some way of restricting access to that operation. More on that another time...

    `document` is an API that serves as a bridge between us (JavaScript) and the
            page (HTML). The name comes from Document Object Model, a tree-based
            representation of our page, where each tag is a node, and where a node is a child
            of another node if the tag that the second node represents is in between the opening
            and closing tag of those that the first node represents.
    For example, if in our HTML we see <div><p>Hello!</p></div>,
                then in our DOM we see [document]-->[body]-->[div]-->[p].

    `document` lets you do the following...
*/

/* ~ Select existing nodes in the DOM. <==> Read existing tags in the HTML.
    The first step to selecting a node is finding it in `index.html`.
    The second step is using a `document`, or DOM method to select it.
*/
// querySelector is a DOM method that lets us look up nodes by CSS **selector** (e.g. #[id])
console.log(document.querySelector("h1"));
console.log(document.querySelector(".address"));
console.log(document.querySelector("#dates"));
console.log(document.querySelector("p#today"));
// querySelectorAll is a DOM method that returns an array-like list of nodes that match a CSS selector.
document.querySelectorAll("p").forEach(node => console.log(node));
// textContent is a property of text nodes (e.g. h1, p) that contain their text.
console.log(document.querySelector("h1").textContent);


// ~ Update/Modify a node's attributes
// To modify an attribute, just use = after the attribute name in object dot notation
document.querySelector("#today").textContent = "Today!";

// ~ Delete/Remove a node
// To remove an existing element, we can look it up and call the node's method `remove()`.
// Remember, methods are functions, so they need ( parentheses ), even if they take no parameters.
// A good rule of thumb to help you differentiate between methods and properties is their naming.
// Methods usually incorporate a verb in their name, e.g. query*Select*or() and *remove*(),
//         as opposed to properties like textContent.
document.querySelector("#tomorrow").remove();

// ~ Create/Append a node
// We can also create elements with `document.createElement("tag")`.
// This instantiates an element <tag>, but does not append it to the DOM tree.
// 1. Create a <p> node and call it nextWeek
const nextWeek = document.createElement("p");
// 1.5. Set the textContent of nextWeek
nextWeek.textContent = "Next Week!!";
// 2. Append nextWeek to the DOM
document.querySelector("#dates").append(nextWeek);

// ~ Challenges
// 1. Write a function named displayList that takes a name and an array,
//    and appends a list to #dates. For example, given "Books" and "The Shining",
//    the function should append to #dates something like:
//        Books
//        • The Shining
function displayList(name, array) {
    const div = document.querySelector("#dates");
    const heading = document.createElement("h2");
    heading.textContent = name;
    div.append(heading);
    const list = document.createElement("ul");
    // [array].forEach([function]) applies [function] to each item in [array]
    array.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.append(li);
    });
    // ...equivalent to...
    // for (let i = 0; i < array.length; i++) {
    //     const li = document.createElement("li");
    //     li.textContent = array[i];
    //     list.append(item);
    // }
    div.append(list);
};
displayList("Book Series", ["Harry Potter", "Alex Rider", "The Magic Treehouse"]);
// 2. Replace a node.
const author = document.createElement("italic");
author.textContent = "Sakib Rasul";
document.querySelector("strong").replaceWith(author);



