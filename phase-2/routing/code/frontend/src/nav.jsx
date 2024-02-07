import { NavLink } from "react-router-dom";

// A <nav> that links out to /, /teas, and /about.
export default function Nav() {
    return (
        <nav className="flex justify-between">
            {/* Using NavLink lets us (a) "navigate to" / render different routes without requesting anything from the server */}
            {/*                   and (b) lets us keep track of the app's active route for styling purposes. */}
            <NavLink to="/" className={({ isActive }) => `text-2xl hover:italic ${isActive && 'font-semibold'}`}>
                Sakib's Tea House
            </NavLink>
            <div className="flex gap-5 items-center">
                <NavLink to="/teas"
                            className={({ isActive }) => `px-1.5 hover:underline ${isActive && 'font-semibold'}`}>
                    Our Teas
                </NavLink>
                <NavLink to="/about"
                            className={({ isActive }) => `px-1.5 hover:underline ${isActive && 'font-semibold'}`}>
                    About
                </NavLink>
            </div>
        </nav>
    )
}