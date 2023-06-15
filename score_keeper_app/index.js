
let score = 0;
let wicket = 0;
let ball_wise_result = [];
let hit = 0;
let inputRef = React.createRef();

function addScore(num) {

    hit = num;
    rootElement.render(<App />);
}
function addWicket() {

    hit = "W";
    rootElement.render(<App />);
}

function handleSubmit() {
    event.preventDefault();

    if (hit === "W")
        wicket++;

    else
        score += hit;

    ball_wise_result.unshift(
        <span>[{hit}] &nbsp;&nbsp; {inputRef.current.value}</span>
    );
    hit=0;
    inputRef.current.value = "";
    // ^ inputRef.current.value is uncontrolled
    rootElement.render(<App />);
}
const ScoreButtons = () => (
    <div>
        {/* //~ directly argument nahi pass kar skte */}
        <button onClick={() => addScore(0)} className="buttons">0</button>
        <button onClick={() => addScore(1)} className="buttons">1</button>
        <button onClick={() => addScore(2)} className="buttons">2</button>
        <button onClick={() => addScore(3)} className="buttons">3</button>
        <button onClick={() => addScore(4)} className="buttons">4</button>
        <button onClick={() => addScore(5)} className="buttons">5</button>
        <button onClick={() => addScore(6)} className="buttons">6</button>
        <button onClick={addWicket} className="buttons">wicket</button>
    </div>
)

const Form = () => (
    <form onSubmit={handleSubmit}>
        {/* input is self inclosing tab and button is not */}

        <input value={hit} />
        <input ref={inputRef} placeholder="Add a comment" />
        <button>Submit</button>
    </form>
)


const Result = () => (
    ball_wise_result.map((res, index) => (<>
        <span key={index}>{res === 0 ? <strong>.</strong> : res === "W" ? <strong style={{ color: "red" }}>W</strong> : res}</span>
        <br />
    </>)
    )
)
const App = () => (<>
    <h1> Score Keeper</h1>
    <h2>Score: {score}/{wicket}</h2>
    <ScoreButtons />
    <br />
    <Form />
    <br />
    <hr />
    <Result />
</>);


const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
