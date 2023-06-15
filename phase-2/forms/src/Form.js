import { useState } from "react";

// Remember, a "controlled form" is really a form that passes state to its inputs as props.
// In other words, we want to lift the state of each input up to their parent form.
export default function Form() {
    // Since we've only got two fields to control, let's use one state to manage each.
    const [fullName, setFullName] = useState("");
    const [favoriteMovie, setFavoriteMovie] = useState("");

    // For completeness, here's an alternative implementation with just one state.
    // This approach might make sense for a form with more than a few fields.
    // Just remember, always pass setState a **brand new object** :)
    // let newUser = {
    //     fullName: "",
    //     favoriteMovie: ""
    // }
    // const [ user, setUser ] = useState(newUser);
    // const { fullName, favoriteMovie } = user;

    // We don't need a third state for luckyNumber, because it's derivable from existing state.
    // Note: charCodeAt() isn't something you need to know right now, I just threw it in for fun.
    // Note: This assignment works in the alternative implementation, too, as long as we deconstruct `user`.
    const luckyNumber =
        (fullName ? (fullName.charCodeAt(0) + (fullName.length * 2)) : 1) +
        (favoriteMovie ? (favoriteMovie.charCodeAt(0) + (favoriteMovie.length * 3)) : 1);

    // To handle form submissions, append to the body of this function.
    const handleSubmit = event => event.preventDefault(); 

    return (
        <form onSubmit={handleSubmit}>
            {/* To control an input, pass it a state getter (fullName) and setter (setFullName) as props (value, onChange). */}
            <label><strong>Full Name </strong>
                <input value={fullName} onChange={event => setFullName(event.target.value)} />
            </label>
            {/* Uncomment for an implementation of "Full Name" with just one state: */}
            {/* To control an input, pass it a state getter (user) and setter (setUser) as props (value, onChange). */}
            {/* <label><strong>Full Name </strong>
                <input value={fullName} onChange={event => setUser({ fullName: event.target.value, favoriteMovie: favoriteMovie })} />
            </label> */}
            <br/><br/>
            {/* To control an input, pass it a state getter (favoriteMovie) and setter (setFavoriteMovie) as props (value, onChange). */}
            <label><strong>Favorite Movie </strong>
                <input  value={favoriteMovie} onChange={event => setFavoriteMovie(event.target.value)}/>
            </label>
            {/* Uncomment for an implementation of "Favorite Movie" with just one state: */}
            {/* To control an input, pass it a state getter (user) and setter (setUser) as props (value, onChange). */}
            {/* <label><strong>Favorite Movie </strong>
                <input  value={favoriteMovie} onChange={event => setUser({ favoriteMovie: event.target.value, fullName: fullName })}/>
            </label> */}
            <br/><br/>
            {/* Let's render the user's lucky number! */}
            {/* Note: This is one case - synchronization - where controlled components shine! */}
            {/*       As an exercise, consider how difficult it might be to implement luckyNumber without lifting state. */}
            <em>Your lucky number is</em> <strong>{luckyNumber}</strong>!
            <br/><br/>
            {/* You should probably change `value` before/after changing `handleSubmit`. */}
            <input type="submit" value="This button doesn't do anything."/>
        </form>
    )
}