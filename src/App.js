import { Link, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { BookRoutes } from "./pages/BookRoutes";

function App() {
  const location = useLocation();
  // for checking the state, search or anything depending on location:
  console.log(location);

  // About state:
  // state is only stored inside this useLocation hook
  // state is persisted on page refresh
  // state is used to pass information from one component to another - without showing in the URL bar

  return (
    <>
      <ul>
        <li>
          {/* About Link */}
          {/* replace property: remove page from history, for specific cases like going back in a login scenario */}
          {/* reload property: reloads the entire page (not just the changed section) */}
          {/* alt: NavLink - has active state */}
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
      </ul>
      {location.state}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        {/* Routes moved to separate component */}
        {/* notice the /* at the end to make sure to match anything that comes after */}
        <Route path="/books/*" element={<BookRoutes />}></Route>
      </Routes>
    </>
  );
}

export default App;
