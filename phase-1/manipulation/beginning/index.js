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

*/

// ~ APIs, CRUD, `document`

// ~ Read/Select a node
// -> querySelector is a DOM method that lets us look up nodes by CSS **selector**.
console.log(document.querySelector("#today"))
// searching for nodes of element types Ex. "h1", "p"
// searching for nodes using id or class Ex. -> class ".address", -> id "#date"
// -> querySelectorAll is a DOM method that returns an array-like list of nodes that match a CSS selector.
console.log(document.querySelectorAll("p"))
document.querySelectorAll("p").forEach(pElement => {
    console.log(pElement)
});
// Creates a nodelist which is simiar to Arrays but not the same datatype, can use a few of the same methods such as forEach()
// -> textContent is a property of text nodes (e.g. h1, p) that contain their text.
console.log(document.querySelector("#today").textContent)

// ~ Update/Modify a node's attributes
// -> To modify an attribute, just use = after the attribute name in object dot notation
document.querySelector("#today").textContent = "Today!"
document.querySelector("#today").style.color = "green"

// ~ Delete/Remove a node
// -> To remove an existing element, we can look it up and call the node's method `remove()`.
document.querySelector("#tomorrow").remove()

// ~ Create + Append a node
// -> createElement(), append()
const text = document.createElement("p")
text.textContent = "never..."
// image.src = "   "
document.body.append(text)

// ~ Challenges
// 1. Write a function named displayList that takes a name and an array,
//    and appends a list to #dates. For example, given "Books" and "The Shining",
//    the function should append to #dates something like:
//        Books
//        • The Shining
// 2. Replace the <strong> element with a newly created one.

// Challenge 1
/**
 * Creates an unordered list on index.html with a provided title & list
 * @param {*} name Title of the list
 * @param {*} array The items of the list
 */
function displayList(name, array){
    // Creates a 'h3' header for the list using the title provided
    const listName = document.createElement("h3")
    listName.textContent = name
    document.body.append(listName)
    
    const list = document.createElement("ul")
    document.body.append(list)

    // Iterates through the array and creates an 'li' element for each item
    array.forEach(function(item){
        const unorderedList = document.createElement("li")
        unorderedList.textContent = item
        document.querySelector("ul").append(unorderedList)
    })
}

const title = "Ice-cream"
const list = ["Chocolate", "Vanilla", "Strawberry", "Oreo"]
displayList(title,list)

// Challenge 2
// Removes the strong element
const address = document.querySelector("strong")
address.remove()
// Creates a new image element & appends to 'address'
const newAddress = document.createElement("img")
newAddress.src = "https://y.yarn.co/230b2b24-5e87-4d15-a584-4072803390e4_text.gif"
document.querySelector("address").append(newAddress)