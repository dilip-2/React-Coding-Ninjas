// Complete the HomePage Component and export it
export const name = "Coding Ninjas";
export const email= "Coding@ninjas.com";

import {Form} from "./Form";

export function HomePage() {
  return (
    <div className="Homepage">
      <h1>HomePage</h1>
      <Form />
    </div>
  );
}
