import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import { BookList } from "./pages/BookList";
import { Home } from "./pages/Home";
import { Book } from "./pages/Book";
import { NewBook } from "./pages/NewBook";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
      </ul>
      <Routes>
        {/* refers to home path */}
        <Route path="/" element={<Home />} />
        {/* refers to all non-existent paths */}
        <Route path="*" element={<NotFound />} />
        {/* simple routing */}
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} />
      </Routes>
    </>
  );
}

export default App;