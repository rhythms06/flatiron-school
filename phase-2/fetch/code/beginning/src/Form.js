export default function Form() {
    return (
        <form>
            <input name="name" type="text" placeholder="Name" />{` `}
            <input name="price" type="number" placeholder="0" min="0" />{` `}
            <input type="submit" value="Submit" />
      </form>
    )
}