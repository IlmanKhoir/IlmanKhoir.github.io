import { Link } from "react-router-dom"

export default function NotFoundPage() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="text-light">404 Not Found</div>
            <Link className="mt-3 btn btn-primary" to="/">Home</Link>
        </div>
    )
}
