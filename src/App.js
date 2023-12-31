import React from "react";
import Book from "./components/Book";
import { books as booksData } from "./components/books";

function App() {
  const [books, setBooks] = React.useState(booksData);
  // Let's render books via map method

  // We have a single source of truth, all the application data is stored at the top or in a store

  const handleClick = (id) => {
    const currentBook = books.find((book) => book.id === id);
    console.log(currentBook);
  };
  const booksJSX = books.map((book) => (
    <Book
      {...book}
      key={book.id}
      handleBtnClick={handleClick}
    />
  ));

  return (
    <main className="app">
      <h1>Amazon Best Sellers </h1>
      <section className="books-wrapper">{booksJSX}</section>
    </main>
  );
}

export default App;
