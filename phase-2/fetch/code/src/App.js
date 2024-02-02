/*

Phase 2 -> fetch()
By Sakib Rasul

Core Deliverables
1. Host our restaurant's menu (`public/db.json`) with JSON Server.
2. Render a list of menu items on load.
3. Feature one dish by printing its name in an <h2> element.
4. Render a "controlled" form for adding new dishes to the list *and* in db.json.
5. Render a "controlled" form next to each existing dish for updating its metadata both in the list *and* in db.json.

*/

// Remember to import any hooks you'll need!
import { useEffect, useState } from 'react';
// We're rendering multiple forms, so let's specify their JSX in a child component.
import Form from './Form';

export default function App() {
  // Let's use state to manage an array of our restaurant's dishes because:
  //       (a) it's dynamic (it'll start out empty, get populated on load, and then get modified with PATCH and DELETE requests)
  //   and (b) it doesn't depend on existing props or state (i.e., we can't use `error` to derive `dishes`).
  const [dishes, setDishes] = useState([]);
  // Let's *NOT* use state to manage the featured menu item, because it can be derived from `dishes`.
  const featuredDish = dishes.find(dish => dish.isFeatured);
  // Let's use state to manage our app's error message because:
  //       (a) it's dynamic (we're initially error-free, but might encounter an error on `fetch()`)
  //   and (b) it doesn't depend on existing props or state (i.e., we can't use `dishes` to derive `error`).
  const [error, setError] = useState("");

  // We need to wrap our GET request in an effect because we want it to run on mount, i.e. not after a DOM event.
  useEffect(() => {
    // Let's fetch our menu!
    fetch("http://localhost:3000/menu")
      // If we make a GET, POST, or PATCH request to JSON Server, we'll initially receive JSON that we need to parse.
      .then(response => response.json())
      // Since we're fetching our entire `menu`, we expect to receive an array of dishes.
      // To populate `dishes`, just call `setDishes` with that array.
      .then(menu => setDishes(menu))
      // Remember, fetch() might not always succeed; it's good practice to handle errors!
      .catch(error => setError(error.message));
  }, /* An empty dependency array tells React to run our effect on and only on mount. */ []);

  // A POST request to add a new dish to our menu!
  // We'll need access to:
  //       (a) `event` to let us call `event.preventDefault()` on the form that sent the request.
  //   and (b) `name` and `price` to POST a new dish to `db.json` and add it to `dishes`.
  // We'll get all three from the <Form> that initiates the request.
  function post(event, name, price) {
    // Prevent the form submission's default behavior.
    event.preventDefault();
    // Let's POST to our menu!
    fetch("http://localhost:3000/menu",
    // Fun Fact: When we don't include this object as our second parameter...
    {
      // ...`method` defaults to `GET`.
      method: "POST",
      // We specify `headers` to tell JSON Server we're hoping to both send and receive JSON.
      headers: {
        // We're sending JSON (the dish we want to add)...
        "Content-Type": "application/json",
        // ...and expecting JSON (the dish we successfully added).
        "Accept": "application/json"
      },
      // We specify `body` to send along our (JSONified) new dish.
      body: JSON.stringify({
        // We'll want to make sure to POST any fields we're rendering in our list (or else our list might break!)
        "name": name,
        "price": price
      })
    })
    // If we make a GET, POST, or PATCH request to JSON Server, we'll initially receive JSON that we need to parse.
    .then(response => response.json())
    // Since we're POSTing a new dish, we can expect to receive that newly added dish.
    // We can update our list by calling `setDishes` with spread syntax and that newly added dish.
    .then(newDish => setDishes([...dishes, newDish]))
    // Remember, fetch() might not always succeed; it's good practice to handle errors!
    .catch(error => setError(error.message));
  }

  // A PATCH request to update an existing dish.
  // We'll need access to:
  //       (a) `event` to let us call `event.preventDefault()` on the form that sent the request.
  //       (b) `name` and `price` to PATCH an existing dish in `db.json` and replace it in `dishes`.
  //   and (c) `id` to tell JSON Server with dish we want to PATCH.
  // We'll get all three from the <Form> that initiates the request.
  function patch(event, name, price, id) {
    // Prevent the form submission's default behavior.
    event.preventDefault();
    // Let's PATCH the menu item with identifier `id`!
    fetch(`http://localhost:3000/menu/${id}`, {
      // Again, we need to specify `method` because this isn't a GET request.
      method: "PATCH",
      // We specify `headers` to tell JSON Server we're hoping to both send and receive JSON.
      headers: {
        // We're sending JSON (the dish we want to update)...
        "Content-Type": "application/json",
        // ...and expecting JSON (the dish we successfully updated).
        "Accept": "application/json"
      },
      // We specify `body` to send along our (JSONified) updated dish.
      // Since this is a PATCH, we can update any number of fields, even ones that don't exist in db.json.
      // And we shouldn't specify an `id`, since we're updating an existing dish that already has one.
      body: JSON.stringify({
        name: name,
        price: price,
        // We can PATCH anything into existing items, even fields that don't yet exist in `db.json`.
        isTasty: true
      })
    })
    // If we make a GET, POST, or PATCH request to JSON Server, we'll initially receive JSON that we need to parse.
    .then(response => response.json())
    // Since we're PATCHing an existing dish, we can expect to receive the updated dish.
    // To update our list, we can map `dishes` to a new array, and pass that array to `setDishes`.
    .then(updatedDish => {
      // A multiline implementation...
      //
      // const newDishes = dishes.map(dish => {
      //   if (dish.id === id) { return updatedDish; }
      //   else { return dish; }
      // });
      // setDishes(newDishes);
      //
      // ...and a one-liner. Go with whatever's most comfortable for you!
      // Just remember to call `setDishes` with a brand new array.
      setDishes(dishes.map(dish => dish.id === id ? updatedDish : dish));
    })
    // Remember, fetch() might not always succeed; it's good practice to handle errors!
    .catch(error => setError(error.message));
  }

  // A DELETE request for removing an item from our menu!
  // Note: You may come across errors if you try to name this function `delete`.
  //       It's a reserved keyword in JavaScript, and we should avoid using them in new contexts.
  function remove(id) {
    // To send a DELETE request, fetch() the URL of object you want to remove, specify the `method`...
    fetch(`http://localhost:3000/menu/${id}`, { "method": "DELETE" })
    // ...and then, if response.ok is true (i.e. if the DELETE was successful),
    //    use `filter` to create a new array without the removed dish, and pass that array to `setDishes`!
    .then(response => response.ok && setDishes(dishes.filter(dish => dish.id !== id)))
    // Remember, fetch() might not always succeed; it's good practice to handle errors!
    .catch(error => setError(error.message));
  }

  // Finally, let's render our app!
  return (
    <main>
      <h1>Chez Flatiron</h1>
      {/* If an error exists, print it. If not, render our menu! */}
      {error ? <h2>Error: {error}</h2> :
        <section>
          {/* If featuredDish exists - remember, it doesn't until our GET effect succeeds - feature it! */}
          {featuredDish && <h2>Featured Dish: {featuredDish.name}!</h2>}
          {/* If we've got any dishes - remember, we don't have any until our GET effect succeeds - render them! */}
          {dishes.length > 0 && dishes.map(dish => 
            // Remember, React strongly recommends that you specify unique `key` props when rendering lists in JSX.
            <div key={dish.id}>
              {dish.name} | ${dish.price}{` `}
              {/* We'll handle clicks on this button with `remove(id)`. */}
              <span><button onClick={() => remove(dish.id)}>X</button></span>
              {/* We'll handle submissions on this form with `patch(event, name, price, id)`. */}
              {/* To give the child component read-only access to `patch` and `id`, we'll pass them down as props. */}
              {/* In doing so, we have our App control this Form's submission handler. */}
              {/* Note that our App does *not* control this Form's input values. */}
              {/* The Form will give App access to `name` and `price` when needed. */}
              {/* In other words, App *partially* controls this Form. */}
              <Form submitHandler={patch} id={dish.id} />
              {/* A line break for (bad) styling purposes. */}
              <br/>
            </div>
          )}
          {/* We'll handle submissions on this form with `post(event, name, price)`. */}
          {/* To give the child component read-only access to `post`, we'll pass it down as a prop. */}
          {/* In doing so, we have our App control this Form's submission handler. */}
          {/* Note that our App does *not* control this Form's input values. */}
          {/* The Form will give App access to `name` and `price` when needed. */}
          {/* In other words, App *partially* controls this Form. */}
          <h3>Submit a New Dish! <Form submitHandler={post} /></h3>
        </section>
      }
    </main>
  );
}
