import { useEffect, useState } from "react";
import Form from "../form";

// This component will render in the root's outlet at `/teas`.
export default function Teas() {
    // Access this route's loader data and store it in state.
    const [ teas, setTeas ] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/teas")
        .then(response => response.json())
        .then(teasInDatabase => setTeas(teasInDatabase));
    }, []);

    // We'll pass this function to <Form> to handle its `submit` event.
    function handleSubmit(event) {
        // Prevent default behavior.
        event.preventDefault();
        // POST the newly submitted tea and update state.
        fetch("http://localhost:3000/teas", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify({
                id: teas.length + 1,
                name: event.target.name.value,
                price: parseInt(event.target.price.value)
            })
        }).then(response => response.json())
          .then(newTea => setTeas([...teas, newTea]));
    }

    // Render a grid of teas, as well as a form for adding new ones.
    return (
        <div className="mt-2.5 grid grid-cols-2 gap-5">
            {teas.map(tea => 
                <div key={tea.id}>
                    <p>{tea.name}</p>
                    <sub>${tea.price}.00</sub>
                </div>
            )}
            <Form handleSubmit={handleSubmit} />
        </div>
    )
}