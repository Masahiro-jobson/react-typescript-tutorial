import ReactDOM from "react-dom/client";

// const Person = () => <h2>John Michael</h2>;
// const Message = () => {
//   return <p>This is my message</p>;
// };

const BookList = () => {
  return (
    <section>
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => <h2>image placeholder</h2>;
const Title = () => <h2>Book Title</h2>;
const Author = () => {
  return <h4>Book Author</h4>;
};

// Importing React and ReactDOM and Javascript entry point
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

export default BookList;
