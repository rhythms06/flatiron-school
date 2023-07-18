// Handle showing and hiding the form when the user clicks "Add a new toy!"
let showForm = false;
document.querySelector("#new-toy-btn").addEventListener("click", () => {
  showForm = !showForm;
  // It's okay if you don't understand this shorthand yet! It'll become handy later.
  document.querySelector(".container").style.display = showForm ? "block" : "none";
});

// This helper function takes in a toy object, and renders it as a card in the DOM.
function renderToy(toy) {
  // Let's make a new toy card!
  const card = document.createElement("div");
  card.className = "card";
  
  // ...and the toy's name...
  const name = document.createElement("h2");
  name.textContent = toy.name;
  
  // ...and the toy's image...
  const image = document.createElement("img");
  image.src = toy.image;
  image.className = "toy-avatar";

  // ...and the toys's likes...
  const likes = document.createElement("p");
  likes.textContent = `${toy.likes} Likes`;
  // ...or...
  // likes.textContent = toyObject.likes + " Likes";
  
  // ...and the toy's like incrementer...
  const likeButton = document.createElement("button");
  likeButton.className = "like-btn";
  likeButton.id = toy.id;
  likeButton.textContent = "Like ❤️";
  likeButton.addEventListener("click", () => {
    fetch(`http://localhost:3000/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        // What we're about to send (an updated number of likes!)
        "Content-Type": "application/json",
        // What we expect to receive (the toy that was just patched in the database!)
        "Accept": "application/json"
      },
      body: JSON.stringify({
        // `++toy.likes` increments `toy.likes` BEFORE patching `likes`!
        likes: ++toy.likes
      })
    }).then(response => response.json())
    // Updating `likes.textContent` here (rather than before our `fetch()`)
    //          guarantees that it only updates after our PATCH succeeds.
    .then(patchedToy => likes.textContent = `${patchedToy.likes} Likes`);
  })
  
  // ...and the toy's delete button...
  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "like-btn");
  deleteButton.textContent = "Delete 🗑️";
  deleteButton.addEventListener("click", () => {
    // A DELETE request doesn't need `headers` or a `body` because
    //   we won't be sending or receiving anything.
    fetch(`http://localhost:3000/toys/${toy.id}`, { method: "DELETE" })
    // Removing the card here (rather than before our `fetch()`)
    //          guarantees that the DOM updates only after our DELETE succeeds.
    .then(response => { if (response.ok) { card.remove() } })
    // ...or...
    // .then(response => response.ok && card.remove())
  })

  // Finally, let's populate the card and append it to the DOM!
  card.append(name, image, likes, likeButton, deleteButton);
  document.querySelector("#toy-collection").append(card);
}

// Call `renderToy` on each toy in the database with a GET request on load.
fetch("http://localhost:3000/toys")
.then(response => response.json())
.then(toyObjectArray => toyObjectArray.forEach(renderToy));

// POST and render a new toy when the user submits the app's form.
const form = document.querySelector(".add-toy-form");
form.addEventListener("submit", event => {
  event.preventDefault();
  fetch("http://localhost:3000/toys", {
    method: "POST",
    headers: {
      // What we'll send (the newly submitted toy!)
      "Content-Type": "application/json",
      // What we want to receive (the toy that was just added to the database!)
      "Accept": "application/json"
    },
    body: JSON.stringify({
      // If we don't specify an `id`, JSON Server will make one for us.
      name: event.target.name.value,
      image: event.target.image.value,
      likes: 0
    })
  }).then(response => response.json())
  // Writing in just the name `renderToy` implicitly passes to that function
  //         whatever we get from `.then` (in this case, the just-POSTed toy). 
  .then(renderToy)
});
