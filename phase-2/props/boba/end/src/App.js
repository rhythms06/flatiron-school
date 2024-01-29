/*

Phase 2 -> Props
By Sakib Rasul
Updated January 29, 2024
Created July 31, 2023

Core Deliverables
1. Create an array of items to sell in a boba shop.
2. Create a shop layout in <App>.
3. Define a <Item> component that displays one item.
4. Render our array of items as a list of <Item> components.

*/

// To render a component inside of this component, import it!
import Item from "./Item";

// React components are JavaScript functions that return JSX.
// <App> is the default "grandparent" component of React projects.
// For more information, see `index.js`. 
function App() {
  // Before we return JSX, we can do anything we've done in JS.
  const shopName = "Sakib's Boba Shop";
  // I'm explicitly defining this array here, but you can imagine retrieving it from an API.
  // Note: Remember to add unique identifiers for each object in your database!
  const items = [
    {
      id: 0,
      name: "Taro Milk",
      price: 3
    },
    {
      id: 1,
      name: "Green Tea",
      price: 1
    },
    {
      id: 2,
      name: "Dragon Fruit",
      price: 7
    },
    {
      id: 3,
      name: "Water",
      price: 0
    }
  ];
  // Here's where we write our JSX, i.e. the UI this component represents.
  return (
    // JSX is a mix between HTML and JavaScript.
    // Here's a great example: an HTML <div> with inline CSS denoted as a Javacript object!
    // In HTML, we would call `style` an *attribute* of <div>. In React, we say `style` is a *prop*.
    // Like attributes, props can have string values. Unlike attribute, props can also have JS values.
    // To write JS in JSX, we use { curly braces }.
    <div style={{ color: "blue", textAlign: "center" }}>
      <h1>{shopName}</h1>
      {
        // We can use ternary operators to conditionally render JSX.
        // Here, we're rendering "No items available..." when we have no items
        //       and rendering our items when we do have items!
        items.length === 0 ?
          <h2>No items available. Come back later.</h2> :
          // To render a list of components, call Array.map() with an arrow function.
          //    On the left side of the arrow, name the singular list item.
          //    On the right side of the arrow, construct a JSX tag.
          //    Give that tag a unique `key` prop (this is where IDs come in handy!).
          // Tip: In Visual Studio Code, you can Control-/Command-Click on component
          //       names to quickly navigate to them!
          items.map(item => <Item key={item.id} name={item.name} price={item.price} />)
      }
    </div>
  )
}

export default App;