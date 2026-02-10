import ReactDOM from "react-dom/client";
import "./index.css";

const author = "John Michael";
const title = "Interesting Facts For You";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg";

// const Person = () => <h2>John Michael</h2>;
// const Message = () => {
//   return <p>This is my message</p>;
// };

const BookList = () => {
  return (
    <section className="booklist">
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <article className="booklist">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
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
