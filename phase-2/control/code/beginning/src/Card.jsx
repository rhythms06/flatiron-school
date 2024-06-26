export default function Card() {
    return (
        <h2 style={{ padding: "1rem",
                     display: "flex", flexDirection: "column", gap: "12px", alignItems: "center",
                     border: "solid black", borderRadius: "10px"
        }}>
            Ace of Spades
            <button>Nah.</button>
        </h2>
    )
  }