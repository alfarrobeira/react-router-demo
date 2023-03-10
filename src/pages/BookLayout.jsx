import { Link, Outlet, useSearchParams } from "react-router-dom";

// Navigation Component
export function BookLayout() {
    const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
    const number = searchParams.get("n");

    return (
        <>
            <Link to="/books/1">Book 1</Link>
            <br />
            <Link to="/books/2">Book 2</Link>
            <br />
            <Link to={`/books/${number}`}>Book {number}</Link>
            <br />
            <Link to="/books/new">New Book</Link>
            {/* Outlet is necessary to render content of child components of this element */}
            {/* context is helpful to share the same logic or data within one layout */}
            <Outlet context={{ hello: "World" }} />
            <input type="number" value={number} onChange={e => setSearchParams({ n: e.target.value })} />
        </>
    );
}