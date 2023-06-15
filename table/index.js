//  ! array.map() SYNTEX
// let arr = [2, 5, 6, 3, 8, 9];
// map((element) => { /* … */ })
// map((element, index) => { /* … */ })
// map((element, index, array) => { /* … */ })
// map(function (element) { /* … */ })
// map(function (element, index) { /* … */ })
// map(function (element, index, array) { /* … */ })
// map(function (element, index, array) { /* … */ }, thisArg)

//~ thead/tbody/tfoot

const App1 = () => {

    let students = [
        { name: "kashish", age: "23", marks: "500" },
        { name: "tushar", age: "24", marks: "550" },
        { name: "shivam", age: "21", marks: "575" }
    ];

    return (<>
        <table border="1px">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Marks</th>
                </tr>
            </thead>
            <tbody>
  `              {students.map((obj, index) => {
                    return (<tr key={index}>
                        <td>{obj.name}</td>
                        <td>{obj.age}</td>
                        <td>{obj.marks}</td>
                    </tr>)
                })}`
            </tbody>

        </table>
    </>)
};

const Phone = () => {
    const itemsSold = [
        { id: 1, name: "iPhone 14", price: 1200, qty: 22 },
        { id: 2, name: "iPad Pro", price: 800, qty: 18 },
        { id: 3, name: "Macbook Air", price: 1500, qty: 7 },
        { id: 4, name: "Samsung S23", price: 1100, qty: 16 },
        { id: 5, name: "Dell Inspiron 5590", price: 1200, qty: 5 }
    ];
    let totalRevenue = 0;
    return (
        <>
            <h1>Record of sold items</h1>
            <table border="1px">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Selling price</th>
                        <th>quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {itemsSold.map((obj, index) => {
                        totalRevenue += obj.price;
                        return (<tr key={index}>
                            <td>{obj.id}</td>
                            <td>{obj.name}</td>
                            <td>{obj.price}</td>
                            <td>{obj.qty}</td>
                        </tr>)
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total Revenue</td>
                        <td colSpan={3}>{totalRevenue}</td>
                    </tr>
                </tfoot>
            </table>
        </>
    );
};


const Print = ReactDOM.createRoot(document.getElementById("root"));
Print.render(<><App1 /><Phone /></>);
