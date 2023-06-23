import Form from "../form";
import { useEffect, useId, useState } from "react";

// This component will render in the root's outlet at `/teas`.
export default function Teas() {
    const [ teas, setTeas ] = useState([]);
    // Though `useId` is meant for rendering accessibility attributes,
    // it's sufficient for string generation in this app.
    const id = useId();

    // On load, let's retrieve teas from our backend and hold them in state.
    useEffect(() => {
        fetch("http://localhost:3000/teas")
            .then(response => response.json())
            .then(teas => setTeas(teas));
    }, []);

    // We'll pass this function to <Form> to handle its `submit` event.
    function handleSubmit(event) {
        // Prevent default behavior.
        event.preventDefault();
        // Instantiate a new tea object.
        const newTea = {
            id: id,
            name: event.target.name.value,
            price: parseInt(event.target.price.value)
        };
        // POST `newTea` and update state.
        fetch("http://localhost:3000/teas", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify(newTea)
        }).then(response => response.json())
          .then(tea => setTeas([...teas, newTea]));
        // Reset the form.
        event.target.reset();
    }

    // Render a grid of teas, as well as a form for adding new ones.
    // Optional: While the teas load, we use a ternary expression to render a waiting state.
    return (
        <>
            {teas.length > 0 ?
                <div className="mt-2.5 grid grid-cols-2 gap-5">
                    {teas.map(tea => 
                        <div key={tea.id}>
                            <p>{tea.name}</p>
                            <sub>${tea.price}.00</sub>
                        </div>
                    )}
                    <Form handleSubmit={handleSubmit} />
                </div>
                :
                <div className="w-full h-96 flex justify-center items-center">Wait a sec...</div>
            }
        </>
    )
}