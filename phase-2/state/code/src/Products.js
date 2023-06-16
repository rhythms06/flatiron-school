import Item from "./Item"

export default function Products({ items }) {
    // Render an unordered list of <Item> components, one for item.
    return (
        <ul>
            {/* [array].map([item] => [JSX]) lets you render stuff for each object in an array. */}
            {/* Note: Remember those unique identifiers? They're handy here. */}
            {items.map(item => <Item key={item.id} item={item} />)}
        </ul>
    )
}