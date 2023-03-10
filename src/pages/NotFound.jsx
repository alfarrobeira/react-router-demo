import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/", { state: "Error page" })
        }, 1000)
    }, [])

    // to redirect to another page. e.g. back to home page
    return <h1>Not Found!</h1>
}