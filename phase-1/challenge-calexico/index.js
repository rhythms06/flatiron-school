/*

Phase 1 -> Code Challenge: Calexico
June 1, 2023 | Sakib Rasul

CORE DELIVERABLES
1. Append a <span> element to <div id="menu-items"> for each menu item in http://localhost:3000/menu.
2. Display the first menu item's details in <section id="dish">.
3. Handle menu item clicks by populating <section id="dish">.
4. Handle form submissions by incrementing "Number in Cart".

BONUS DELIVERABLES
1. Persist each item's "Number in Cart" between item clicks.
2. Display the cart's total cost anywhere on the page.
3. Persist "Number in Cart" and "Total Cost" between refreshes.

*/

// Append an <h3> element to <section id="dish"> to display the cart's total cost.
// Note: This block pertains to Bonus Deliverable #2.
const costHeading = document.createElement("h3");
costHeading.textContent = "Total Cost: ";
const costSpan = document.createElement("span");
costSpan.textContent = "$0.00";
costHeading.append(costSpan);
document.querySelector("#dish").append(costHeading);

// Instantiate a global variable to keep track of the currently selected menu item.
// Note: This line pertains to Bonus Deliverable #1.
let selectedItem;

// This function takes a menu item object, sets it as the selected item, and displays its details.
function displayItemDetails(item) {
    // Make `selectedItem` refer to `item`.
    // Note: This line pertains to Bonus Deliverable #1.
    selectedItem = item;
    // Display the selected item's details in `<section id="dish">`.
    document.querySelector("#dish-image").src = item.image;
    document.querySelector("#dish-name").textContent = item.name;
    document.querySelector("#dish-description").textContent = item.description;
    document.querySelector("#dish-price").textContent = item.price;
    document.querySelector("#number-in-cart").textContent = item.number_in_bag;
}

// Fetch Calexico's menu...
fetch("http://localhost:3000/menu")
     // ...convert the resulting JSON to an array of menu item objects...
     .then(response => response.json())
     .then(items => {
        // ...iterate over the items (and keep track of the current index)...
        items.forEach((item, index) => {
            // ...display the first item's details...
            if (index == 0) displayItemDetails(item);
            // ...create <span> elements for each item...
            const itemSpan = document.createElement("span");
            itemSpan.textContent = item.name;
            // ...handle item clicks...
            itemSpan.addEventListener("click", () => displayItemDetails(item));
            // ...append newly created <span> elements to <div id="menu-items">...
            document.querySelector("#menu-items").append(itemSpan);
            // ...and update "Total Cost".
            // Note: This block pertains to Bonus Deliverable #2.
            if (item.number_in_bag > 0) {
                costSpan.textContent = "$" + parseFloat(
                    parseFloat(costSpan.textContent.slice(1))
                    + parseInt(item.number_in_bag) * parseFloat(item.price)
                ).toFixed(2);
            }
        }
        )});

// Handle form submissions.
document.querySelector("#cart-form").addEventListener("submit", event => {
    // Prevent default behavior.
    event.preventDefault();
    // Get the number of items the user wants to add to their cart.
    // Note: The <input> type is text, so we'll need to convert it to a number with `parseInt`.
    const numberToAdd = parseInt(document.querySelector("#cart-amount").value);
    // Update `number_in_bag` locally.
    // Note: This line pertains to Bonus Deliverable #1.
    selectedItem.number_in_bag += numberToAdd;
    // Update `number_in_bag` on the server.
    // Note: This block pertains to Bonus Deliverable #3.
    // Note: Since we're updating a property in an existing object, we'll make a `PATCH` request.
    fetch(`http://localhost:3000/menu/${selectedItem.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(selectedItem)
    });
    // Update "Total Cost".
    // Note: This block pertains to Bonus Deliverable #2.
    costSpan.textContent = "$" + parseFloat(
            parseFloat(costSpan.textContent.slice(1))
            + numberToAdd * parseFloat(selectedItem.price)
        ).toFixed(2);
    // Update "Number in Cart".
    const numberInCartSpan = document.querySelector("#number-in-cart");
    numberInCartSpan.textContent = parseInt(numberInCartSpan.textContent) + numberToAdd;
    // Reset the form, i.e. clear user input.
    // Note: This is good (in my opinion) UX, but is not a core deliverable.
    event.target.reset();
});