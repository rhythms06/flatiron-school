import { useState } from "react"

// This form lets users add new teas to our backend.
// Note: On `submit`, this form will trigger `handleSubmit(event)`,
//       a function passed down to it from <Teas>.
export default function Form({ handleSubmit }) {
    // We'll control the form's inputs with state.
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    return (
        <form onSubmit={event => { setName(""); setPrice(0); handleSubmit(event); }} className="flex flex-col justify-between">
            <input name="name" type="text" placeholder="New Tea"
                    value={name} onChange={event => setName(event.target.value)}
                    className="px-1.5 w-28 h-6 border-2 rounded-md text-sm"
                />
            <div className="flex gap-2 items-end">
                <div>
                    <label><span className="text-xs">$</span>
                        <input name="price" type="number"
                               value={price} min={0} onChange={event => setPrice(event.target.value)}
                               className="px-1.5 w-12 h-4 border-2 border-t-0 border-x-0 text-xs"
                        />
                    </label>
                </div>
                <input type="submit" value="add tea"
                       className="text-sm text-gray-400 hover:italic hover:cursor-pointer"
                />
            </div>
        </form>
    )
}