// Remember to import your hooks!
import { useState } from "react"

// We'll call on this component to initiate POST and PATCH requests,
//       so we'll need to make both the onSubmit handler and the menu item `id`
//       that the component is linked to dynamic. We can do so by passing both down
//       to the component as props from `App`.
export default function Form({ submitHandler, id }) {
    // Since each rendering of <Form> has data that probably should be managed with state,
    //       let's manage them both with state here. In other words, let's have
    //       Form *control* the `value` props of its name and price inputs.
    // Note that we set the initial value of `name` to "" because we know it should be a string,
    //      and the initial value of `price` to 0 because we know it should be a number.
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    return (
        // We'll handle submissions by invoking `submitHandler`,
        //       which we know from the parent `App` will be either `post` or `patch`.
        <form onSubmit={event => submitHandler(event, name, price, id)}>
            {/* Form controls this element's `value` prop. */}
            <input type="text"
                   value={name} onChange={event => setName(event.target.value)}
                   placeholder="Name" />{` `}
            {/* Form controls this element's `value` prop. */}
            <input type="number"
                   // When `value` is empty, `price` won't exist because `parseInt` will fail.
                   // We can handle that case by setting `value` to "" when `price` doesn't exist.     
                   value={price || ""} onChange={event => setPrice(parseInt(event.target.value))}
                   placeholder="$0" min="0" />{` `}
            {/* Form does *not* control this input. */}
            <input type="submit" value="Submit" />
      </form>
    )
}