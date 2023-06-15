
let name = "kashish";
let age = "23";

const App1 = () => (<>
{/* //* jsx ke andar js likhna ho to curly brackets me likhn a hota hai */}
    <h1>Hello {name} </h1>
    <p>Age: {age}</p>
</>);

ReactDOM.createRoot(document.getElementById("root")).render(<App1 />);
