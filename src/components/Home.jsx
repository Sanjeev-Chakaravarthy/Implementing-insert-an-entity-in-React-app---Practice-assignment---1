import React from "react";
import { useNavigate } from "react-router-dom";
import BookCard from "./BookCard";
import "./Home.css";

const Home = ({ books }) => {
  const navigate = useNavigate();

  console.log("Books in Home:", books); // Debugging

  const handleAddBookClick = () => {
    navigate("/add-book");
  };

  return (
    <div className="home-container">
      <h1>Book Library</h1>
      <button onClick={handleAddBookClick} className="add-book-button">
        Add Book
      </button>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;