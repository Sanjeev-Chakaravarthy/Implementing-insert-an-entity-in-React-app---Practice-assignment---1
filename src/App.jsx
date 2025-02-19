import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import booksData from "./booksData"; // Import booksData instead of redefining it
import "./App.css";

const App = () => {
  const [books, setBooks] = useState(booksData); // Use imported booksData

  const addBook = (newBook) => {
    console.log("New Book:", newBook); // Debugging
    setBooks([...books, { ...newBook, id: books.length + 1 }]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home books={books} />} />
        <Route path="/add-book" element={<AddBook addBook={addBook} />} />
      </Routes>
    </Router>
  );
};

export default App;
