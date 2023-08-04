/*

Phase 1 -> Sending Data
Updated August 4, 2023
Created May 26, 2023
Sakib Rasul

OBJECTIVES
1. Run an instance of JSON Server that watches `db.json`.
2. Write a form for adding humans to /humans.
3. Handle both successful and unsuccessful POST requests.
4. (Bonus!) Write forms and POST requests for /cats, /dogs, and /robots.

*/

// We start by adding an event listener to the form.
const form = document.querySelector("form");
form.addEventListener("submit", event => {
    // The first thing we'll want to do when the user hits submit is prevent default behavior.
    event.preventDefault();
    // Now that the setup's out of the way, let's add a new human to our database!
    // Note: In order for this call to work as expected, JSON Server will have to be up and running on port 3000.
    //       If it isn't running, our `.catch()` will run!
    fetch("http://localhost:3001/humans", {
        // If you don't specify a method, this defaults to "GET".
        // Note: Removing this parameter and keeping the rest of our options intact will produce an error. Try it :)
        method: "POST",
        // Headers are optional metadata about your request.
        headers: {
            "Content-Type": "application/json", // The kind of data (JSON) that you want to send.
            "Accept": "application/json" // The kind of data (JSON) that you want to receive.
        },
        // You can't send data without the data itself! That's where `body` comes in.
        // In this example, the "data" is an object with human properties like name, age, etc.
        // Remember that we're sending JSON, so we'll need to convert our JS with JSON.stringify.
        // Note: Removing this parameter won't result in an error, because our database doesn't
        //       know what a human should look like. We'll just "successfully" add an empty object to /humans.
        body: JSON.stringify({
            name: event.target.name.value,
            age: event.target.age.value,
            job: event.target.job.value,
            number: event.target.number.value
        })
    })
    // At this point, we've added a new human to our database!
    // But we'll often want to do additional things in two cases: (a) success and (b) failure.
    // To start handling case (a), we convert the response back from JSON to JS.
    .then(response => response.json())
    // Then, we do whatever we want with that JS object, which is the human we just added!
    // Here, we'll create a new <li> for the human and append it to #humans.
    .then(newHuman => {
        const humans = document.querySelector("#humans"); // <ul></ul>
        const human = document.createElement("li"); // <li></li>
        human.textContent = newHuman.name + " (" + newHuman.age + "): " + newHuman.job; // <li>...</li>
        humans.appendChild(human); // <ul><li>...</li></ul>
    })
    // To handle case (b), use the error object given at the start of a `.catch()` clause.
    // Here, we'll create a new <sub> for the error message and append it right after the <form>.
    .catch(error => {
        // A <sub> is just a small text tag.
        const message = document.createElement("sub");
        // `error.message` is a string explaining what went wrong.
        message.textContent = error.message;
        // `form.after()` lets us display an element right **after** our form.
        form.after(message);
    });
})
