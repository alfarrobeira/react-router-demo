import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import { BookList } from "./pages/BookList";
import { Home } from "./pages/Home";
import { Book } from "./pages/Book";
import { NewBook } from "./pages/NewBook";
import { NotFound } from "./pages/NotFound";
import { BookLayout } from "./pages/BookLayout";

function App() {
  return (
    <>
      {/* e.g. useful for content you want to have on every page, like a sidebar
      hardcode the location for specific use cases only
      <Routes location="/books">
        <Route path="/books" element={<h1>Extra content</h1>} />
      </Routes> */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        {/* Nested Routes: */}
        {/* Rem: remove path to wrap elements together that aren't related by URL into the same layout */}
        <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
