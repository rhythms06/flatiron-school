/*

Phase 2 -> Controlled Components
Sakib Rasul | Updated January 31, 2024 | Created August 2, 2023

Core Deliverables
1. Write a function `randomize` that generates a random card string, e.g. "6 of Clubs".
2. Call `randomize` when `Nah.` is clicked in `Card`.
3. Display the current card string in `Card`.
4. (Bonus) Make the card's border "solid red" when the current suit is diamond or hearts
           and "solid black" when the current suit is clubs or spades.

*/

// We need to import `useState` from "react" before we can invoke it.
import { useState } from "react";
// To make `Card` a child of `App`, we need to import it (and render it) inside `App`.
import Card from "./Card";

export default function App() {
  const ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
  const suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
  // We'll need to use state to manage the current card string, because it's dynamic
  //       and independent of existing state and props.
  const [card, setCard] = useState("Ace of Spades");
  // This function randomizes `card`.
  const randomize = () => {
    const randomRank = ranks[Math.floor(Math.random() * ranks.length)]; // e.g. "Jack"
    const randomSuit = suits[Math.floor(Math.random() * suits.length)]; // e.g. "Hearts"
    setCard(randomRank + " of " + randomSuit) // "Jack of Hearts"
  }
  return (
    <div style={{ minHeight: "100vh",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center" }}>
      <h1>Is This Your Card?</h1>
      {/* To give `Card` access to `card` and `randomize()`, we'll pass them down as props. */}
      {/* In other words, we're letting `App` control both the card and the way it gets randomized. */}
      {/* Ergo, `Card` is a controlled component! */}
      <Card card={card} randomize={randomize} />
      <footer>&copy; 2023 Sakib Rasul</footer>
    </div>
  );
}