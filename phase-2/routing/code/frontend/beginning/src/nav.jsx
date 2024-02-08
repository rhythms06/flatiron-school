import { NavLink } from "react-router-dom";

// A <nav> that links out to /, /teas, and /about.
export default function Nav() {
    return (
        <nav className="flex justify-between">
            <NavLink to="/" className={({ isActive }) => `text-2xl hover:italic ${isActive && 'font-semibold'}`}>
                Sakib's Tea House
            </NavLink>
            <div className="flex gap-5 items-center">
                <NavLink to="/teas" className={({ isActive }) => `text-2xl hover:italic ${isActive && 'font-semibold'}`}>
                    Our Teas
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => `text-2xl hover:italic ${isActive && 'font-semibold'}`}>
                    About
                </NavLink>
            </div>
        </nav>
    )
}