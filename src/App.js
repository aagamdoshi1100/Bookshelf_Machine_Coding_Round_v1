import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookContextProvider from "./BookStatusContext";
import Home from "./Home";
import Search from "./Search";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <BookContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </BookContextProvider>
      </Router>
    </div>
  );
}
