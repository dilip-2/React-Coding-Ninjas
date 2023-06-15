

const App1 = () => {

    let arr = [1, 2, 3, 4, 5, 6];
    let obj = {
        name: "kashish",
        age: "23",
        dob: "05/08/2000"
    }
    return (<>
        <h1>Array and Object in javascripts</h1>

        {/* //~ <h2>{arr}</h2> ye sahi hai but ek hi line me print ho rha */}
        {arr.map((num) => <h2>{num}</h2>)} {/* //*ye arr.map dekho  */}

        {/* //~ <h2>{obj}</h2>    directly nahi kar skte */}
        <h2>Name: {obj.name}</h2>
        <h2>Age: {obj.age}</h2>
        <h2>DOB: {obj.dob}</h2>

    </>)
};

const Print = ReactDOM.createRoot(document.getElementById("root"));
Print.render(<App1 />);
