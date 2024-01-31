// Components take in as input one object called `props`, and we use { curly braces }
//            to * destructure * that object's properties.
// We can also set default prop values with the equals sign!
// Tip: Writing `export default` here exports and declares our component in one line.
export default function Item({ name, price = 5 }) {
    return (
        // `name` and `price` refer to the props passed into `Item` from `App`.
        <div style={{ color: "green" }}>
            <h2>{name}</h2>
            <p>${price}.00</p>
        </div>
    )
};