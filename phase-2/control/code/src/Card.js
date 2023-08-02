// To give `Card` access to `card` and `randomize()` from `App`, we'll destructure them from props.
// In other words, we're letting `App` control both the card and the way it gets randomized.
// Ergo, `Card` is a controlled component!
export default function Card({ card, randomize }) {
    // We can use `substring(start, end?)` and `indexOf(string)` to get the current suit.
    const suit = card.substring(card.indexOf("of") + 3); // e.g. "Diamonds"
    // We can use the ternary operator to conditionally set `border` based on `suit`.
    const border = (suit == "Diamonds" || suit == "Hearts") ? "solid red" : "solid black";
    return (
        <h2 style={{ padding: "1rem",
                     display: "flex", flexDirection: "column", gap: "12px", alignItems: "center",
                     border: border, borderRadius: "10px"
        }}>
            {/* Now we can render `App`'s `card` in `Card`! */}
            { card }
            {/* Now we can invoke `App`'s `randomize()` in `Card`! */}
            <button onClick={randomize}>Nah.</button>
        </h2>
    )
  }