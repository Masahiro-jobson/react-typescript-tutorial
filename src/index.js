import ReactDOM from "react-dom/client";

function Greeting() {
  return <h2>My First component</h2>;
}

// Importing React and ReactDOM and Javascript entry point
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />);

export default Greeting;
