// * React with js

// const heading = React.createElement("h1", { className: "head", id: "multipleThings" }, "Hello React!");

// ! React with JSX -> this is not a component this is jus a variable

// const jsxHeading = <React.Fragment>
//                   <h1>HEADING</h1>
//                   <p> hi my name is kashish</p>
//                   </React.Fragment>
// const jsxHeading = <>
//     <h1>HEADING</h1>
//     <p> hi my name is kashish</p>
// </>
// * creating component

function App() {
    return (
        <>
            <h1>HEADING</h1>
            <p> hi my name is kashish</p>
        </>
        
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);

