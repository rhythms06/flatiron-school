import { useState } from "react";

// Remember, a "controlled form" is really a form that passes state to its inputs as props.
// In other words, we want to lift the state of each input up to their parent form.
export default function Form() {
    // Since we've only got two fields to control, let's use one state to manage each.
    const [name, setName] = useState("");
    const [movie, setMovie] = useState("");

    // For completeness, here's an alternative implementation with just one state.
    // This approach might make sense for a form with more than a few fields.
    // Just remember, always pass setState a **brand new object** :)
    // const [ user, setUser ] = useState({ name: "", movie: "" });
    // const { name, movie } = user;

    // We don't need a third state for luckyNumber, because it's derivable from existing state.
    // Note: charCodeAt() isn't something you need to know right now, I just threw it in for fun.
    // Note: This assignment works in the alternative implementation, too, as long as we deconstruct `user`.
    const luckyNumber =
        (name ? (name.charCodeAt(0) + (name.length * 2)) : 1) +
        (movie ? (movie.charCodeAt(0) + (movie.length * 3)) : 1);
    
    // We'll need a third state for our list of members.
    const [members, setMembers] = useState([]);

    // When the form is submitted, we'll call `setMembers()` to add to our list of members.
    const handleSubmit = event => {
        event.preventDefault();
        // To update state, we always pass a **brand new object** to the state setter.
        //    In this case, that means we pass an array with existing members, **and**
        //    our newest member. To get existing members, we use spread syntax.
        setMembers([
            ...members,
            {
                id: members.length,
                name: name,
                movie: movie
            }
        ])
        // To reset the form, we can revert our states to their initial values.
        setName("");
        setMovie("");
        // Uncomment for an alternative implementation with just one state.
        // setMembers([
        //     ...members,
        //     {
        //         id: members.length,
        //         ...user
        //     }
        // ])
        // setUser({ name: "", movie: "" });
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* To control an input, pass it a state getter (name) and setter (setName) as props (value, onChange). */}
            <label><strong>Name </strong>
                <input value={name} onChange={event => setName(event.target.value)} />
            </label>
            {/* Uncomment for an implementation of "Name" with just one state (without the bonus validation): */}
            {/* To control an input, pass it a state getter (user) and setter (setUser) as props (value, onChange). */}
            {/* <label><strong>Name </strong>
                <input value={name} onChange={event => setUser({ name: event.target.value, movie: movie })} />
            </label> */}
            {/* Uncomment for an implementation of name validation, where we reject the number 8! */}
            {/* <label><strong>Name </strong>
                <input value={name} onChange={event => setName(event.target.value.replace("8", ""))}/>
            </label> */}
            <br/><br/>
            {/* To control an input, pass it a state getter (movie) and setter (setMovie) as props (value, onChange). */}
            <label><strong>Movie </strong>
                <input value={movie} onChange={event => setMovie(event.target.value)}/>
            </label>
            {/* Uncomment for an implementation of "Movie" with just one state: */}
            {/* To control an input, pass it a state getter (user) and setter (setUser) as props (value, onChange). */}
            {/* <label><strong>Movie </strong>
                <input value={movie} onChange={event => setUser({ movie: event.target.value, name: name })}/>
            </label> */}
            <br/><br/>
            {/* Let's render the user's lucky number! */}
            {/* Note: This is one case - synchronization - where controlled components shine! */}
            {/*       As an exercise, consider how difficult it might be to implement luckyNumber without lifting state. */}
            <em>Your lucky number is</em> <strong>{luckyNumber}</strong>!
            <br/><br/>
            <input type="submit" value="Sign Up"/>
            {/* Let's render our list of members with `Array.map()`! */}
            <h2>Members</h2>
            { members.length > 0 ?
                members.map(member =>
                    <p key={member.id}>
                        <code>{member.name}</code><br/><em>{member.movie}</em>
                    </p>)
              : <sub>Fill out the form to add your first member!</sub>
            }
        </form>
    )
}