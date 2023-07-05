// If we just imported React, we'd have to invoke React.useState.
import { useState } from "react";

// To destructure an object within an object, separate the "nests" you want with a colon.
// Writing `export default` before our component saves us from writing `export default [function]` at the end of the file.
export default function Item({ item: { name, price } }) {
  // A state to hold whether or not this item is in the user's cart.
  // We know that this is a good use case for state because it is
  //    (a) dynamic and (b) independent of existing props and state.
  // We'll set its initial value to false (i.e. the item isn't in the cart)
  //       and update it to true/false when "Add to Cart"/"Remove from Cart" is clicked.
  const [ isInCart, setIsInCart ] = useState(false);

  return (
    <li>
      {/* Since we destructured props.item, we save ourselves from writing `item.name` and `item.price`. */}
      <h2>{name} for only ${price}!</h2>
      <p>
        {/* We're using this <span> as a button, so it'll be the tag that receives our state-updating-callback-function as a prop. */}
        <button onClick={() => { setIsInCart(!isInCart) }}>
          {/* On load: {true ? "Add to Cart" : "Remove from Cart"} a.k.a. Add to Cart */}
          <strong>{!isInCart ? "Add to Cart" : "Remove from Cart"}</strong>
          {/* After click and re-render: {false ? "Add to Cart" : "Remove from Cart"} a.k.a. Remove from Cart */}
          {/* After a second click and re-render: {true ? "Add to Cart" : "Remove from Cart"} a.k.a. Add to Cart */}
        </button>
        {/* Some manual spacing, nothing to see here... */}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {/* A second span element whose textContent depends on isInCart. */}
        {/* On load: {true ? "Not in Cart" : "In Cart"} a.k.a. Not in Cart */}
        <span>{!isInCart ? "Not in Cart" : "In Cart"}</span>
        {/* After a state update and re-render: {false ? "Not in Cart" : "In Cart"} a.k.a. In Cart */}
        {/* After a second state update and re-render: {true ? "Not in Cart" : "In Cart"} a.k.a. Not in Cart */}
      </p>
      {/* Some manual spacing between <Item> components, nothing to see here... */}
      <br/>
    </li>
  );
}