import {name , email} from "./HomePage";

export const Form = () => (
  <>
    <div>
      <form onSubmit={(event)=>event.preventDefault()}>
        <h3>Login Page</h3>
          <input value={name} placeholder="YourName" /> <br/><br/>
          <input value={email} type="email" placeholder="xyz@pqr.com"/>  <br/><br/>
          <button>Login</button>
        </form>
    </div>
  </>
);



// import React, { useState } from 'react';

// export const Form = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission logic here
//   };

//   return (
//     <>
//       <div>
//         <form onSubmit={handleSubmit}>
//           <h3>Login Page</h3>
//           <input
//             value={name}
//             onChange={handleNameChange}
//             placeholder="YourName"
//           />
//           <br/><br/>
//           <input
//             value={email}
//             onChange={handleEmailChange}
//             type="email"
//             placeholder="xyz@pqr.com"
//           />
//           <br/><br/>
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export const name = "Coding Ninjas";
// export const email = "Coding@ninjas.com";
