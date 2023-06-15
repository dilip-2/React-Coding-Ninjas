//  ! array.map() SYNTEX
// let arr = [2, 5, 6, 3, 8, 9];
// map((element) => { /* … */ })
// map((element, index) => { /* … */ })
// map((element, index, array) => { /* … */ })
// map(function (element) { /* … */ })
// map(function (element, index) { /* … */ })
// map(function (element, index, array) { /* … */ })
// map(function (element, index, array) { /* … */ }, thisArg)


const App1 = () => {

    let cars = ["TATA", "BMW", "Audi", "NEXA", "CHESLA", "Honda", "Maruti", "Mahindra"];

    return (<>
        <ul>
            {cars.map((carName,index) => <li key={index} > {carName}</li>)}

        </ul>
    </>)
};

const Print = ReactDOM.createRoot(document.getElementById("root"));
Print.render(<App1 />);
