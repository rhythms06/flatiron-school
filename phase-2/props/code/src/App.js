/*

Phase 2 -> Props
By Sakib Rasul
Created July 31, 2023

Core Deliverables
1. Define a <Boba> component.
2. Render our array of bobas as a list of <Boba> components.

*/

// To render a component inside of this component, import it!
import Boba from "./Boba";

function App() {
  // I'm explicitly defining this array here, but you can imagine retrieving it from an API.
  // Note: Remember to add unique identifiers for each object in your database!
  const bobas = [
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
  ]

  // Here's where we write our JSX, i.e. the UI this component represents.
  return (
    // Anything we can write in HTML, we can write in JSX.
    // We can even write inline CSS! Just remember to use camelCase.
    <div style={{ textAlign: "center" }}>
      <h1>Sakib's Boba Shop</h1>
      {/* We can also write JavaScript in { curly brackets }. */}
      {
        // We can use ternary operators to conditionally render JSX.
        // Here, we're rendering "No bobas available..." when we have no bobas
        //       and rendering our bobas when we do have bobas!
        bobas.length === 0 ?
          <h2>No bobas available. Come back later.</h2> :
          // To render a list of components, call Array.map() with an arrow function.
          //    On the left side of the arrow, name the singular list item.
          //    On the right side of the arrow, construct a JSX tag.
          //    Give that tag a unique `key` prop (this is where IDs come in handy!).
          // Tip: In Visual Studio Code, you can Control-/Command-Click on component
          //       names to quickly navigate to them!
          bobas.map(boba => <Boba key={boba.id} name={boba.name} price={boba.price} />)
      }
    </div>
  );
}

// Tip: You can move this up into App's declaration; see Boba for an example!
export default App;
