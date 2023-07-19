/*
Phase 1 -> Mock Code Challenge
Updated July 19, 2023 | Created May 31, 2023
Written by Sakib Rasul

CORE DELIVERABLES
The user should be able to...
1. View images for each ramen in #ramen-menu on http://localhost:3000/ramens on load.
2. See the first dish's details on load.
3. Click on an image and have its details populated.
4. Add a new ramen to #ramen-menu by submitting the form #new-ramen.
*/

// Display a given dish's details.
function displayRamen(ramen) {
    // Retrieve `<img class="detail-image" ...>` and set its `src` and `alt` attributes.
    const selectedImg = document.querySelector(".detail-image");
    selectedImg.src = ramen.image;
    selectedImg.alt = ramen.name;
    // Set the texts of elements referring to the name, restaurant, rating, and comment of the selected dish.
    document.querySelector(".name").textContent = ramen.name;
    document.querySelector(".restaurant").textContent = ramen.restaurant;
    document.querySelector("#rating-display").textContent = ramen.rating;
    document.querySelector("#comment-display").textContent = ramen.comment;
}

// Append a new ramen dish `ramen` (an object with properties `image`, `name`, etc.) to `#ramen-menu`.
// Note: We're encapsulating this behavior in a global helper function because we'll invoke it in two local scopes.
function loadRamen(ramen) {
    // Retrieve `<div id=ramen-menu">` (so that we can append to it).
    const menu = document.querySelector("#ramen-menu");
    // Create a new `<img>` tag (so that we can display `ramen` in `#ramen-menu`).
    const img = document.createElement("img");
    // Set the `<img>` `src` (URL) and `alt` (text) attributes.
    // Note: Setting the `alt` attribute is not a core deliverable.
    // OPTION 1: Access the ramen's image URL with dot notation.
    img.src = ramen.image;
    // OPTION 2: Access the ramen's image URL with bracket notation.
    // img.src = ramen["image"];
    img.alt = ramen.name;
    // Append the newly created `<img src="..." alt="...">` to `<div id=ramen-menu">`.
    menu.append(img);
    // Handle clicks on `<img>` (i.e. selecting a dish) by populating `<div id="ramen-detail">`.
    img.addEventListener("click", () => displayRamen(ramen));
}

// Append ramen dishes in db.json on load.
fetch("http://localhost:3000/ramens")
    // Convert the resulting JSON to JS.
    .then(response => response.json())
    // Note: Here's the first local scope!
    .then(ramenDishes => {
        // Display the first dish's details.
        displayRamen(ramenDishes[0]);
        // Iterate over the resulting array of ramen dishes, and load each one.
        ramenDishes.forEach(ramen => loadRamen(ramen))
    });

// Handle form submissions (by handling `submit` events on `<form id="new-ramen">`).
// Note: Here's the second local scope!
document.querySelector("#new-ramen").addEventListener("submit", event => {
    // Prevent default behavior.
    event.preventDefault();
    // Instantiate a new ramen dish and pass it to `loadRamen` to add it to the menu.
    loadRamen({
        "name": event.target.name.value,
        "restaurant": event.target.restaurant.value,
        "image": event.target.image.value,
        "rating": event.target.rating.value,
        // We need to use bracket notation here because of the hyphen in `new-comment`.
        "comment": event.target['new-comment'].value
    });
    // Reset the form.
    // Note: This functionality is convenient, but is not a core deliverable.
    event.target.reset();
});






