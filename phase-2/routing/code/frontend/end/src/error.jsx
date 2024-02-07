import { useRouteError } from "react-router";
import { Link } from "react-router-dom";

// This component will render on errors.
export default function Error() {
    // We can learn more about what happened with the `useRouteError` hook.
    const error = useRouteError();
    // Check the console for all the nitty-gritty...
    console.log(error);
    // ...but for simplicity we'll stick to rendering the error's status code and message.
    return (
        <div className="m-5">
            <h1 className="text-xl">Yikes!</h1>
            <p className="text-xs mb-2">Something went wrong.</p>
            <p className="mb-3"><code>{error.status}: {error.statusText}</code></p>
            {/* Using Link lets us render `/` without requesting anything from the server. */}
            <Link href="/">🔙 take me home</Link>
            {/* Since <Error> isn't a child of <Root>, we'll have to render our <footer> again. */}
            <footer className="mt-4 text-xs">&copy; 2023 Sakib Rasul</footer>
        </div>
    )
}