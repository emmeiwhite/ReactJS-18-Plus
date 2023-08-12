import img1 from "./../assets/img1.jpg";
import img2 from "./../assets/img2.jpg";
import img3 from "./../assets/img3.jpg";
export const books = [
  {
    id: 1,
    img: img1,
    title: "One Shot",
    author: "Prashant ",
  },
  {
    id: 2,
    img: img2,
    title: "ikigai",
    author: "Author 2",
  },
  {
    id: 3,
    img: img3,
    title: "Atomic Habits",
    author: "Author 3",
  },
];

// function BookList() {
//   return (
//     <div>
//       {books.map(book => (
//         <div key={book.id}>
//           <img src={book.img} alt={book.title} />
//           <h3>{book.title}</h3>
//           <p>{book.author}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
