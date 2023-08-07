/*

Phase 1 -> Code Challenge: Human Factory
Created August 7, 2023
Sakib Rasul

OBJECTIVES
1. Run an instance of JSON Server that watches `db.json`.
2. Display humans on load.
3. Write a form for adding humans to the database.
4. Upon success, display the new human in the DOM.
5. On failure, display an error in the DOM.
6. Let users patch and delete existing humans.
7. (Bonus!) Do it all again for /cats, /dogs, and /robots.

*/

// This function takes as input a human object, and renders that human on the DOM.
function displayHuman(human) {
    // Let's start by selecting and creating some DOM elements.
    // Note: A <details> element renders expandable and collapsable item.
    //       To specify what's shown when the item is closed, we can append
    //       a <summary> element as its child. To specify what's shown when
    //       the item is open, we can append things that aren't <summary>
    //       as child(ren).
    const section = document.querySelector("#humans"); // <section id="humans"></section>
    const details = document.createElement("details"); // <details></details>
    const summary = document.createElement("summary"); // <summmary></summary>
    summary.textContent = human.name + " (" + human.age + "): " + human.job; // <summary>...</summary>
    const options = document.createElement("div"); // <div></div>
    const input = document.createElement("input"); // <input></input>
    input.placeholder = "Fashion Designer" // <input placeholder=...></input>
    // Now let's create a button that, when clicked, sends `PATCH`
    //     requests and updates `summary.textContent` accordingly! 
    const update = document.createElement("button"); // <button></button>
    update.textContent = "Update"; // <button>Update</button>
    update.addEventListener("click", () => {
        // To initiate a `PATCH` request,
        //    call `fetch()` with the URL of the object you'd like to update...
        fetch("http://localhost:3000/humans/" + human.id, {
            // ...and an options object which specifies your `method`...
            method: "PATCH",
            // ...`headers` specifying the kinds of content you'll send and receive...
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            // ...and a `body` specifying what you'd like to update!
            body: JSON.stringify({ job: input.value })
        })
        // Assuming the `PATCH` was successful, we can add two `.then()` clauses to
        //          update `summary.textContent` (the item's text when closed)
        //          and reset `input.value` (the inputted job text).
        .then(response => response.json())
        .then(patchedHuman => {
            summary.textContent = patchedHuman.name + " (" + patchedHuman.age + "): " + patchedHuman.job; // <li>...</li>
            input.value = "";
        })
    })
    // Now let's create a button that, when clicked, both
    //     deletes the human from the database and removes it from the DOM!
    const remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.addEventListener("click", () => {
        // To initiate a `DELETE` request,
        //    call `fetch()` with the URL of the object you'd like to delete,
        //    and an options object which specifies your `method`!
        // Note: We don't need to specify `headers` because we won't be sending anything
        //       or parsing anything from the response.
        // Note: We don't specify a `body` because we aren't sending anything.
        fetch("http://localhost:3000/humans/" + human.id, { method: "DELETE" })
        // We can check if the `DELETE` was successful by evaluating the boolean `response.ok`.
        .then(response => {
            if (response.ok) {
                item.remove();
                options.remove();
            }
        })
    })
    // Some styling to make each human's options look a bit nicer.
    options.style.display = "flex";
    options.style.width = "280px";
    options.style.justifyContent = "space-between";
    // Finally, let's append the input and two buttons to the options <div>,
    //          the <summary> and options to the human's <details>,
    //          and the human's <details> to <section id="humans">.
    options.append(input, update, remove);
    details.append(summary, options);
    section.append(details);
}

// On load, let's initiate a `GET` request to display all humans in the DOM.
fetch("http://localhost:3000/humans")
// We can use two `.then()` clauses to (a) parse the response and (b) render the parsed array.
.then(response => response.json())
.then(humans => humans.forEach(human => displayHuman(human)));

// Finally, let's handle form submissions for new humans.
const newHumanForm = document.querySelector("form#newHumanForm");
newHumanForm.addEventListener("submit", event => {
    // The first thing we'll want to do when the user hits submit is prevent default behavior.
    event.preventDefault();
    // Now that the setup's out of the way, let's add a new human to our database!
    // Note: In order for this call to work as expected, JSON Server will have to be up and running on port 3000.
    //       If it isn't running, our `.catch()` will run!
    fetch("http://localhost:3000/humans", {
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
            job: event.target.job.value
        })
    })
    // At this point, we've added a new human to our database!
    // But we'll often want to do additional things in two cases: (a) success and (b) failure.
    // To start handling case (a), we convert the response back from JSON to JS.
    .then(response => response.json())
    // Then, we do whatever we want with that JS object, which is the human we just added!
    // Here, we'll create a new <li> for the human and append it to #humans.
    .then(newHuman => displayHuman(newHuman))
    // To handle case (b), use the error object given at the start of a `.catch()` clause.
    // Here, we'll create a new <sub> for the error message and append it right after the <form>.
    .catch(error => {
        // A <sub> is just a small text tag.
        const message = document.createElement("sub");
        // `error.message` is a string explaining what went wrong.
        message.textContent = error.message;
        // `form.after()` lets us display an element right **after** our form.
        newHumanForm.after(message);
    });
})
