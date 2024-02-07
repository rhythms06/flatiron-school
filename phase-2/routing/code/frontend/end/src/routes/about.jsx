// This component will render in the root's outlet at `/about`.
export default function About() {
    return (
        <div className="mt-3">
            <p>
                Email me at <a href="mailto:work@sakibrasul.com" className="hover:underline">work@sakibrasul.com</a>.
            </p>
            <div className="mt-5 flex flex-col text-xs">
                <p>please don't call me. unless you've got a tea-mergency.</p>
            </div>
        </div>
    )
}