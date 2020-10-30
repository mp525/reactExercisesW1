import React, { useEffect, useState } from "react";
import "./App.css";
import fetchAny from "./utils";
import Calculator from "./Calculator";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchAny("http://localhost:4000/books", setBooks);
  }, []);

  return (
    <div>
      {books.map((el) => (
        <p key={el.id}>{el.title}</p>
      ))}
    </div>
  );
}

function BooksAsync() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchAny("http://localhost:4000/books", setBooks);
  }, []);

  return (
    <div>
      {books.map((el) => (
        <p key={el.id}>{el.title}</p>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      Torsdag Class exercises:
      <Calculator />
      <Books />
      <h3>With async:</h3>
      <BooksAsync />
    </div>
  );
}

export default App;
