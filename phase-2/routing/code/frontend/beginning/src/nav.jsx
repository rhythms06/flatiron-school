// A <nav> that links out to /, /teas, and /about.
export default function Nav() {
    return (
        <nav className="flex justify-between">
            <a>Sakib's Tea House</a>
            <div className="flex gap-5 items-center">
                <a>Our Teas</a>
                <a>About</a>
            </div>
        </nav>
    )
}