function Book({ id, img, title, author, handleBtnClick }) {
  return (
    <article className="book-card">
      <img
        src={img}
        alt="a book"
      />
      <h2>{title}</h2>

      <p>{author}</p>

      <button onClick={() => handleBtnClick(id)}> click me</button>
    </article>
  );
}

export default Book;
