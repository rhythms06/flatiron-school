import { useRouteError, Link } from "react-router-dom"

// This component will render on errors.
export default function Error() {
    const error = useRouteError();
    return (
        <div className="m-5">
            <h1 className="text-xl">Yikes!</h1>
            <p className="text-xs mb-2">Something went wrong.</p>
            <p className="mb-3"><code>{error.status}: {error.statusText}</code></p>
            <Link to="/">🔙 take me home</Link>
            <footer className="mt-4 text-xs">&copy; 2023 Sakib Rasul</footer>
        </div>
    )
}